// src/controllers/usuarioController.js
import {
    getAllUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario
  } from '../services/usuarioService.js';
  
  export const obtenerTodosUsuarios = async (req, res) => {
    try {
      const usuarios = await getAllUsuarios();
      res.status(200).json(usuarios);
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
      res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
  };
  
  export const obtenerUsuarioPorId = async (req, res) => {
    console.log('Solicitud recibida para obtener usuario con ID:', req.params.id);
    try {
      const { id } = req.params;
      const usuario = await getUsuarioById(id);
      if (usuario) {
        res.status(200).json(usuario);
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
      res.status(500).json({ error: 'Error al obtener el usuario' });
    }
  };
  
  export const crearUsuario = async (req, res) => {
    try {
      const usuario = req.body;
      const nuevoUsuario = await createUsuario(usuario);
      res.status(201).json(nuevoUsuario);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el usuario' });
    }
  };
  
  export const actualizarUsuario = async (req, res) => {
    try {
      const { id } = req.params;
      const usuario = req.body;
      const actualizado = await updateUsuario(id, usuario);
      if (actualizado) {
        res.status(200).json(actualizado);
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
  };
  
  export const eliminarUsuario = async (req, res) => {
    try {
      const { id } = req.params;
      const eliminado = await deleteUsuario(id);
      if (eliminado) {
        res.status(200).json({ message: 'Usuario eliminado' });
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
  };
  