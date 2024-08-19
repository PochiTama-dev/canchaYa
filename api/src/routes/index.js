import express from 'express';
const router = express.Router();

// Controladores importados
import {
    obtenerTodosUsuarios,
    obtenerUsuarioPorId,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
} from '../controllers/usuarioController.js';

import { 
    obtenerTodasCanchas,
    obtenerCanchaPorId,
    crearCancha,
    actualizarCancha,
    eliminarCancha
} from '../controllers/canchaController.js';

import { 
    obtenerTodasFotosCancha,
    obtenerFotoCanchaPorId,
    crearFotoCancha,
    actualizarFotoCancha,
    eliminarFotoCancha
} from '../controllers/fotoCanchaController.js';

import {
    obtenerTodasSubscripciones,
    obtenerSubscripcionPorId,
    crearSubscripcion,
    actualizarSubscripcion,
    eliminarSubscripcion
} from '../controllers/subscripcionController.js';

import {
    obtenerTodasMembresias,
    obtenerMembresiaPorId,
    crearMembresia,
    actualizarMembresia,
    eliminarMembresia
} from '../controllers/membresiaController.js';

import {
    obtenerTodasReservas,
    obtenerReservaPorId,
    crearReserva,
    actualizarReserva,
    eliminarReserva
} from '../controllers/reservaController.js';

import {
    obtenerTodosPagosMembresia,
    obtenerPagoMembresiaPorId,
    crearPagoMembresia,
    actualizarPagoMembresia,
    eliminarPagoMembresia
} from '../controllers/pagoMembresiaController.js';

import {
    obtenerTodosPagos,
    obtenerPagoPorId,
    crearPago,
    actualizarPago,
    eliminarPago
} from '../controllers/pagoController.js';

import {
    obtenerTodosHorariosDisponibilidad,
    obtenerHorarioDisponibilidadPorId,
    crearHorarioDisponibilidad,
    actualizarHorarioDisponibilidad,
    eliminarHorarioDisponibilidad
} from '../controllers/horarioDisponibilidadController.js';

// Rutas para Usuarios
router.get('/usuarios', obtenerTodosUsuarios);
router.get('/usuarios/:id', obtenerUsuarioPorId);
router.post('/crearUsuarios', crearUsuario);
router.put('/usuarios/:id', actualizarUsuario);
router.delete('/usuarios/:id', eliminarUsuario);

// Rutas para Canchas
router.get('/canchas', obtenerTodasCanchas);
router.get('/canchas/:id', obtenerCanchaPorId);
router.post('/crearCanchas', crearCancha);
router.put('/canchas/:id', actualizarCancha);
router.delete('/canchas/:id', eliminarCancha);

// Rutas para Fotos de Canchas
router.get('/fotos-cancha', obtenerTodasFotosCancha);
router.get('/fotos-cancha/:id', obtenerFotoCanchaPorId);
router.post('/crearFotos-cancha', crearFotoCancha);
router.put('/fotos-cancha/:id', actualizarFotoCancha);
router.delete('/fotos-cancha/:id', eliminarFotoCancha);

// Rutas para Subscripciones
router.get('/subscripciones', obtenerTodasSubscripciones);
router.get('/subscripciones/:id', obtenerSubscripcionPorId);
router.post('/crearSubscripciones', crearSubscripcion);
router.put('/subscripciones/:id', actualizarSubscripcion);
router.delete('/subscripciones/:id', eliminarSubscripcion);

// Rutas para Membresias
router.get('/membresias', obtenerTodasMembresias);
router.get('/membresias/:id', obtenerMembresiaPorId);
router.post('/crearMembresias', crearMembresia);
router.put('/membresias/:id', actualizarMembresia);
router.delete('/membresias/:id', eliminarMembresia);

// Rutas para Reservas
router.get('/reservas', obtenerTodasReservas);
router.get('/reservas/:id', obtenerReservaPorId);
router.post('/crearReservas', crearReserva);
router.put('/reservas/:id', actualizarReserva);
router.delete('/reservas/:id', eliminarReserva);

// Rutas para Pagos de Membresias
router.get('/pagos-membresias', obtenerTodosPagosMembresia);
router.get('/pagos-membresias/:id', obtenerPagoMembresiaPorId);
router.post('/crearPagos-membresias', crearPagoMembresia);
router.put('/pagos-membresias/:id', actualizarPagoMembresia);
router.delete('/pagos-membresias/:id', eliminarPagoMembresia);

// Rutas para Pagos
router.get('/pagos', obtenerTodosPagos);
router.get('/pagos/:id', obtenerPagoPorId);
router.post('/crearPagos', crearPago);
router.put('/pagos/:id', actualizarPago);
router.delete('/pagos/:id', eliminarPago);

// Rutas para Horarios de Disponibilidad
router.get('/horarios-disponibilidad', obtenerTodosHorariosDisponibilidad);
router.get('/crearHorarios-disponibilidad/:id', obtenerHorarioDisponibilidadPorId);
router.post('/horarios-disponibilidad', crearHorarioDisponibilidad);
router.put('/horarios-disponibilidad/:id', actualizarHorarioDisponibilidad);
router.delete('/horarios-disponibilidad/:id', eliminarHorarioDisponibilidad);

export default router;
