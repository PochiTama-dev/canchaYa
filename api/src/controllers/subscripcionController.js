// src/controllers/subscripcionController.js
import {
    getAllSubscripciones,
    getSubscripcionById,
    createSubscripcion,
    updateSubscripcion,
    deleteSubscripcion
  } from '../services/subscripcionService.js';
  
  export const obtenerTodasSubscripciones = async (req, res) => {
    try {
      const subscripciones = await getAllSubscripciones();
      res.status(200).json(subscripciones);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las suscripciones' });
    }
  };
  
  export const obtenerSubscripcionPorId = async (req, res) => {
    try {
      const { id } = req.params;
      const subscripcion = await getSubscripcionById(id);
      if (subscripcion) {
        res.status(200).json(subscripcion);
      } else {
        res.status(404).json({ error: 'Suscripción no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la suscripción' });
    }
  };
  
  export const crearSubscripcion = async (req, res) => {
    try {
      const subscripcion = req.body;
      const nuevaSubscripcion = await createSubscripcion(subscripcion);
      res.status(201).json(nuevaSubscripcion);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la suscripción' });
    }
  };
  
  export const actualizarSubscripcion = async (req, res) => {
    try {
      const { id } = req.params;
      const subscripcion = req.body;
      const actualizado = await updateSubscripcion(id, subscripcion);
      if (actualizado) {
        res.status(200).json(actualizado);
      } else {
        res.status(404).json({ error: 'Suscripción no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la suscripción' });
    }
  };
  
  export const eliminarSubscripcion = async (req, res) => {
    try {
      const { id } = req.params;
      const eliminado = await deleteSubscripcion(id);
      if (eliminado) {
        res.status(200).json({ message: 'Suscripción eliminada' });
      } else {
        res.status(404).json({ error: 'Suscripción no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la suscripción' });
    }
  };
  