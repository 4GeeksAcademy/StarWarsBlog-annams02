export const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            personas: [],
            vehiculos: [],
            planetas: [],
            favoritos: [],
            contadorFavoritos: 0
        },

        actions: {
            fetchPersonajes: () => {
                fetch("https://www.swapi.tech/api/people/")           
                    .then(response => response.json())
                    .then(data => setStore({ personas: data.results }))
                    .catch(error => console.error("Error", error));
            },
            fetchVehiculos: () => {
                fetch("https://www.swapi.tech/api/vehicles/")
                    .then(response => response.json())
                    .then(data => setStore({ vehiculos: data.results }))
                    .catch(error => console.error("Error", error));
            },
            fetchPlanetas: () => {
                fetch("https://www.swapi.tech/api/planets/")
                    .then(response => response.json())
                    .then(data => setStore({ planetas: data.results }))
                    .catch(error => console.error("Error", error));
            },

            agregarFavoritoPersonaje: (persona) => {                  
                const store = getStore();
                const favoritosActualizados = store.favoritos.filter(fav => fav.name !== persona.name);
                if (favoritosActualizados.length === store.favoritos.length) {
                    // La persona no estaba en la lista de favoritos, la agregamos
                    setStore({ favoritos: [...store.favoritos, persona] });
                    setStore({ contadorFavoritos: store.contadorFavoritos + 1 });
                } else {
                    // La persona ya estaba en la lista de favoritos, la eliminamos
                    setStore({ favoritos: favoritosActualizados });
                    setStore({ contadorFavoritos: store.contadorFavoritos - 1 });
                }
                // Guardo los favoritos en el almacenamiento local despues de actualizar el estado
                getActions().guardarFavoritos();
            },

            agregarFavoritoVehiculo: (vehiculo) => {
                const store = getStore();
                const favoritosActualizados = store.favoritos.filter(fav => fav.name !== vehiculo.name);
                if (favoritosActualizados.length === store.favoritos.length) {      
                    setStore({ favoritos: [...store.favoritos, vehiculo] });
                    setStore({ contadorFavoritos: store.contadorFavoritos + 1 });
                } else {
                    setStore({ favoritos: favoritosActualizados });
                    setStore({ contadorFavoritos: store.contadorFavoritos - 1 });
                }
                getActions().guardarFavoritos();
            },

            agregarFavoritoPlaneta: (planeta) => {
                const store = getStore();
                const favoritosActualizados = store.favoritos.filter(fav => fav.name !== planeta.name);
                if (favoritosActualizados.length === store.favoritos.length) {
                    setStore({ favoritos: [...store.favoritos, planeta] });
                    setStore({ contadorFavoritos: store.contadorFavoritos + 1 });
                } else {
                    setStore({ favoritos: favoritosActualizados });
                    setStore({ contadorFavoritos: store.contadorFavoritos - 1 });
                }
                getActions().guardarFavoritos();
            },



            cargarFavoritos: () => {
                const localFavorites = JSON.parse(localStorage.getItem("favoritos"));
                if (localFavorites) {
                    setStore({ favoritos: localFavorites });
                    setStore({ contadorFavoritos: localFavorites.length });
                }
            },

            guardarFavoritos: () => {
                const store = getStore();
                localStorage.setItem("favoritos", JSON.stringify(store.favoritos));
            },



            eliminarFavorito: (favorito, event) => {
                event.stopPropagation(); 
                const store = getStore();
                const favoritosActualizados = store.favoritos.filter(item => item.name !== favorito.name);
                setStore({ favoritos: favoritosActualizados });
                setStore({ contadorFavoritos: favoritosActualizados.length });
                
                getActions().guardarFavoritos();
            },



            fetchPersonajeDetalle: (personajeId) => {
                return fetch(`https://www.swapi.tech/api/people/${personajeId}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        return data.result;
                    })
                    .catch(error => {
                        console.error('Error fetching personaje detalle:', error);
                        return null;
                    });
            },

            fetchVehiculoDetalle: (vehiculoId) => {
                return fetch(`https://www.swapi.tech/api/vehicles/${vehiculoId}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        return data.result;
                    })
                    .catch(error => {
                        console.error('Error fetching vehiculo detalle:', error);
                        return null;
                    });
            },

            fetchPlanetaDetalle: (planetaId) => {
                return fetch(`https://www.swapi.tech/api/planets/${planetaId}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        return data.result;
                    })
                    .catch(error => {
                        console.error('Error fetching planeta detalle:', error);
                        return null;
                    });
            }

        }
    }
};