import { useState, useEffect } from 'react';
import React from 'react'
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import Swal from "sweetalert2";

const CrudItems = () => {
    const [items, setItems] = useState([]);
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
//    const [editId, setId] = useState(null);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:9000/items');
            setItems(response.data);
            console.log("Items fetched successfully:", response.data);
        } catch (error) {
            console.error("Error fetching items:", error);

        }
    }
    useEffect(() => {
        fetchItems();
    }, []);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9000/items', {
                nombre: nombre,
                descripcion: descripcion
            });
            console.log(`Respuesta del servidor: ${response.data.message}`);
            Swal.fire({
                icon: "success",
                title: "Item creado",
                text: "El item ha sido creado exitosamente"
            });
            setNombre('');
            setDescripcion('');
            fetchItems();
        } catch (error) {
            console.error("Error creando item:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "No se pudo crear el item"
            });
        }
    }

    //para editar por id
    const editItem = async (id) => {
        try {
            const response = await axios.get(`http://localhost:9000/items/${id}`);
            const item = response.data;
            setNombre(item.nombre);
            setDescripcion(item.descripcion);

            Swal.fire({
                title: 'editar item',
                html: `<input type="text" id="nombre" class= "swal2-input" value="${item.nombre}">
                <input type="text" id="descripcion" class= "swal2-input" value="${item.descripcion}">`,
                preConfirm: () => {
                    const nombre = document.getElementById('nombre').value;
                    const descripcion = document.getElementById('descripcion').value;
                    return { nombre, descripcion };
                }
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axios.put(`http://localhost:9000/items/${id}`, {
                        nombre: result.value.nombre,
                        descripcion: result.value.descripcion
                    });
                    Swal.fire({
                        icon: "success",
                        title: "Item editado",
                        text: "El item ha sido editado exitosamente"
                    })
                    fetchItems();
                }
            })
            
        } catch (error) {
            console.error("Error editando item:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "No se pudo editar el item"
            });
        }
    }

    // funcion para delete items
    const deleteItem = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:9000/items/${id}`);
            console.log(`Respuesta del servidor: ${response.data.message}`);
            Swal.fire({
                icon: "success",
                title: "Item eliminado",
                text: "El item con ID: " + id + " ha sido eliminado exitosamente"
            });
            fetchItems();
        } catch (error) {
            console.error("Error eliminando item:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "No se pudo eliminar el item con ID: " + id
            });
        }
    }

    return (
        <main>
            <div className='container mt-5'>
                <h2>CRUD de items</h2>
                <Form onSubmit={submitHandler} className="mt-4">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Nombre" 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Descripción" 
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Enviar datos
                    </Button>
                </Form>
                
                <hr />
                <h3>Items en el inventario</h3>
                <ul className='list-group'>
                    {items.map(item => (
                        <li key={item.idProductos} className='list-group-item'>
                            <h5>{item.nombre}</h5>
                            <p>{item.descripcion}</p>
                            <Button variant='danger'
                            onClick={() => deleteItem(item.idProductos)}>
                                Eliminar
                            </Button>
                            <Button variant='warning'
                            onClick={() => editItem(item.idProductos)}>
                                Editar
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default CrudItems