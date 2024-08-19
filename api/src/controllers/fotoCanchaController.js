// src/controllers/fotoCanchaController.js
import {
    getAllFotosCancha,
    getFotoCanchaById,
    createFotoCancha,
    updateFotoCancha,
    deleteFotoCancha
  } from '../services/fotoCanchaService.js';
  
  export const obtenerTodasFotosCancha = async (req, res) => {
    try {
      const fotosCancha = await getAllFotosCancha();
      res.status(200).json(fotosCancha);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las fotos de cancha' });
    }
  };
  
  export const obtenerFotoCanchaPorId = async (req, res) => {
    try {
      const { id } = req.params;
      const fotoCancha = await getFotoCanchaById(id);
      if (fotoCancha) {
        res.status(200).json(fotoCancha);
      } else {
        res.status(404).json({ error: 'Foto de cancha no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la foto de cancha' });
    }
  };
  
  export const crearFotoCancha = async (req, res) => {
    try {
      const fotoCancha = req.body;
      const nuevaFotoCancha = await createFotoCancha(fotoCancha);
      res.status(201).json(nuevaFotoCancha);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la foto de cancha' });
    }
  };
  
  export const actualizarFotoCancha = async (req, res) => {
    try {
      const { id } = req.params;
      const fotoCancha = req.body;
      const actualizado = await updateFotoCancha(id, fotoCancha);
      if (actualizado) {
        res.status(200).json(actualizado);
      } else {
        res.status(404).json({ error: 'Foto de cancha no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la foto de cancha' });
    }
  };
  
  export const eliminarFotoCancha = async (req, res) => {
    try {
      const { id } = req.params;
      const eliminado = await deleteFotoCancha(id);
      if (eliminado) {
        res.status(200).json({ message: 'Foto de cancha eliminada' });
      } else {
        res.status(404).json({ error: 'Foto de cancha no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la foto de cancha' });
    }
  };
  