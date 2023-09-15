import React from "react";
import styles from "./stylesAttractionDetails";
import {Text, View, ImageBackground, Image, Pressable } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

const AttractionDetails = ({ navigation, route }) => {
  const { item } = route?.params || {};
  const onBack = () => {
    navigation.goBack();
  };
  const mainImage = item?.images.length && item?.images[0];
  const onGalleryNavigate = () => {
    navigation.navigate("AttractionGallery", { images: item?.images });
  };
  const slicedImages = item?.images?.length && item?.images?.slice(0, 4);
  const diffImages = item?.images?.length - slicedImages?.length;
  return (
    <View style={styles.attractionDetails}>
      <ImageBackground
        style={styles.mainImage}
        imageStyle={{ borderRadius: 20 }}
        source={{ uri: mainImage }}
      >
        <View style={styles.mainImageIcon}>
          <Ionicons
            onPress={onBack}
            style={{ margin: 20 }}
            name="md-chevron-back-circle"
            size={32}
            color="#fff"
          />
          <Ionicons
            name="share"
            style={{ margin: 20 }}
            size={32}
            color="#fff"
          />
        </View>
        <Pressable onPress={onGalleryNavigate} style={styles.mainImageFooter}>
          {slicedImages?.map((image, index) => (
            <View key={index}>
              <Image source={{ uri: image }} style={styles.miniImages} />
              {diffImages > 0 && index === slicedImages?.length - 1 && (
                <View style={styles.moreImagesContainer}>
                  <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                </View>
              )}
            </View>
          ))}
        </Pressable>
      </ImageBackground>
      <View style={styles.contentHeader}>
        <View style={styles.headerTitle}>
          <Text style={styles.title}>{item?.name}</Text>
          <Text style={styles.cityName}>{item?.city}</Text>
        </View>
        <Text style={styles.priceText}>{item.entry_price}</Text>
      </View>
      <View style={styles.details}>
        <MaterialIcons name="location-on" size={24} color="black" />
        <Text style={styles.DetailsText}>{item.address}</Text>
      </View>
      <View style={styles.details}>
        <MaterialCommunityIcons name="clock-outline" size={24} color="black" />
        <Text style={styles.DetailsText}>
          {`Open: ${item.opening_time} - ${item.closing_time}`}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(AttractionDetails);
