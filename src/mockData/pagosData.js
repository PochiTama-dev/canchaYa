export const getPagos = async (setter) => {
    try {
        const response = await fetch('http://localhost:8000/pagos');
        const pagos = await response.json();
        setter(pagos);
    } catch (error) {
        console.error("Error al obtener los pagos.", error);
    }
};

export const getPagoPorId = async (id) => {
    try {
        const response = await fetch(`http://localhost:8000/pagos/${id}`);
        const pago = await response.json();
        return pago;
    } catch (error) {
        console.error("Error al obtener el pago por ID.", error);
        return null;
    }
};

export const crearPago = async (pago) => {
    try {
        const response = await fetch('http://localhost:8000/crearPagos', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(pago),
        });
        const result = await response.json();
        if (result) {
            console.log("Pago creado con éxito!!!");
        } else {
            console.log("Error al crear el pago.");
        }
    } catch (error) {
        console.error("Error al crear el pago.", error);
    }
};

export const actualizarPago = async (id, pago) => {
    try {
        const response = await fetch(`http://localhost:8000/pagos/${id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(pago),
        });
        const result = await response.json();
        if (result[0] === 1) {
            console.log("Pago actualizado con éxito!!!");
        } else {
            console.log("Error al actualizar el pago.");
        }
    } catch (error) {
        console.error("Error al actualizar el pago.", error);
    }
};

export const eliminarPago = async (id) => {
    try {
        const response = await fetch(`http://localhost:8000/pagos/${id}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        });
        const result = await response.json();
        if (result) {
            console.log("Pago eliminado con éxito!!!");
        } else {
            console.log("Error al eliminar el pago.");
        }
    } catch (error) {
        console.error("Error al eliminar el pago.", error);
    }
};