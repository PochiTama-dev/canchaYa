import { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './SelectedHours.css';

const SelectHours = ({ handleChange, handlePrevious }) => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [openTime, setOpenTime] = useState(dayjs('00:00', 'HH:mm'));
  const [closeTime, setCloseTime] = useState(dayjs('23:59', 'HH:mm'));
  const [additionalHours, setAdditionalHours] = useState({});
  const [showAdditionalHours, setShowAdditionalHours] = useState(false);
  const [additionalOpenTime, setAdditionalOpenTime] = useState(dayjs('00:00', 'HH:mm'));
  const [additionalCloseTime, setAdditionalCloseTime] = useState(dayjs('23:59', 'HH:mm'));
  const [tempSelectedDays, setTempSelectedDays] = useState([]);

  const toggleDay = (day) => {
    setSelectedDays((prevDays) =>
      prevDays.includes(day) ? prevDays.filter((d) => d !== day) : [...prevDays, day]
    );
  };

  const handleOpenTimeChange = (time) => {
    setOpenTime(time);
    const updatedHours = selectedDays.reduce((acc, day) => {
      acc[day] = { open: time.format('HH:mm'), close: closeTime.format('HH:mm') };
      return acc;
    }, {});
    handleChange({
      target: {
        name: 'hoursAndDays',
        value: updatedHours,
      },
    });
  };

  const handleCloseTimeChange = (time) => {
    setCloseTime(time);
    const updatedHours = selectedDays.reduce((acc, day) => {
      acc[day] = { open: openTime.format('HH:mm'), close: time.format('HH:mm') };
      return acc;
    }, {});
    handleChange({
      target: {
        name: 'hoursAndDays',
        value: updatedHours,
      },
    });
  };

  const handleAdditionalOpenTimeChange = (time) => {
    setAdditionalOpenTime(time);
  };

  const handleAdditionalCloseTimeChange = (time) => {
    setAdditionalCloseTime(time);
  };

  const handleAddAdditionalHours = () => {
    if (tempSelectedDays.length > 0) {
      const updatedHours = tempSelectedDays.reduce((acc, day) => {
        acc[day] = {
          open: additionalOpenTime.format('HH:mm'),
          close: additionalCloseTime.format('HH:mm')
        };
        return acc;
      }, {});
      setAdditionalHours((prev) => ({
        ...prev,
        ...updatedHours
      }));
      setShowAdditionalHours(false);
      setTempSelectedDays([]);
    }
  };

  const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const fullDays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  return (
    <div className="sh-select-hours-form">
      <div className="sh-input-group">
        <label>Selecciona los días de apertura y horario:</label>
        <div className="sh-days-container">
          {daysOfWeek.map((day, index) => (
            <button
              key={day}
              type="button"
              className={`sh-day-button ${selectedDays.includes(fullDays[index]) ? 'selected' : ''}`}
              onClick={() => toggleDay(fullDays[index])}
            >
              {day}
            </button>
          ))}
        </div>
        <div className="sh-time-input-container">
          <label htmlFor="openTime">Hora de apertura:</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileTimePicker
              value={openTime}
              onChange={handleOpenTimeChange}
              renderInput={(params) => <input {...params.inputProps} className="sh-react-time-picker" />}
              ampm={false}
              format="HH:mm"
            />
          </LocalizationProvider>
          <label htmlFor="closeTime">Hora de cierre:</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileTimePicker
              value={closeTime}
              onChange={handleCloseTimeChange}
              renderInput={(params) => <input {...params.inputProps} className="sh-react-time-picker" />}
              ampm={false}
              format="HH:mm"
            />
          </LocalizationProvider>
        </div>
        <button
          type="button"
          className="sh-button-add"
          onClick={() => setShowAdditionalHours(true)}
        >
          ¿Quieres agregar otro horario para un día en particular?
        </button>
        {showAdditionalHours && (
          <div className="sh-additional-hours-container">
            <label htmlFor="additionalDay">Selecciona los días:</label>
            <div className="sh-days-container">
              {daysOfWeek.map((day, index) => (
                <button
                  key={day}
                  type="button"
                  className={`sh-day-button ${tempSelectedDays.includes(fullDays[index]) ? 'selected' : ''}`}
                  onClick={() => {
                    setTempSelectedDays((prev) =>
                      prev.includes(fullDays[index]) ? prev.filter(d => d !== fullDays[index]) : [...prev, fullDays[index]]
                    );
                  }}
                >
                  {day}
                </button>
              ))}
            </div>
            <label htmlFor="additionalOpenTime">Hora de apertura:</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileTimePicker
                value={additionalOpenTime}
                onChange={handleAdditionalOpenTimeChange}
                renderInput={(params) => <input {...params.inputProps} className="sh-react-time-picker" />}
                ampm={false}
                format="HH:mm"
              />
            </LocalizationProvider>
            <label htmlFor="additionalCloseTime">Hora de cierre:</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileTimePicker
                value={additionalCloseTime}
                onChange={handleAdditionalCloseTimeChange}
                renderInput={(params) => <input {...params.inputProps} className="sh-react-time-picker" />}
                ampm={false}
                format="HH:mm"
              />
            </LocalizationProvider>
            <button
              type="button"
              className="sh-button-add"
              onClick={handleAddAdditionalHours}
            >
              Agregar horario
            </button>
            <button
              type="button"
              className="sh-button-add"
              onClick={() => setShowAdditionalHours(false)}
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
      <div className="sh-button-container">
        <button type="button" className="sh-button-add" onClick={handlePrevious}>
          Anterior
        </button>
        <button type="submit" className="sh-button-add">
          Finalizar
        </button>
      </div>
    </div>
  );
};

SelectHours.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handlePrevious: PropTypes.func.isRequired,
};

export default SelectHours;
