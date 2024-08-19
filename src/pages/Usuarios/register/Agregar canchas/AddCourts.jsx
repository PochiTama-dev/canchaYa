import { useState } from 'react';
import './AddCourts.css'; // Asegúrate de que la ruta del CSS sea correcta
import SelectHours from '../Seleccionar Horarios/SelectedHours'; // Importa el nuevo componente

const AddCourts = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    clubName: '',
    numberOfCourts: '',
    sports: [],
    soccerTypes: [],
    otherSports: [], // Agregado para manejar deportes adicionales
    hoursAndDays: '',
    photos: [], // Almacena fotos para cada cancha
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSportChange = (index, e) => {
    const { value } = e.target;
    const updatedSports = [...formData.sports];
    updatedSports[index] = value;
    setFormData({
      ...formData,
      sports: updatedSports,
      otherSports: formData.otherSports.map((sport, i) => i === index ? '' : sport), // Limpiar si cambia la selección
    });
  };

  const handleOtherSportChange = (index, e) => {
    const { value } = e.target;
    const updatedOtherSports = [...formData.otherSports];
    updatedOtherSports[index] = value;
    setFormData({
      ...formData,
      otherSports: updatedOtherSports,
    });
  };

  const handleSoccerTypeChange = (index, e) => {
    const { value } = e.target;
    const updatedSoccerTypes = [...formData.soccerTypes];
    updatedSoccerTypes[index] = value;
    setFormData({
      ...formData,
      soccerTypes: updatedSoccerTypes,
    });
  };

  const handleNumberOfCourtsChange = (e) => {
    const numberOfCourts = e.target.value;
    setFormData({
      ...formData,
      numberOfCourts,
      sports: Array(Number(numberOfCourts)).fill(''),
      soccerTypes: Array(Number(numberOfCourts)).fill(''),
      otherSports: Array(Number(numberOfCourts)).fill(''), // Inicializar el estado para deportes adicionales
      photos: Array(Number(numberOfCourts)).fill([]),
    });
  };

  const handlePhotoChange = (index, e) => {
    const files = Array.from(e.target.files);
    const updatedPhotos = [...formData.photos];
    updatedPhotos[index] = files.slice(0, 5); // Limita a 5 fotos
    setFormData({
      ...formData,
      photos: updatedPhotos,
    });
  };

  const handlePhotoRemove = (courtIndex, photoIndex) => {
    const updatedPhotos = [...formData.photos];
    updatedPhotos[courtIndex] = updatedPhotos[courtIndex].filter((_, i) => i !== photoIndex);
    setFormData({
      ...formData,
      photos: updatedPhotos,
    });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Procesa el formulario aquí
    console.log('Datos enviados', formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="form-step">
            <div className="input-group">
              <label htmlFor="clubName">¿Cuál es el nombre de tu club o cancha?</label>
              <input
                type="text"
                name="clubName"
                id="clubName"
                value={formData.clubName}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="numberOfCourts">¿Cuántas canchas tienes?</label>
              <input
                type="number"
                name="numberOfCourts"
                id="numberOfCourts"
                value={formData.numberOfCourts}
                onChange={handleNumberOfCourtsChange}
              />
            </div>
            {formData.numberOfCourts > 0 && (
              <div>
                {formData.sports.map((_, index) => (
                  <div key={index} className="input-group">
                    <label htmlFor={`sport-${index}`}>¿De qué deporte es la cancha {index + 1}?</label>
                    <select
                      name={`sport-${index}`}
                      id={`sport-${index}`}
                      value={formData.sports[index] || ''}
                      onChange={(e) => handleSportChange(index, e)}
                    >
                      <option value="">Seleccionar...</option>
                      <option value="futbol">Fútbol</option>
                      <option value="basquet">Básquet</option>
                      <option value="baseball">Baseball</option>
                      <option value="hockey">Hockey</option>
                      <option value="voley">Volley</option>
                      <option value="tenis">Tenis</option>
                      <option value="paddle">Paddle</option>
                      <option value="otro">Otro</option>
                    </select>
                    {formData.sports[index] === 'futbol' && (
                      <div className="input-group">
                        <label htmlFor={`soccerType-${index}`}>¿Qué tipo de cancha es?</label>
                        <select
                          name={`soccerType-${index}`}
                          id={`soccerType-${index}`}
                          value={formData.soccerTypes[index] || ''}
                          onChange={(e) => handleSoccerTypeChange(index, e)}
                        >
                          <option value="">Seleccionar...</option>
                          <option value="5">5</option>
                          <option value="7">7</option>
                          <option value="9">9</option>
                          <option value="11">11</option>
                        </select>
                      </div>
                    )}
                    {formData.sports[index] === 'otro' && (
                      <div className="input-group">
                        <label htmlFor={`otherSport-${index}`}>¿De qué deporte es tu cancha?</label>
                        <input
                          type="text"
                          name={`otherSport-${index}`}
                          id={`otherSport-${index}`}
                          value={formData.otherSports[index] || ''}
                          onChange={(e) => handleOtherSportChange(index, e)}
                        />
                      </div>
                    )}
                    <div className="input-group">
                      <label htmlFor={`photos-${index}`}>Sube hasta 5 fotos para la cancha {index + 1}</label>
                      <div className="photo-preview-container">
                        {formData.photos[index]?.map((file, fileIndex) => (
                          <div key={fileIndex} className="photo-preview">
                            <img
                              src={URL.createObjectURL(file)}
                              alt={`Vista previa ${fileIndex + 1}`}
                              className="photo-img"
                            />
                            <button
                              type="button"
                              className="remove-photo"
                              onClick={() => handlePhotoRemove(index, fileIndex)}
                            >
                              &times;
                            </button>
                          </div>
                        ))}
                        {formData.photos[index]?.length < 5 && (
                          <label htmlFor={`add-photo-${index}`} className="add-photo-button">
                            +
                            <input
                              type="file"
                              id={`add-photo-${index}`}
                              multiple
                              accept="image/*"
                              onChange={(e) => handlePhotoChange(index, e)}
                            />
                          </label>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="button-container">
              <button type="button" className="button-add center-button" onClick={handleNext}>
                Selecciona tus Horarios
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <SelectHours
            formData={formData}
            handleChange={handleChange}
            handlePrevious={handlePrevious}
            handleSubmit={handleSubmit}
          />
        )}
      </form>
    </div>
  );
};

export default AddCourts;
