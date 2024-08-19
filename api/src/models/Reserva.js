// src/models/Reserva.js
import { DataTypes } from 'sequelize';
import Sequelize from '../config/config.js';
import Usuario from './Usuario.js';
import Cancha from './Cancha.js';

const Reserva = Sequelize.define('Reserva', {
    id_usuario: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id'
        }
    },
    id_cancha: {
        type: DataTypes.INTEGER,
        references: {
            model: Cancha,
            key: 'id'
        }
    },
    fecha_reserva: { type: DataTypes.DATE, allowNull: false },
    horario_inicio: { type: DataTypes.TIME, allowNull: false },
    horario_fin: { type: DataTypes.TIME, allowNull: false },
    estado: { type: DataTypes.ENUM('pendiente', 'confirmada', 'cancelada'), defaultValue: 'pendiente' }
});

Reserva.belongsTo(Usuario, { foreignKey: 'id_usuario' });
Reserva.belongsTo(Cancha, { foreignKey: 'id_cancha' });
export default Reserva;
