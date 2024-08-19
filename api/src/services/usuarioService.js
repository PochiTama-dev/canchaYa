// src/services/usuarioService.js
import { Usuario } from '../models/associations.js';

export const getAllUsuarios = async () => {
  return await Usuario.findAll();
};

export const getUsuarioById = async (id) => {
  return await Usuario.findByPk(id);
};

export const createUsuario = async (usuario) => {
  return await Usuario.create(usuario);
};

export const updateUsuario = async (id, usuario) => {
  const [updated] = await Usuario.update(usuario, { where: { id } });
  if (updated) {
    return await Usuario.findByPk(id);
  }
  return null;
};

export const deleteUsuario = async (id) => {
  return await Usuario.destroy({ where: { id } });
};
