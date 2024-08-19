export const getFotosCancha = async (setter) => {
    try {
        const response = await fetch('http://localhost:8000/fotos-cancha');
        const fotos = await response.json();
        setter(fotos);
    } catch (error) {
        console.error("Error al obtener las fotos de cancha.", error);
    }
};

export const getFotoCanchaPorId = async (id) => {
    try {
        const response = await fetch(`http://localhost:8000/fotos-cancha/${id}`);
        const foto = await response.json();
        return foto;
    } catch (error) {
        console.error("Error al obtener la foto de cancha por ID.", error);
        return null;
    }
};

export const crearFotoCancha = async (foto) => {
    try {
        const formData = new FormData();
        formData.append('foto', foto.foto);
        formData.append('canchaId', foto.canchaId.toString());

        const response = await fetch('http://localhost:8000/crearFotos-cancha', {
            method: 'POST',
            body: formData,
        });
        const result = await response.json();
        if (result) {
            console.log("Foto de cancha creada con éxito!!!");
        } else {
            console.log("Error al crear la foto de cancha.");
        }
    } catch (error) {
        console.error("Error al crear la foto de cancha.", error);
    }
};

export const actualizarFotoCancha = async (id, foto) => {
    try {
        const formData = new FormData();
        formData.append('foto', foto.foto);
        formData.append('canchaId', foto.canchaId.toString());

        const response = await fetch(`http://localhost:8000/fotos-cancha/${id}`, {
            method: 'PUT',
            body: formData,
        });
        const result = await response.json();
        if (result[0] === 1) {
            console.log("Foto de cancha actualizada con éxito!!!");
        } else {
            console.log("Error al actualizar la foto de cancha.");
        }
    } catch (error) {
        console.error("Error al actualizar la foto de cancha.", error);
    }
};

export const eliminarFotoCancha = async (id) => {
    try {
        const response = await fetch(`http://localhost:8000/fotos-cancha/${id}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        });
        const result = await response.json();
        if (result) {
            console.log("Foto de cancha eliminada con éxito!!!");
        } else {
            console.log("Error al eliminar la foto de cancha.");
        }
    } catch (error) {
        console.error("Error al eliminar la foto de cancha.", error);
    }
};