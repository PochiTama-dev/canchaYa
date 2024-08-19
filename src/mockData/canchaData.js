export const getCanchas = async (setter) => {
    try {
        const response = await fetch('http://localhost:8000/canchas');
        const canchas = await response.json();
        setter(canchas);
    } catch (error) {
        console.error("Error al obtener las canchas.", error);
    }
};

export const getCanchaPorId = async (id) => {
    try {
        const response = await fetch(`http://localhost:8000/canchas/${id}`);
        const cancha = await response.json();
        return cancha;
    } catch (error) {
        console.error("Error al obtener la cancha por ID.", error);
        return null;
    }
};

export const crearCancha = async (cancha) => {
    try {
        const response = await fetch('http://localhost:8000/crearCanchas', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cancha),
        });
        const result = await response.json();
        if (result) {
            console.log("Cancha creada con éxito!!!");
        } else {
            console.log("Error al crear la cancha.");
        }
    } catch (error) {
        console.error("Error al crear la cancha.", error);
    }
};

export const actualizarCancha = async (id, cancha) => {
    try {
        const response = await fetch(`http://localhost:8000/canchas/${id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cancha),
        });
        const result = await response.json();
        if (result[0] === 1) {
            console.log("Cancha actualizada con éxito!!!");
        } else {
            console.log("Error al actualizar la cancha.");
        }
    } catch (error) {
        console.error("Error al actualizar la cancha.", error);
    }
};

export const eliminarCancha = async (id) => {
    try {
        const response = await fetch(`http://localhost:8000/canchas/${id}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        });
        const result = await response.json();
        if (result) {
            console.log("Cancha eliminada con éxito!!!");
        } else {
            console.log("Error al eliminar la cancha.");
        }
    } catch (error) {
        console.error("Error al eliminar la cancha.", error);
    }
};
