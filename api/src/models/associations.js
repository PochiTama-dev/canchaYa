import Cancha from './Cancha.js';
import Usuario from './Usuario.js';
import  FotoCancha  from './FotoCancha.js';
import  Subscripcion  from './Subscripcion.js';
import  Membresia  from './Membresia.js';
import  Reserva  from './Reserva.js';
import  PagoMembresia  from './PagoMembresia.js';
import  Pago  from './Pago.js';
import  HorarioDisponibilidad from './HorarioDisponibilidad.js';

// Asociaciones entre Usuario y Cancha
Cancha.belongsTo(Usuario, { as: 'dueño', foreignKey: 'id_dueño' });
Usuario.hasMany(Cancha, { as: 'canchas', foreignKey: 'id_dueño' });

// Asociaciones entre Cancha y FotoCancha
FotoCancha.belongsTo(Cancha, { foreignKey: 'id_cancha' });
Cancha.hasMany(FotoCancha, { foreignKey: 'id_cancha' });

// Asociaciones entre Cancha y Reserva
Reserva.belongsTo(Cancha, { foreignKey: 'id_cancha' });
Cancha.hasMany(Reserva, { foreignKey: 'id_cancha' });

// Asociaciones entre Usuario y Reserva
Reserva.belongsTo(Usuario, { as: 'usuario', foreignKey: 'id_usuario' });
Usuario.hasMany(Reserva, { as: 'reservas', foreignKey: 'id_usuario' });

// Asociaciones entre Cancha y Subscripcion
Subscripcion.belongsTo(Cancha, { foreignKey: 'id_cancha' });
Cancha.hasMany(Subscripcion, { foreignKey: 'id_cancha' });

// Asociaciones entre Subscripcion y Membresia
Subscripcion.belongsTo(Membresia, { foreignKey: 'id_membresia' });
Membresia.hasMany(Subscripcion, { foreignKey: 'id_membresia' });

// Asociaciones entre Membresia y PagoMembresia
PagoMembresia.belongsTo(Membresia, { foreignKey: 'id_membresia' });
Membresia.hasMany(PagoMembresia, { foreignKey: 'id_membresia' });

// Asociaciones entre PagoMembresia y Pago
Pago.belongsTo(PagoMembresia, { foreignKey: 'id_pago_membresia' });
PagoMembresia.hasMany(Pago, { foreignKey: 'id_pago_membresia' });

// Asociaciones entre Cancha y HorarioDisponibilidad
HorarioDisponibilidad.belongsTo(Cancha, { foreignKey: 'id_cancha' });
Cancha.hasMany(HorarioDisponibilidad, { foreignKey: 'id_cancha' });

export {
  Usuario,
  Cancha,
  FotoCancha,
  Subscripcion,
  Membresia,
  Reserva,
  PagoMembresia,
  Pago,
  HorarioDisponibilidad
};
