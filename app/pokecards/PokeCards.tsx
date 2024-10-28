import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";

export default class PokeCards extends Component {
  render() {
    return (
      <View style={style.viewBckgrd}>
        <TextInput style={style.txtBckgrd} placeholder="Pesquisar" />
        <ScrollView></ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  viewBckgrd: {
    flex: 1,
    backgroundColor: "#f8f8ff",
  },
  txtBckgrd: {
    height: 40,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 20,
    color: "black",
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    margin: 10,
  },
});
