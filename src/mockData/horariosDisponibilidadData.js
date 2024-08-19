export const getHorariosDisponibilidad = async (setter) => {
    try {
        const response = await fetch('http://localhost:8000/horarios-disponibilidad');
        const horarios = await response.json();
        setter(horarios);
    } catch (error) {
        console.error("Error al obtener los horarios de disponibilidad.", error);
    }
};

export const getHorarioDisponibilidadPorId = async (id) => {
    try {
        const response = await fetch(`http://localhost:8000/horarios-disponibilidad/${id}`);
        const horario = await response.json();
        return horario;
    } catch (error) {
        console.error("Error al obtener el horario de disponibilidad por ID.", error);
        return null;
    }
};

export const crearHorarioDisponibilidad = async (horario) => {
    try {
        const response = await fetch('http://localhost:8000/horarios-disponibilidad', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(horario),
        });
        const result = await response.json();
        if (result) {
            console.log("Horario de disponibilidad creado con éxito!!!");
        } else {
            console.log("Error al crear el horario de disponibilidad.");
        }
    } catch (error) {
        console.error("Error al crear el horario de disponibilidad.", error);
    }
};

export const actualizarHorarioDisponibilidad = async (id, horario) => {
    try {
        const response = await fetch(`http://localhost:8000/horarios-disponibilidad/${id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(horario),
        });
        const result = await response.json();
        if (result[0] === 1) {
            console.log("Horario de disponibilidad actualizado con éxito!!!");
        } else {
            console.log("Error al actualizar el horario de disponibilidad.");
        }
    } catch (error) {
        console.error("Error al actualizar el horario de disponibilidad.", error);
    }
};

export const eliminarHorarioDisponibilidad = async (id) => {
    try {
        const response = await fetch(`http://localhost:8000/horarios-disponibilidad/${id}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        });
        const result = await response.json();
        if (result) {
            console.log("Horario de disponibilidad eliminado con éxito!!!");
        } else {
            console.log("Error al eliminar el horario de disponibilidad.");
        }
    } catch (error) {
        console.error("Error al eliminar el horario de disponibilidad.", error);
    }
};