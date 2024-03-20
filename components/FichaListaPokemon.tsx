import React from 'react';
import Pokemon from '../types/Pokemon'; 
import { Image, Text, View } from 'react-native';
import styles from '../Styles';

type FichaListaPokemonProps = {
  codigo: number;
  pokemon: Pokemon; 
};

const FichaListaPokemon = (props: FichaListaPokemonProps) => {
  return (
    <View style={styles.contenedorFicha}>
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.codigo}.png` 
        }}
        
      />
      <View style={styles.contenedorDatosGenerales}>
        <Text style={styles.nombreEnFicha}>{props.pokemon.name}</Text>
        <Text style={styles.datosGeneralesFicha}>Altura: {props.pokemon.height}</Text>
        <Text style={styles.datosGeneralesFicha}>Peso: {props.pokemon.weight}</Text>
        
      </View>
    </View>
  );
};

export default FichaListaPokemon;
