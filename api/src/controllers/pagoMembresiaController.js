// src/controllers/pagoMembresiaController.js
import {
    getAllPagosMembresia,
    getPagoMembresiaById,
    createPagoMembresia,
    updatePagoMembresia,
    deletePagoMembresia
  } from '../services/pagoMembresiaService.js';
  
  export const obtenerTodosPagosMembresia = async (req, res) => {
    try {
      const pagosMembresia = await getAllPagosMembresia();
      res.status(200).json(pagosMembresia);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los pagos de membresía' });
    }
  };
  
  export const obtenerPagoMembresiaPorId = async (req, res) => {
    try {
      const { id } = req.params;
      const pagoMembresia = await getPagoMembresiaById(id);
      if (pagoMembresia) {
        res.status(200).json(pagoMembresia);
      } else {
        res.status(404).json({ error: 'Pago de membresía no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el pago de membresía' });
    }
  };
  
  export const crearPagoMembresia = async (req, res) => {
    try {
      const pagoMembresia = req.body;
      const nuevoPagoMembresia = await createPagoMembresia(pagoMembresia);
      res.status(201).json(nuevoPagoMembresia);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el pago de membresía' });
    }
  };
  
  export const actualizarPagoMembresia = async (req, res) => {
    try {
      const { id } = req.params;
      const pagoMembresia = req.body;
      const actualizado = await updatePagoMembresia(id, pagoMembresia);
      if (actualizado) {
        res.status(200).json(actualizado);
      } else {
        res.status(404).json({ error: 'Pago de membresía no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el pago de membresía' });
    }
  };
  
  export const eliminarPagoMembresia = async (req, res) => {
    try {
      const { id } = req.params;
      const eliminado = await deletePagoMembresia(id);
      if (eliminado) {
        res.status(200).json({ message: 'Pago de membresía eliminado' });
      } else {
        res.status(404).json({ error: 'Pago de membresía no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el pago de membresía' });
    }
  };
  