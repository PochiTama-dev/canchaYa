// src/services/membresiaService.js
import { Membresia } from '../models/associations.js';

export const getAllMembresias = async () => {
  return await Membresia.findAll();
};

export const getMembresiaById = async (id) => {
  return await Membresia.findByPk(id);
};

export const createMembresia = async (membresia) => {
  return await Membresia.create(membresia);
};

export const updateMembresia = async (id, membresia) => {
  const [updated] = await Membresia.update(membresia, { where: { id } });
  if (updated) {
    return await Membresia.findByPk(id);
  }
  return null;
};

export const deleteMembresia = async (id) => {
  return await Membresia.destroy({ where: { id } });
};
