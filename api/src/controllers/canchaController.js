// src/controllers/canchaController.js
import {
    getAllCanchas,
    getCanchaById,
    createCancha,
    updateCancha,
    deleteCancha
  } from '../services/canchaService.js';
  
  export const obtenerTodasCanchas = async (req, res) => {
    try {
      const canchas = await getAllCanchas();
      res.status(200).json(canchas);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las canchas' });
    }
  };
  
  export const obtenerCanchaPorId = async (req, res) => {
    try {
      const { id } = req.params;
      const cancha = await getCanchaById(id);
      if (cancha) {
        res.status(200).json(cancha);
      } else {
        res.status(404).json({ error: 'Cancha no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la cancha' });
    }
  };
  
  export const crearCancha = async (req, res) => {
    try {
      const cancha = req.body;
      const nuevaCancha = await createCancha(cancha);
      res.status(201).json(nuevaCancha);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la cancha' });
    }
  };
  
  export const actualizarCancha = async (req, res) => {
    try {
      const { id } = req.params;
      const cancha = req.body;
      const actualizado = await updateCancha(id, cancha);
      if (actualizado) {
        res.status(200).json(actualizado);
      } else {
        res.status(404).json({ error: 'Cancha no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la cancha' });
    }
  };
  
  export const eliminarCancha = async (req, res) => {
    try {
      const { id } = req.params;
      const eliminado = await deleteCancha(id);
      if (eliminado) {
        res.status(200).json({ message: 'Cancha eliminada' });
      } else {
        res.status(404).json({ error: 'Cancha no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la cancha' });
    }
  };
  