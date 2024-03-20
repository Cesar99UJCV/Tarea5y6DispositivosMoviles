import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, Image, ActivityIndicator } from "react-native";
import axios from "axios";
import Pokemon from "../types/Pokemon"; 
import styles from "../Styles";
import {urlBase} from "./inicio";

const Detalle = ({ navigation, route }) => {
    const [pokemon, setPokemon] = useState<Pokemon>(); 
    const [habilidades, setHabilidades] = useState<string[]>([]); 
    const [cargando, setCargando] = useState(true);

    const cargarPokemon = async () => {
        const codigo = route.params.codigo;
        try {
            const response = await axios.get(`${urlBase}pokemon/${codigo}`);
            if (response.data) {
                const pokemonData: Pokemon = response.data;
                setPokemon(pokemonData);
            }
        } catch (error) {
            console.error("Error al cargar el Pokémon:", error);
        } finally {
            setCargando(false);
        }
    };


    useEffect(() => {
        cargarPokemon();
    }, []);

    if (cargando) {
        return (
            <SafeAreaView style={styles.contenedorDatosGenerales}>
                <ActivityIndicator size="large" color="blue" />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.contenedorFicha}>
            <View>
                <Image
                    source={{
                        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${route.params.codigo}.png`
                    }}
                    style={{ width: 400, height: 400 }}
                />
                <Text>{pokemon?.name}</Text>
                <Text>Altura: {pokemon?.height}</Text>
                <Text>Peso: {pokemon?.weight}</Text>
                <Text>Habilidades:</Text>
                {habilidades.map((habilidad, index) => (
                    <Text key={index}>{habilidad}</Text>
                ))}
            </View>
        </SafeAreaView>
    );
};

export default Detalle;
