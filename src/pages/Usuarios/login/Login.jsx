import './Login.css';
import Logo from '../../../assets/logo.png';

const Login = () => {
  return (
    <div className="main-container">
      <div className="form-container-login">
        <img src={Logo} alt="Logo" className="logo" /> {/* Reemplaza el texto por el logo */}
        <form className="form">
          <div className="input-group">
            <label htmlFor="username">Usuario</label>
            <input type="text" name="username" id="username" placeholder="" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" placeholder="" />
            <div className="forgot">
              <a rel="noopener noreferrer" href="#">¿Olvidaste tu contraseña?</a>
            </div>
          </div>
          <button className="sign-login">Iniciar Sesión</button>
        </form>
        <div className="social-message">
          <div className="line"></div>
          <p className="message">Iniciar sesión con otra cuenta</p>
          <div className="line"></div>
        </div>
        <div className="social-icons">
          <button aria-label="Log in with Google" className="icon google-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <span>Iniciar sesión con Google</span>
          </button>
        </div>
        <p className="signup">
          ¿No tenés cuenta?
          <a rel="noopener noreferrer" href="/registro"> Regístrate</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
