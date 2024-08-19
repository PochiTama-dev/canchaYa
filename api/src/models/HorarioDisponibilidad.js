// src/models/HorarioDisponibilidad.js
import { DataTypes } from 'sequelize';
import Sequelize from '../config/config.js';
import Cancha from './Cancha.js';

const HorarioDisponibilidad = Sequelize.define('HorarioDisponibilidad', {
    id_cancha: {
        type: DataTypes.INTEGER,
        references: {
            model: Cancha,
            key: 'id'
        }
    },
    dia_semana: { type: DataTypes.ENUM('lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'), allowNull: false },
    horario_inicio: { type: DataTypes.TIME, allowNull: false },
    horario_fin: { type: DataTypes.TIME, allowNull: false }
});

HorarioDisponibilidad.belongsTo(Cancha, { foreignKey: 'id_cancha' });

export default HorarioDisponibilidad;
