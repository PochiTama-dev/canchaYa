
import { DataTypes } from 'sequelize';

import Sequelize from '../config/config.js';

import Cancha from'./Cancha.js';

const FotoCancha = Sequelize.define('FotoCancha', {
    id_cancha: {
        type: DataTypes.INTEGER,
        references: {
            model: Cancha,
            key: 'id'
        }
    },
    ruta_foto: { type: DataTypes.STRING, allowNull: false },
    descripcion: { type: DataTypes.TEXT }
});

FotoCancha.belongsTo(Cancha, { foreignKey: 'id_cancha' });

export default FotoCancha;
