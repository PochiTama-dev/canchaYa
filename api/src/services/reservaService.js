// src/services/reservaService.js
import { Reserva } from '../models/associations.js';

export const getAllReservas = async () => {
  return await Reserva.findAll();
};

export const getReservaById = async (id) => {
  return await Reserva.findByPk(id);
};

export const createReserva = async (reserva) => {
  return await Reserva.create(reserva);
};

export const updateReserva = async (id, reserva) => {
  const [updated] = await Reserva.update(reserva, { where: { id } });
  if (updated) {
    return await Reserva.findByPk(id);
  }
  return null;
};

export const deleteReserva = async (id) => {
  return await Reserva.destroy({ where: { id } });
};
