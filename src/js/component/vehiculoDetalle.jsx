import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import { Link, } from "react-router-dom";

export const VehiculoDetalle = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);
    const [vehiculoDetalle, setVehiculoDetalle] = useState(null);
    const [descripcion, setDescripcion] = useState(null);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/vehicles/${id}`)
            .then(response => response.json())
            .then(data => {
                setVehiculoDetalle(data.result);
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
                    <h5 className="cardTitulo">Detalles del Vehículo</h5>
                </div>
                {vehiculoDetalle ? (
                    <div className="card-body-detalle">
                        <div className="detalle">
                            <p>Nombre</p>
                            <p>{vehiculoDetalle.properties.name}</p>
                        </div>
                        <div className="detalle">
                            <p>Modelo</p>
                            <p>{vehiculoDetalle.properties.model}</p>
                        </div>
                        <div className="detalle">
                            <p>Fabricante</p>
                            <p>{vehiculoDetalle.properties.manufacturer}</p>
                        </div>
                        <div className="detalle">
                            <p>Largo</p>
                            <p>{vehiculoDetalle.properties.length}</p>
                        </div>
                        <div className="detalle">
                            <p>Capacidad de carga</p>
                            <p>{vehiculoDetalle.properties.cargo_capacity}</p>
                        </div>
                        <div className="detalle">
                            <p>Consumables</p>
                            <p>{vehiculoDetalle.properties.consumables}</p>
                        </div>
                        <div className="detalle">
                            <p>Costo en creditos</p>
                            <p>{vehiculoDetalle.properties.cost_in_credits}</p>
                        </div>
                    </div>
                ) :
                    <p>Cargando detalles del vehículo...</p>
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