// PhotoList.js

import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchPhotos } from "./photoSlice"; // Import your fetchPhotos action
import { View, FlatList, Text, Image } from "react-native";

const PhotoList = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.photos);
  console.log("data view ", photos.photos);
  const status = useSelector((state) => state.photos.status);
  const error = useSelector((state) => state.photos.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPhotos());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <View>
      <FlatList
        direction="rtl"
        keyExtractor={(item) => item.id}
        data={photos.photos}
        renderItem={({ item }) => (
          <>
            <Text>{item.id}</Text>
            <Text>{item.description}</Text>
            <Image
              // style={{ height: "30px", width: "30px" }}
              source={{ uri: item.url }}
              style={{
                height: "100px",
                width: "100px",
              }}
            />
          </>
        )}
      />
    </View>
  );
};

export default PhotoList;
