import { StatusBar } from 'expo-status-bar';
import MapView , {Marker}from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

const markers=[
  {
    latitude: 37.78825,
    longitude: -122.4324,
    title: 'Local 1',
    description: 'Descrição do local 1',
  },
  {
    latitude: -23.5527978,
    longitude: -46.3990228,
    title: "Local 2",
    description: "Descrição do Local 2",
  },
  {
    latitude: 48.8588897,
    longitude: 2.32004102,
    title: "Local 3",
    description: "Descrição do Local 3",
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
      }}/>

      {markers.map((marker, index)=>(
        <Marker
          key={index}
          coordinate={{latitude:marker.latitude, longitude:marker.longitude}}
          title={marker.title}
          description={marker.description}
        ></Marker>
      ))}
      
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
