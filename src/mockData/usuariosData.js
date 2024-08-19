
export const getUsuarios = async (setter) => {
    try {
        const response = await fetch('http://localhost:8000/usuarios');
        const usuarios = await response.json();
        setter(usuarios);
    } catch (error) {
        console.error("Error al obtener los usuarios.", error);
    }
};

export const getUsuarioPorId = async (id) => {
    try {
        const response = await fetch(`http://localhost:8000/usuarios/${id}`);
        const usuario = await response.json();
        return usuario;
    } catch (error) {
        console.error("Error al obtener el usuario por ID.", error);
        return null;
    }
};

export const crearUsuario = async (usuario) => {
    try {
        const response = await fetch('http://localhost:8000/crearUsuarios', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuario),
        });
        const result = await response.json();
        if (result) {
            console.log("Usuario creado con éxito!!!");
        } else {
            console.log("Error al crear el usuario.");
        }
    } catch (error) {
        console.error("Error al crear el usuario.", error);
    }
};

export const actualizarUsuario = async (id, usuario) => {
    try {
        const response = await fetch(`http://localhost:8000/usuarios/${id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuario),
        });
        const result = await response.json();
        if (result[0] === 1) {
            console.log("Usuario actualizado con éxito!!!");
        } else {
            console.log("Error al actualizar el usuario.");
        }
    } catch (error) {
        console.error("Error al actualizar el usuario.", error);
    }
};

export const eliminarUsuario = async (id) => {
    try {
        const response = await fetch(`http://localhost:8000/usuarios/${id}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        });
        const result = await response.json();
        if (result) {
            console.log("Usuario eliminado con éxito!!!");
        } else {
            console.log("Error al eliminar el usuario.");
        }
    } catch (error) {
        console.error("Error al eliminar el usuario.", error);
    }
};