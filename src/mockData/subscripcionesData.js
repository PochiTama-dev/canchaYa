export const getSubscripciones = async (setter) => {
    try {
        const response = await fetch('http://localhost:8000/subscripciones');
        const subscripciones = await response.json();
        setter(subscripciones);
    } catch (error) {
        console.error("Error al obtener las subscripciones.", error);
    }
};

export const getSubscripcionPorId = async (id) => {
    try {
        const response = await fetch(`http://localhost:8000/subscripciones/${id}`);
        const subscripcion = await response.json();
        return subscripcion;
    } catch (error) {
        console.error("Error al obtener la subscripción por ID.", error);
        return null;
    }
};

export const crearSubscripcion = async (subscripcion) => {
    try {
        const response = await fetch('http://localhost:8000/crearSubscripciones', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(subscripcion),
        });
        const result = await response.json();
        if (result) {
            console.log("Subscripción creada con éxito!!!");
        } else {
            console.log("Error al crear la subscripción.");
        }
    } catch (error) {
        console.error("Error al crear la subscripción.", error);
    }
};

export const actualizarSubscripcion = async (id, subscripcion) => {
    try {
        const response = await fetch(`http://localhost:8000/subscripciones/${id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(subscripcion),
        });
        const result = await response.json();
        if (result[0] === 1) {
            console.log("Subscripción actualizada con éxito!!!");
        } else {
            console.log("Error al actualizar la subscripción.");
        }
    } catch (error) {
        console.error("Error al actualizar la subscripción.", error);
    }
};

export const eliminarSubscripcion = async (id) => {
    try {
        const response = await fetch(`http://localhost:8000/subscripciones/${id}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        });
        const result = await response.json();
        if (result) {
            console.log("Subscripción eliminada con éxito!!!");
        } else {
            console.log("Error al eliminar la subscripción.");
        }
    } catch (error) {
        console.error("Error al eliminar la subscripción.", error);
    }
};