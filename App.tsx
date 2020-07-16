import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Linking from "expo-linking";

export default function App() {
  const [initialUrl, setInitialUrl] = React.useState<string | null>(null);
  const [
    parsedInitialUrl,
    setParsedInitialUrl,
  ] = React.useState<Linking.ParsedURL | null>(null);

  React.useEffect(() => {
    async function getInitialUrl() {
      setInitialUrl(await Linking.getInitialURL());
      setParsedInitialUrl(await Linking.parseInitialURLAsync());
    }

    getInitialUrl();
  }, []);

  return (
    <View style={styles.container}>
      <Text>initialUrl: {initialUrl}</Text>
      <Text>parsedInitialUrl: {JSON.stringify(parsedInitialUrl)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
