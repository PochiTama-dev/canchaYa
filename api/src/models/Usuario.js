import { DataTypes } from 'sequelize';
import Sequelize from '../config/config.js';

const Usuario = Sequelize.define('Usuario', {
    nombre: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    contraseña: { type: DataTypes.STRING, allowNull: false },
    tipo_usuario: { type: DataTypes.ENUM('administrador', 'dueño', 'usuario'), allowNull: false },
    fecha_registro: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    timestamps: false
});

export default Usuario;
