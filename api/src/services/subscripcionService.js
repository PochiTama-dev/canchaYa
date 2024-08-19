// src/services/subscripcionService.js
import { Subscripcion } from '../models/associations.js';

export const getAllSubscripciones = async () => {
  return await Subscripcion.findAll();
};

export const getSubscripcionById = async (id) => {
  return await Subscripcion.findByPk(id);
};

export const createSubscripcion = async (subscripcion) => {
  return await Subscripcion.create(subscripcion);
};

export const updateSubscripcion = async (id, subscripcion) => {
  const [updated] = await Subscripcion.update(subscripcion, { where: { id } });
  if (updated) {
    return await Subscripcion.findByPk(id);
  }
  return null;
};

export const deleteSubscripcion = async (id) => {
  return await Subscripcion.destroy({ where: { id } });
};
