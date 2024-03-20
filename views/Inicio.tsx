import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import Pokemon from "../types/Pokemon"; 
import axios from "axios";
import PokemonResult from "../types/PokemonResult";
import FichaListaPokemon from "../components/FichaListaPokemon"; 
import styles from "../Styles";

const ArregloPokemonesInicial: Pokemon[] = [];
export const urlBase = 'https://pokeapi.co/api/v2/'; 
const Inicio = ({ navigation }) => {
  const [pokemones, setPokemones] = useState(ArregloPokemonesInicial);
  const [count, setCount] = useState(0);
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");
  const [cargando, setCargando] = useState(false);
  const refScroll = useRef(null);

  const CargarPokemones = async () => {
    const resultados = await axios.get(`${urlBase}pokemon`);
    if (resultados.data) {
      const datos = resultados.data;
      setCount(datos.count);
      setNext(datos.next || "");
      setPrevious(datos.previous || "");
      setPokemones(datos.results);
    }
  };

  const CargarSiguientePagina = async () => {
    if (next !== "") {
      setCargando(true);
      const resultados = await axios.get(next);
      if (resultados.data) {
        const datos = resultados.data;
        setNext(datos.next || "");
        setPrevious(datos.previous || "");
        setPokemones([...pokemones, ...datos.results]);
      }
    }
  };

  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const handleScroll = ({ nativeEvent }) => {
    if (isCloseToBottom(nativeEvent)) {
      if (!cargando) {
        console.log("Iniciando Carga");
        CargarSiguientePagina();
      }
    }
  };

  useEffect(() => {
    CargarPokemones();
  }, []);

  useEffect(() => {
    console.log("Finalizando Carga");
    setCargando(false);
  }, [pokemones]);

  const handlePressIrInicio = () => {
    refScroll.current.scrollTo({x: 0, y: 0, animated:true});
  };

  const handlePressPokemon = (codigo: number) => { 
    navigation.navigate('Detalle', { codigo: codigo });
  };

  return (
    <SafeAreaView style={styles.contenedorScroll}>
      <ScrollView
        style={{ height: "97%" }}
        onScroll={handleScroll}
        ref={refScroll}>
        {pokemones.map((p, index) => {
          return (
            <Pressable key={`pokemon-${index + 1}`} onPress={() => handlePressPokemon(index + 1)}>
              <FichaListaPokemon
                key={`pokemon-${index + 1}`}
                codigo={index + 1}
                pokemon={p} 
              />
            </Pressable>
          );
        })}
        {cargando && <ActivityIndicator size={"large"} />}
      </ScrollView>
      <Pressable onPress={handlePressIrInicio}>
        <View style={styles.botonIrInicio}>
          <Text style={styles.textoBotonIrInicio}>Ir a Inicio</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default Inicio;
