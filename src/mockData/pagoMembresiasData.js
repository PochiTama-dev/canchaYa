export const getPagosMembresias = async (setter) => {
    try {
        const response = await fetch('http://localhost:8000/pagos-membresias');
        const pagos = await response.json();
        setter(pagos);
    } catch (error) {
        console.error("Error al obtener los pagos de membresías.", error);
    }
};

export const getPagoMembresiaPorId = async (id) => {
    try {
        const response = await fetch(`http://localhost:8000/pagos-membresias/${id}`);
        const pago = await response.json();
        return pago;
    } catch (error) {
        console.error("Error al obtener el pago de membresía por ID.", error);
        return null;
    }
};

export const crearPagoMembresia = async (pago) => {
    try {
        const response = await fetch('http://localhost:8000/crearPagos-membresias', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(pago),
        });
        const result = await response.json();
        if (result) {
            console.log("Pago de membresía creado con éxito!!!");
        } else {
            console.log("Error al crear el pago de membresía.");
        }
    } catch (error) {
        console.error("Error al crear el pago de membresía.", error);
    }
};

export const actualizarPagoMembresia = async (id, pago) => {
    try {
        const response = await fetch(`http://localhost:8000/pagos-membresias/${id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(pago),
        });
        const result = await response.json();
        if (result[0] === 1) {
            console.log("Pago de membresía actualizado con éxito!!!");
        } else {
            console.log("Error al actualizar el pago de membresía.");
        }
    } catch (error) {
        console.error("Error al actualizar el pago de membresía.", error);
    }
};

export const eliminarPagoMembresia = async (id) => {
    try {
        const response = await fetch(`http://localhost:8000/pagos-membresias/${id}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        });
        const result = await response.json();
        if (result) {
            console.log("Pago de membresía eliminado con éxito!!!");
        } else {
            console.log("Error al eliminar el pago de membresía.");
        }
    } catch (error) {
        console.error("Error al eliminar el pago de membresía.", error);
    }
};
