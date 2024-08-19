// src/services/pagoService.js
import { Pago } from '../models/associations.js';

export const getAllPagos = async () => {
  return await Pago.findAll();
};

export const getPagoById = async (id) => {
  return await Pago.findByPk(id);
};

export const createPago = async (pago) => {
  return await Pago.create(pago);
};

export const updatePago = async (id, pago) => {
  const [updated] = await Pago.update(pago, { where: { id } });
  if (updated) {
    return await Pago.findByPk(id);
  }
  return null;
};

export const deletePago = async (id) => {
  return await Pago.destroy({ where: { id } });
};
