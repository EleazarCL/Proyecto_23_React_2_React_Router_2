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
            <div className='container_central'>
                <div className='container_pokemon'>
                    <div className='container_imagen_pokemon'>
                        {pokemon?.sprites?.other?.['official-artwork']?.front_default && <img src={pokemon.sprites.other['official-artwork'].front_default}
                            alt={pokemon.name} />}
                    </div>
                    <div className='container_datos_pokemon'>
                        <h1>{pokemon?.name}</h1>
                        <ul>
                            {pokemon?.stats?.map((stat, index) => (
                                <li key={index}>
                                    {stat.stat.name}: {stat.base_stat}
                                </li>
                            ))}
                        </ul>
                        <h2>Types</h2>
                        <ul>
                            {pokemon?.types?.map((typeInfo, index) => (
                                <li key={index}>
                                    {typeInfo.type.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
