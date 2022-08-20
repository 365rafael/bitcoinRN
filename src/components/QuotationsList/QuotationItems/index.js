import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function QuotationItems() {
  return (
    <View style={styles.mainContent}>
      <View style={styles.contextleft}>
        <View style={styles.boxLogo}>
          <Image
            style={styles.logBitcoin}
            source={require("../../../img/bitcoin.png")}
          />
          <Text style={styles.dayCotation}>19/08/2022</Text>
        </View>
      </View>
      <View style={styles.contextRigth}>
        <Text style={styles.price}>$ 53331.052</Text>
      </View>
    </View>
  );
}
