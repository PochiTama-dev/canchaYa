// src/controllers/horarioDisponibilidadController.js
import {
    getAllHorariosDisponibilidad,
    getHorarioDisponibilidadById,
    createHorarioDisponibilidad,
    updateHorarioDisponibilidad,
    deleteHorarioDisponibilidad
  } from '../services/horarioDisponibilidadService.js';
  
  export const obtenerTodosHorariosDisponibilidad = async (req, res) => {
    try {
      const horariosDisponibilidad = await getAllHorariosDisponibilidad();
      res.status(200).json(horariosDisponibilidad);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los horarios de disponibilidad' });
    }
  };
  
  export const obtenerHorarioDisponibilidadPorId = async (req, res) => {
    try {
      const { id } = req.params;
      const horarioDisponibilidad = await getHorarioDisponibilidadById(id);
      if (horarioDisponibilidad) {
        res.status(200).json(horarioDisponibilidad);
      } else {
        res.status(404).json({ error: 'Horario de disponibilidad no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el horario de disponibilidad' });
    }
  };
  
  export const crearHorarioDisponibilidad = async (req, res) => {
    try {
      const horarioDisponibilidad = req.body;
      console.log("Creando horario de disponibilidad:", horarioDisponibilidad);
      const nuevoHorarioDisponibilidad = await createHorarioDisponibilidad(horarioDisponibilidad);
      console.log("Horario de disponibilidad creado:", nuevoHorarioDisponibilidad);
      res.status(201).json(nuevoHorarioDisponibilidad);
    } catch (error) {
      console.error("Error al crear el horario de disponibilidad:", error);
      res.status(500).json({ error: 'Error al crear el horario de disponibilidad' });
    }
  };
  
  
  export const actualizarHorarioDisponibilidad = async (req, res) => {
    try {
      const { id } = req.params;
      const horarioDisponibilidad = req.body;
      const actualizado = await updateHorarioDisponibilidad(id, horarioDisponibilidad);
      if (actualizado) {
        res.status(200).json(actualizado);
      } else {
        res.status(404).json({ error: 'Horario de disponibilidad no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el horario de disponibilidad' });
    }
  };
  
  export const eliminarHorarioDisponibilidad = async (req, res) => {
    try {
      const { id } = req.params;
      const eliminado = await deleteHorarioDisponibilidad(id);
      if (eliminado) {
        res.status(200).json({ message: 'Horario de disponibilidad eliminado' });
      } else {
        res.status(404).json({ error: 'Horario de disponibilidad no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el horario de disponibilidad' });
    }
  };
  