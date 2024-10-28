import { View, Image, Text, StyleSheet } from "react-native";
import React, { Component } from "react";
import HomeButton from "../../components/HomeButton";
import PokeCards from "../pokecards/PokeCards";

// Visual do Componente Home
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperView}>
        <Text style={styles.textUpper}>Olá!</Text>
        <Text style={styles.textUpper}>
          É um prazer recebê-lo na Pokédex! Explore e descubra tudo sobre seus
          Pokémon favoritos.
        </Text>
        <Image
          source={require("@/assets/homegif/pokeball.gif")}
          style={styles.poke}
        />
      </View>
      <View style={styles.lowerView}>
        <Text style={styles.textLower}>
          Para acessar as informações sobre os Pokémon, clique no botão abaixo:
        </Text>
        <HomeButton title="Continuar" onPress={() => alert("Olá")} />
      </View>
    </View>
  );
};

// Estilos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cd5c5c",
  },
  upperView: {
    flex: 1,
    backgroundColor: "#cd5c5c",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  lowerView: {
    flex: 1,
    backgroundColor: "#f8f8ff",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  poke: {
    height: 150,
    width: 150,
    justifyContent: "center",
  },
  textLower: {
    fontSize: 22,
    color: "black",
    textAlign: "center",
    marginBottom: 10,
    paddingBottom: 10,
  },
  textUpper: {
    fontSize: 24,
    color: "black",
    textAlign: "center",
    marginTop: 35,
    paddingBottom: 20,
  },
});

export default Home;
