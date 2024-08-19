// src/models/Subscripcion.js
import { DataTypes } from 'sequelize';
import Sequelize from '../config/config.js';
import Usuario from './Usuario.js';

const Subscripcion = Sequelize.define('Subscripcion', {
    id_usuario: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id'
        }
    },
    fecha_inicio: { type: DataTypes.DATE, allowNull: false },
    fecha_fin: { type: DataTypes.DATE, allowNull: false },
    tipo: { type: DataTypes.ENUM('mensual', 'anual'), allowNull: false },
    estado: { type: DataTypes.ENUM('activa', 'inactiva'), defaultValue: 'activa' }
});

Subscripcion.belongsTo(Usuario, { foreignKey: 'id_usuario' });
export default Subscripcion;
