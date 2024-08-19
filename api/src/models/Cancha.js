// src/models/Cancha.js
import { DataTypes } from 'sequelize';
import Sequelize from '../config/config.js';
import Usuario from './Usuario.js';

const Cancha = Sequelize.define('Cancha', {
    nombre: { type: DataTypes.STRING, allowNull: false },
    direccion: { type: DataTypes.STRING, allowNull: false },
    latitud: { type: DataTypes.DECIMAL(9, 6), allowNull: false },
    longitud: { type: DataTypes.DECIMAL(9, 6), allowNull: false },
    descripcion: { type: DataTypes.TEXT },
    foto_perfil: { type: DataTypes.STRING },
    id_dueño: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id'
        }
    }
});

Cancha.belongsTo(Usuario, { foreignKey: 'id_dueño' });

export default Cancha;

