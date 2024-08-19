// src/services/horarioDisponibilidadService.js
import { HorarioDisponibilidad } from '../models/associations.js';

export const getAllHorariosDisponibilidad = async () => {
  return await HorarioDisponibilidad.findAll();
};

export const getHorarioDisponibilidadById = async (id) => {
  return await HorarioDisponibilidad.findByPk(id);
};

export const createHorarioDisponibilidad = async (horarioDisponibilidad) => {
  return await HorarioDisponibilidad.create(horarioDisponibilidad);
};

export const updateHorarioDisponibilidad = async (id, horarioDisponibilidad) => {
  const [updated] = await HorarioDisponibilidad.update(horarioDisponibilidad, { where: { id } });
  if (updated) {
    return await HorarioDisponibilidad.findByPk(id);
  }
  return null;
};

export const deleteHorarioDisponibilidad = async (id) => {
  return await HorarioDisponibilidad.destroy({ where: { id } });
};
