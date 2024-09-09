import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import { Link, } from "react-router-dom";

export const PersonajeDetalle = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);
    const [personajeDetalle, setPersonajeDetalle] = useState(null);
    const [descripcion, setDescripcion] = useState(null);


    useEffect(() => {       
        fetch(`https://www.swapi.tech/api/people/${id}`) 
            .then(response => response.json())
            .then(data => {
                setPersonajeDetalle(data.result); 
                setDescripcion(data.result.description);
                actions.cargarFavoritos() 
            })
            .catch(error => console.error('Error', error));
    }, [id]);


    return (
        <div className="container">
            <div className="containerCardDetalle">
                <div className="cardDetalle">
                    <div className="filaImagenYDescripcion">
                        <div className="columnaImagenYDescripcion">
                            <img src="https://blog.camaralia.com/wp-content/uploads/2016/01/Star-Wars-Blu-ray1.jpg" className="cardImagenDetalle" alt="..." />
                        </div>
                        <div className="columnaImagenYDescripcion2">
                            <div className="tituloDescripcion">
                                <h4>Descripcion</h4>
                            </div>
                            <div className="contenedorDescripcion">
                                <p>{descripcion}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="separador">
                </div>
                <div className="containerOtrosDetalles">
                    <div>
                        <h5 className="cardTitulo">Detalles del Personaje</h5>
                    </div>
                    {personajeDetalle ? (
                        <div className="card-body-detalle">
                            <div className="detalle">
                                <p>Nombre</p>
                                <p>{personajeDetalle.properties.name}</p>
                            </div>
                            <div className="detalle">
                                <p>Año de nacimiento</p>
                                <p>{personajeDetalle.properties.birth_year}</p>
                            </div>
                            <div className="detalle">
                                <p>Genero</p>
                                <p>{personajeDetalle.properties.gender}</p>
                            </div>
                            <div className="detalle">
                                <p>Altura</p>
                                <p>{personajeDetalle.properties.height}</p>
                            </div>
                            <div className="detalle">
                                <p>Peso</p>
                                <p>{personajeDetalle.properties.mass}</p>
                            </div>
                            <div className="detalle">
                                <p>Color de Ojos</p>
                                <p>{personajeDetalle.properties.eye_color}</p>
                            </div>
                            <div className="detallee">
                                <p>Color de Cabello</p>
                                <p>{personajeDetalle.properties.hair_color}</p>
                            </div>
                        </div>
                    ) :
                        <p>Cargando detalles del personaje...</p>
                    }
                </div>
                <div className="col text-center">
                    <Link to="/">
                        <button className="VolverListaContactos btn btn-danger mt-5">Volver a Pagina de Inicio</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};