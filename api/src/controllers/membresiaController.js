// src/controllers/membresiaController.js
import {
    getAllMembresias,
    getMembresiaById,
    createMembresia,
    updateMembresia,
    deleteMembresia
  } from '../services/membresiaService.js';
  
  export const obtenerTodasMembresias = async (req, res) => {
    try {
      const membresias = await getAllMembresias();
      res.status(200).json(membresias);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las membresías' });
    }
  };
  
  export const obtenerMembresiaPorId = async (req, res) => {
    try {
      const { id } = req.params;
      const membresia = await getMembresiaById(id);
      if (membresia) {
        res.status(200).json(membresia);
      } else {
        res.status(404).json({ error: 'Membresía no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la membresía' });
    }
  };
  
  export const crearMembresia = async (req, res) => {
    try {
      const membresia = req.body;
      const nuevaMembresia = await createMembresia(membresia);
      res.status(201).json(nuevaMembresia);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la membresía' });
    }
  };
  
  export const actualizarMembresia = async (req, res) => {
    try {
      const { id } = req.params;
      const membresia = req.body;
      const actualizado = await updateMembresia(id, membresia);
      if (actualizado) {
        res.status(200).json(actualizado);
      } else {
        res.status(404).json({ error: 'Membresía no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la membresía' });
    }
  };
  
  export const eliminarMembresia = async (req, res) => {
    try {
      const { id } = req.params;
      const eliminado = await deleteMembresia(id);
      if (eliminado) {
        res.status(200).json({ message: 'Membresía eliminada' });
      } else {
        res.status(404).json({ error: 'Membresía no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la membresía' });
    }
  };
  