// src/models/PagoMembresia.js
import { DataTypes } from 'sequelize';
import Sequelize from '../config/config.js';
import Membresia from './Membresia.js';

const PagoMembresia = Sequelize.define('PagoMembresia', {
    id_membresia: {
        type: DataTypes.INTEGER,
        references: {
            model: Membresia,
            key: 'id'
        }
    },
    fecha_pago: { type: DataTypes.DATE, allowNull: false },
    monto: { type: DataTypes.DECIMAL(10, 2), allowNull: false }
});

PagoMembresia.belongsTo(Membresia, { foreignKey: 'id_membresia' });

export default PagoMembresia;
