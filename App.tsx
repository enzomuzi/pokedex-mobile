// App.tsx
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Index from "./app/index";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Index />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
});

export default App;
