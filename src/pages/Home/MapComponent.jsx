import { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FaUser } from 'react-icons/fa'; // Icono de perfil de react-icons
import './mapComponentStyles.css'; // Importar el archivo CSS
import customIconUrl from '../../assets/icon/football.ico';


const customIcon = new L.Icon({
    iconUrl: customIconUrl,
    iconSize: [32, 32], 
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32],
});

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: customIconUrl,
    iconUrl: customIconUrl,
    shadowUrl: '', 
});

const defaultCenter = [-34.7334, -58.5951];


const bbox = [-58.75, -34.85, -58.4, -34.55]; 

const MapComponent = () => {
  const [position, setPosition] = useState(defaultCenter);
  const [suggestions, setSuggestions] = useState([]);
  const mapRef = useRef();
  const suggestionsRef = useRef(null); // Referencia para el contenedor de sugerencias

  const apiKey = 'c7778bb5bb994ac88ff65b8732e2cbdf';

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setPosition([latitude, longitude]);
            if (mapRef.current) {
              mapRef.current.setView([latitude, longitude], 13);
            }
          },
          (error) => {
            console.error('Error getting location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = async (event) => {
    const query = event.target.value;
    if (query) {
      try {
        const response = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(query)}&apiKey=${apiKey}&bias=proximity:${defaultCenter.join(',')}&bbox=${bbox.join(',')}&limit=10`);
        const data = await response.json();
        if (data.features && data.features.length > 0) {
          setSuggestions(data.features);
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error('Error fetching geocode:', error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (coordinates) => {
    const [lon, lat] = coordinates;
    setPosition([lat, lon]);

    if (mapRef.current) {
      mapRef.current.setView([lat, lon], 13);
    }

    setSuggestions([]);
  };

  const MapViewUpdater = () => {
    const map = useMap();
    mapRef.current = map;

    return null;
  };

  return (
    <div className="map-container">
      <form className="search-form">
        <input 
          type="text" 
          name="query" 
          placeholder="Busca tu cancha o lugar para jugar" 
          className="search-input"
          onChange={handleInputChange}
        />
        <div 
          className="profile-icon"
          onClick={() => window.location.href = '/iniciar-sesion'}
        >
          <FaUser size={24} />
        </div>
        <div ref={suggestionsRef} className="suggestions-box">
          {suggestions.length > 0 && (
            <>
              {suggestions.map((suggestion, index) => {
                const coordinates = suggestion.geometry.coordinates;
                return (
                  <div 
                    key={index}
                    className="suggestion-item"
                    onClick={() => handleSuggestionClick(coordinates)}
                  >
                    {suggestion.properties.formatted}
                  </div>
                );
              })}
            </>
          )}
        </div>
      </form>
      <MapContainer style={{ height: '100%', width: '100%' }} center={position} zoom={13} scrollWheelZoom={false}>
        <MapViewUpdater />
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmxhY2szdmFtcGlyZSIsImEiOiJjbHo4NDVjNzUwZXQzMnJwbzNmcXYzbmtkIn0.cgxUR-nR_ggTuEv7t1lkcA`}
          id="mapbox/dark-v10"
          tileSize={512}
          zoomOffset={-1}
          attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            Quilmes, Buenos Aires. <br /> ¡Encuentra el lugar perfecto para practicar!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
