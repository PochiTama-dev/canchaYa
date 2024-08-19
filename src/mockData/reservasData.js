export const getReservas = async (setter) => {
    try {
        const response = await fetch('http://localhost:8000/reservas');
        const reservas = await response.json();
        setter(reservas);
    } catch (error) {
        console.error("Error al obtener las reservas.", error);
    }
};

export const getReservaPorId = async (id) => {
    try {
        const response = await fetch(`http://localhost:8000/reservas/${id}`);
        const reserva = await response.json();
        return reserva;
    } catch (error) {
        console.error("Error al obtener la reserva por ID.", error);
        return null;
    }
};

export const crearReserva = async (reserva) => {
    try {
        const response = await fetch('http://localhost:8000/crearReservas', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reserva),
        });
        const result = await response.json();
        if (result) {
            console.log("Reserva creada con éxito!!!");
        } else {
            console.log("Error al crear la reserva.");
        }
    } catch (error) {
        console.error("Error al crear la reserva.", error);
    }
};

export const actualizarReserva = async (id, reserva) => {
    try {
        const response = await fetch(`http://localhost:8000/reservas/${id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reserva),
        });
        const result = await response.json();
        if (result[0] === 1) {
            console.log("Reserva actualizada con éxito!!!");
        } else {
            console.log("Error al actualizar la reserva.");
        }
    } catch (error) {
        console.error("Error al actualizar la reserva.", error);
    }
};

export const eliminarReserva = async (id) => {
    try {
        const response = await fetch(`http://localhost:8000/reservas/${id}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        });
        const result = await response.json();
        if (result) {
            console.log("Reserva eliminada con éxito!!!");
        } else {
            console.log("Error al eliminar la reserva.");
        }
    } catch (error) {
        console.error("Error al eliminar la reserva.", error);
    }
};