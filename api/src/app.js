import express from 'express';
import cors from 'cors';
import helmet from 'helmet'; // Importar helmet
import sequelize from './config/config.js';
import routes from './routes/index.js';  

const app = express();

// Configurar helmet
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        fontSrc: ["'self'", "data:", "http://localhost:8000"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'"],
        connectSrc: ["'self'", "http://localhost:8000"],
      },
    },
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Conexión a la base de datos
const dbTesting = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

dbTesting();

// Usar las rutas importadas
app.use('/api', routes); // Puedes ajustar el prefijo de ruta según tus necesidades

app.listen(8000, () => console.log('Server running on port 8000'));
