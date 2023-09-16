import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./stylesAtrractionCard";
import { Ionicons } from "@expo/vector-icons";
const AtrractionCard = ({ imageSrc, title, subtitle, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image style={styles.image} source={{ uri: imageSrc }} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.subtitleContainer}>
          <Ionicons name="location-outline" size={20} color="#999" />
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(AtrractionCard);
