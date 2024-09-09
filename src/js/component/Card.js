import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';


export const PersonaCard = ({ persona, agregarFavorito, favoritos }) => {

    const estaEnFavoritosPersona = favoritos.some(favorito => favorito.name === persona.name);

    return (
        <div className="container">
            <div className="containerCard">
                <div className="card">
                    <div className="contenedorImagenCard">
                        <img src="https://img.freepik.com/foto-gratis/vision-musico-futurista_23-2151072960.jpg?t=st=1723578028~exp=1723581628~hmac=fefd031182e049b7c7f9d17cf491c3355a290adae0ed3e8399234c951555a853&w=826" className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{persona.name}</h5>
                        <div className="botonesFavLeerMas">
                            <Link to={`/personaje/${persona.uid}`} className="btn btn-danger">Leer Más!</Link>
                            <button onClick={() => agregarFavorito(persona)} className="btn btn-danger">
                                {estaEnFavoritosPersona ? (
                                    <i className="fas fa-heart"></i>
                                ) : (
                                    <i className="far fa-heart"></i>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const VehiculoCard = ({ vehiculo, agregarFavorito, favoritos }) => {

    const estaEnFavoritosVehiculo = favoritos.some(favorito => favorito.name === vehiculo.name);

    return (
        <div className="container">
            <div className="containerCard">
                <div className="card">
                    <div className="contenedorImagenCard">
                        <img src="https://i.blogs.es/66ca1c/star-wars-guerra/1366_2000.jpeg" className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{vehiculo.name}</h5>

                        <div className="botonesFavLeerMas">
                            <Link to={`/vehiculo/${vehiculo.uid}`} className="btn btn-danger">Leer Más!</Link>
                            <button onClick={() => agregarFavorito(vehiculo)} className="btn btn-danger">
                                {estaEnFavoritosVehiculo ? (
                                    <i className="fas fa-heart"></i>
                                ) : (
                                    <i className="far fa-heart"></i>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const PlanetaCard = ({ planeta, agregarFavorito, favoritos }) => {

    const estaEnFavoritosPlaneta = favoritos.some(favorito => favorito.name === planeta.name);

    return (
        <div className="containerSeparador">
            <div className="container">
                <div className="containerCard">
                    <div className="card">
                        <div className="contenedorImagenCard">
                            <img src="https://static.wikia.nocookie.net/esstarwars/images/5/52/Tatooine_TOR_New.jpg/revision/latest?cb=20221012203454" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{planeta.name}</h5>
                            <div className="botonesFavLeerMas">
                                <Link to={`/planeta/${planeta.uid}`} className="btn btn-danger">Leer Más!</Link>
                                <button onClick={() => agregarFavorito(planeta)} className="btn btn-danger">
                                    {estaEnFavoritosPlaneta ? (
                                        <i className="fas fa-heart"></i>
                                    ) : (
                                        <i className="far fa-heart"></i>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};