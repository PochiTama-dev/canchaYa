import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Register.css';
import Logo from '../../../assets/logo.png'; 

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validate(name, value);
  };

  const validate = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!/^[a-zA-Z\s]{2,}$/.test(value)) {
          error = 'El nombre debe tener al menos 2 caracteres y solo puede contener letras y espacios.';
        }
        break;
      case 'email':
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) {
          error = 'Email inválido.';
        }
        break;
      case 'password':
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(value)) {
          error = 'La contraseña debe tener entre 6 y 20 caracteres, incluyendo al menos una letra mayúscula, una letra minúscula y un número.';
        }
        break;
      case 'confirmPassword':
        if (value !== formData.password) {
          error = 'Las contraseñas no coinciden.';
        }
        break;
      default:
        break;
    }

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.values(errors).some((error) => error) && Object.values(formData).every((field) => field)) {
      console.log('Formulario enviado', formData);
    
      history.push('/agregar-canchas');
    }
  };

  return (
    <div className="main-container">
      <div className="form-container-register">
        <img src={Logo} alt="Logo" className="logo" />
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Nombre y Apellido</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=""
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=""
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder=""
            />
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Verificar Contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirm-password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder=""
            />
            {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
          </div>
          <button type="submit" className="sign" disabled={Object.values(errors).some((error) => error)}>
            Carga tus Canchas
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
