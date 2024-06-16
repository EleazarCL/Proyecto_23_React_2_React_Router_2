import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Detalles() {
    const [pokemon, setPokemon] = useState({});
    const { name } = useParams();
    const URL = "https://pokeapi.co/api/v2/pokemon/";

    const getData = async () => {
        try {
            const response = await fetch(URL + name);
            const results = await response.json();
            setPokemon(results);
        } catch (error) {
            console.log("No hay Pokemones");
        }
    }

    useEffect(() => {
        getData();
    }, [name]);

    return (
        <>
            <h1>{pokemon?.name}</h1>
            {pokemon?.sprites?.front_default && <img src={pokemon.sprites.front_default} alt={pokemon.name} />}
        </>
    );
}
