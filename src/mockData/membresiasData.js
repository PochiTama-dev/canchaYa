export const getMembresias = async (setter) => {
    try {
        const response = await fetch('http://localhost:8000/membresias');
        const membresias = await response.json();
        setter(membresias);
    } catch (error) {
        console.error("Error al obtener las membresías.", error);
    }
};

export const getMembresiaPorId = async (id) => {
    try {
        const response = await fetch(`http://localhost:8000/membresias/${id}`);
        const membresia = await response.json();
        return membresia;
    } catch (error) {
        console.error("Error al obtener la membresía por ID.", error);
        return null;
    }
};

export const crearMembresia = async (membresia) => {
    try {
        const response = await fetch('http://localhost:8000/crearMembresias', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(membresia),
        });
        const result = await response.json();
        if (result) {
            console.log("Membresía creada con éxito!!!");
        } else {
            console.log("Error al crear la membresía.");
        }
    } catch (error) {
        console.error("Error al crear la membresía.", error);
    }
};

export const actualizarMembresia = async (id, membresia) => {
    try {
        const response = await fetch(`http://localhost:8000/membresias/${id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(membresia),
        });
        const result = await response.json();
        if (result[0] === 1) {
            console.log("Membresía actualizada con éxito!!!");
        } else {
            console.log("Error al actualizar la membresía.");
        }
    } catch (error) {
        console.error("Error al actualizar la membresía.", error);
    }
};

export const eliminarMembresia = async (id) => {
    try {
        const response = await fetch(`http://localhost:8000/membresias/${id}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        });
        const result = await response.json();
        if (result) {
            console.log("Membresía eliminada con éxito!!!");
        } else {
            console.log("Error al eliminar la membresía.");
        }
    } catch (error) {
        console.error("Error al eliminar la membresía.", error);
    }
};
