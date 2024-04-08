import React,{useState, useRef, useEffect} from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";
import { CaretLeft, MapPin } from "phosphor-react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

 export default function HomeScreen() {
    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);
    const mapEl = useRef(null);

    useEffect(() => {
        (async function obterLocalizacao() {
          const { status } = await Location.requestForegroundPermissionsAsync();
          if (status === "granted") {
            try {
              const location = await Location.getCurrentPositionAsync({
                enableHighAccuracy: true,
              });
              console.log(location);
              setOrigin({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.00092,
                longitudeDelta: 0.0031,
              });
            } catch (error) {
              console.error("Erro ao obter a localização", error);
            }
          } else {
            console.log("Permissão de localização negada");
            // Lide com a recusa da permissão ou forneça uma alternativa aqui
          }
        })();
      }, []);

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container}>
        <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              region={origin}
              showsUserLocation={true}
              loadingEnabled={true}
              locale="pt-br"
              ref={mapEl}
            >
              {destination && (
                <MapViewDirections
                  origin={origin}
                  destination={destination}
                  apikey={config.googleApi}
                  strokeColor="blue"
                  strokeWidth={3}
                  onReady={(result) => {
                    console.log(result);
                    setDistance(result.distance);
                    setPrice(result.distance * 150);
                    mapEl.current.fitToCoordinates(result.coordinates, {
                      edgePadding: {
                        top: 280,
                        bottom: 100,
                        left: 110,
                        right: 150,
                      },
                    });
                  }}
                />
              )}
            </MapView>
        </View>    
    </SafeAreaView>
  );
};

const isIphone = Platform.OS === "ios";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    justifyContent: "space-between",
    paddingHorizontal: "2%",
  },
  map: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",

  },
 
});


