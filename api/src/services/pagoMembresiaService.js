// src/services/pagoMembresiaService.js
import { PagoMembresia } from '../models/associations.js';

export const getAllPagosMembresia = async () => {
  return await PagoMembresia.findAll();
};

export const getPagoMembresiaById = async (id) => {
  return await PagoMembresia.findByPk(id);
};

export const createPagoMembresia = async (pagoMembresia) => {
  return await PagoMembresia.create(pagoMembresia);
};

export const updatePagoMembresia = async (id, pagoMembresia) => {
  const [updated] = await PagoMembresia.update(pagoMembresia, { where: { id } });
  if (updated) {
    return await PagoMembresia.findByPk(id);
  }
  return null;
};

export const deletePagoMembresia = async (id) => {
  return await PagoMembresia.destroy({ where: { id } });
};
