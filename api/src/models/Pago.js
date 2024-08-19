// src/models/Pago.js
import { DataTypes } from 'sequelize';
import Sequelize from '../config/config.js';
import  Reserva  from './Reserva.js';
import Usuario from './Usuario.js';

const Pago = Sequelize.define('Pago', {
    id_reserva: {
        type: DataTypes.INTEGER,
        references: {
            model: Reserva,
            key: 'id'
        }
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id'
        }
    },
    fecha_pago: { type: DataTypes.DATE, allowNull: false },
    monto: { type: DataTypes.DECIMAL(10, 2), allowNull: false }
});

Pago.belongsTo(Reserva, { foreignKey: 'id_reserva' });
Pago.belongsTo(Usuario, { foreignKey: 'id_usuario' });
export default Pago;
