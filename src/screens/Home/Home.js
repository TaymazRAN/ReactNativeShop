import React, { useEffect, useState } from "react";
import { View, FlatList, Text, Dimensions } from "react-native";
import Title from "../../components/Title/Title";
import Categories from "../../components/Categories/Categories";
import styles from "./stylesHome";
import AtrractionCard from "../../components/AtrractionCard/AtrractionCard";
import jsonData from "../../data/attractions.json";
import categoriesData from "../../data/categories.json";
//

const Home = ({ navigation }) => {
  const All = "All";
  const [selectedCateogry, setSelectedCateogry] = useState(All);
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   setData(jsonData);
  // }, []);
  useEffect(() => {
    if (selectedCateogry === All) {
      setData(jsonData);
    } else {
      const filteredData = jsonData?.filter((item) =>
        item?.categories?.includes(selectedCateogry)
      );
      setData(filteredData);
    }
  }, [selectedCateogry]);
  return (
    <View style={styles.home}>
      <View style={styles.homeHeader}>
        <View style={styles.homeTitle}>
          <Title text="Where do" style={{ fontWeight: "normal" }} />
          <Title text="you want to go? " />
          <Title text="Explore Attractions" style={styles.homeSubtitle} />
        </View>
        <Categories
          style={styles.homeCategory}
          selectedCateogry={selectedCateogry}
          onCategoryPress={setSelectedCateogry}
          categories={[All, ...categoriesData]}
        />
      </View>
      <FlatList
        data={data}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
        contentContainerStyle={styles.homeList}
        keyExtractor={(item) => String(item?.id)}
        renderItem={({ item }) => (
          <AtrractionCard
            title={item.name}
            subtitle={item.city}
            imageSrc={item.images?.length ? item.images[0] : null}
            onPress={() =>
              navigation.navigate("AttractionDetails", {
                item,
              })
            }
          />
        )}
        ListEmptyComponent={
          <Text style={styles.notFoundText}>No Items Found!</Text>
        }
      />
    </View>
  );
};

export default React.memo(Home);
