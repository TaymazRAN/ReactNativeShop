import React from "react";
import styles from "./stylesAttractionGallery";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AttractionGallery = ({ route, navigation }) => {
  const onBack = () => {
    navigation.goBack();
  };
  const { images } = route?.params || {};
  console.log(images);

  return (
    <View style={styles.AttractionGallery}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.imageList}
        data={images}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
      ></FlatList>
      <TouchableOpacity onPress={onBack} style={styles.backIcon}>
        <Ionicons name="ios-arrow-back-circle" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(AttractionGallery);
