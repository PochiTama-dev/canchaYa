// src/services/canchaService.js
import { Cancha } from '../models/associations.js';

export const getAllCanchas = async () => {
  return await Cancha.findAll();
};

export const getCanchaById = async (id) => {
  return await Cancha.findByPk(id);
};

export const createCancha = async (cancha) => {
  return await Cancha.create(cancha);
};

export const updateCancha = async (id, cancha) => {
  const [updated] = await Cancha.update(cancha, { where: { id } });
  if (updated) {
    return await Cancha.findByPk(id);
  }
  return null;
};

export const deleteCancha = async (id) => {
  return await Cancha.destroy({ where: { id } });
};
