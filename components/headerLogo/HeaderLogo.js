import { Dimensions, Image, View } from "react-native";

import React from "react";

let { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function HeaderLogo() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        style={{
          resizeMode: "stretch",
          width: screenWidth / 3.7,
          height: 50,
          justifyContent: "center",
          // marginTop: 3,
        }}
        source={require("../../assets/logo.jpg")}
      />
    </View>
  );
}

export default HeaderLogo;
