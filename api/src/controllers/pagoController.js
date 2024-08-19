// src/controllers/pagoController.js
import {
    getAllPagos,
    getPagoById,
    createPago,
    updatePago,
    deletePago
  } from '../services/pagoService.js';
  
  export const obtenerTodosPagos = async (req, res) => {
    try {
      const pagos = await getAllPagos();
      res.status(200).json(pagos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los pagos' });
    }
  };
  
  export const obtenerPagoPorId = async (req, res) => {
    try {
      const { id } = req.params;
      const pago = await getPagoById(id);
      if (pago) {
        res.status(200).json(pago);
      } else {
        res.status(404).json({ error: 'Pago no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el pago' });
    }
  };
  
  export const crearPago = async (req, res) => {
    try {
      const pago = req.body;
      const nuevoPago = await createPago(pago);
      res.status(201).json(nuevoPago);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el pago' });
    }
  };
  
  export const actualizarPago = async (req, res) => {
    try {
      const { id } = req.params;
      const pago = req.body;
      const actualizado = await updatePago(id, pago);
      if (actualizado) {
        res.status(200).json(actualizado);
      } else {
        res.status(404).json({ error: 'Pago no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el pago' });
    }
  };
  
  export const eliminarPago = async (req, res) => {
    try {
      const { id } = req.params;
      const eliminado = await deletePago(id);
      if (eliminado) {
        res.status(200).json({ message: 'Pago eliminado' });
      } else {
        res.status(404).json({ error: 'Pago no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el pago' });
    }
  };
  