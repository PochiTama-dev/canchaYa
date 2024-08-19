// src/controllers/reservaController.js
import {
    getAllReservas,
    getReservaById,
    createReserva,
    updateReserva,
    deleteReserva
  } from '../services/reservaService.js';
  
  export const obtenerTodasReservas = async (req, res) => {
    try {
      const reservas = await getAllReservas();
      res.status(200).json(reservas);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las reservas' });
    }
  };
  
  export const obtenerReservaPorId = async (req, res) => {
    try {
      const { id } = req.params;
      const reserva = await getReservaById(id);
      if (reserva) {
        res.status(200).json(reserva);
      } else {
        res.status(404).json({ error: 'Reserva no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la reserva' });
    }
  };
  
  export const crearReserva = async (req, res) => {
    try {
      const reserva = req.body;
      const nuevaReserva = await createReserva(reserva);
      res.status(201).json(nuevaReserva);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la reserva' });
    }
  };
  
  export const actualizarReserva = async (req, res) => {
    try {
      const { id } = req.params;
      const reserva = req.body;
      const actualizado = await updateReserva(id, reserva);
      if (actualizado) {
        res.status(200).json(actualizado);
      } else {
        res.status(404).json({ error: 'Reserva no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la reserva' });
    }
  };
  
  export const eliminarReserva = async (req, res) => {
    try {
      const { id } = req.params;
      const eliminado = await deleteReserva(id);
      if (eliminado) {
        res.status(200).json({ message: 'Reserva eliminada' });
      } else {
        res.status(404).json({ error: 'Reserva no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la reserva' });
    }
  };
  