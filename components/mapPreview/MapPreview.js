import { Image, StyleSheet, Text, View } from "react-native";

import MapView from "react-native-maps";
import React from "react";

const MapPreview = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* {props.location ? ( */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 31.4715,
          longitude: 74.4584,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <MapView.Marker
          coordinate={{ latitude: 31.4715, longitude: 74.4584 }}
          title={"Amna Salon"}
          description={"Street 41,B block"}
        />
      </MapView>

      {/* ) : ( */}
      {/* props.children */}
      {/* )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: "center",
    alignItems: "center",
  },
  mapImage: {
    width: 305,
    resizeMode: "stretch",

    height: 200,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapPreview;
