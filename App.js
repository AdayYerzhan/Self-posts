import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";

export default function App() {
    const [fontsLoaded] = useFonts({
        "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
        "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
        <Text style={styles.openSansRegular}>
            This text uses a Regular font
        </Text>
        <Text style={styles.openSansBold}>
            This text uses a Bold font
        </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    openSansRegular: {
        fontFamily: "OpenSans-Regular",
        fontSize: 20,
    },
    openSansBold: {
        fontFamily: "OpenSans-Bold",
        fontSize: 20
    }
});
