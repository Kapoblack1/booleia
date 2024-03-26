import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from "./src/navigation/Navigation";
import { EventProvider } from 'react-native-outside-press';

export default function App() {
  return (
    <>
      <EventProvider>
        <Navigation></Navigation>
      </EventProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
