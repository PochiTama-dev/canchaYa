// src/services/fotoCanchaService.js
import { FotoCancha } from '../models/associations.js';

export const getAllFotosCancha = async () => {
  return await FotoCancha.findAll();
};

export const getFotoCanchaById = async (id) => {
  return await FotoCancha.findByPk(id);
};

export const createFotoCancha = async (fotoCancha) => {
  return await FotoCancha.create(fotoCancha);
};

export const updateFotoCancha = async (id, fotoCancha) => {
  const [updated] = await FotoCancha.update(fotoCancha, { where: { id } });
  if (updated) {
    return await FotoCancha.findByPk(id);
  }
  return null;
};

export const deleteFotoCancha = async (id) => {
  return await FotoCancha.destroy({ where: { id } });
};
