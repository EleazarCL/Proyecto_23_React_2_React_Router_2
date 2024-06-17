import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URL = "https://pokeapi.co/api/v2/pokemon?limit=151"; // Puedes ajustar el límite según necesites

export const Pokemones = () => {
    const [pokemones, setPokemones] = useState([]);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const getData = async () => {
        try {
            const response = await fetch(URL);
            const { results } = await response.json();
            setPokemones(results);
        } catch (error) {
            console.log("No hay Pokemones");
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
        <div className='container-select'>
        <select value={name} onChange={(event) => setName(event.target.value)}>
                <option value="" disabled>Selecciona un Pokemon</option>
                {
                    pokemones.map(({ name }) =>
                        <option key={name} value={name}>{name}</option>)
                }
            </select>
            <button onClick={() => navigate(`/pokemones/${name}`)} disabled={!name}>
                Ver Pokemon
            </button>
        </div>
        </>
    );
};

