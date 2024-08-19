// src/models/Membresia.js
import { DataTypes } from 'sequelize';
import Sequelize from '../config/config.js';
import Usuario from './Usuario.js';

const Membresia = Sequelize.define('Membresia', {
    id_dueño: {
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

Membresia.belongsTo(Usuario, { foreignKey: 'id_dueño' });

export default Membresia;
