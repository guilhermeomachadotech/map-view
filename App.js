import { StatusBar } from 'expo-status-bar';
import MapView , {Marker}from 'react-native-maps';
import { StyleSheet, View, Image } from 'react-native';


const markers=[
  {
    latitude: -23.54076145,
    longitude: -46.4704928,
    title: 'Shopping Metrô Itaquera',
    description: 'Lugar onde faz compras',
  },
  {
    latitude: -22.96482965,
    longitude: -43.22190379,
    title: "Globo",
    description: "Estudio de Televisão",
  },
  {
    latitude: 43.1561681,
    longitude: -75.8449946,
    title: "Nova Iorque",
    description: "Cidade dos Estados Unidos",
  },
]

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      mapType='terrain'
      initialRegion={{
        latitude:37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
        {markers.map((marker, index)=>(
        <Marker
          key={index}
          coordinate={{latitude:marker.latitude, longitude:marker.longitude}}
          title={marker.title}
          description={marker.description}
        ></Marker>
      ))}
      </MapView>
      
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
  map: {
    width: '100%',
    height: '100%',
  },
});
