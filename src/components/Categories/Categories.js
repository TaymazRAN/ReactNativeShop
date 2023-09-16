import React from "react";
import { FlatList, Text, Pressable } from "react-native";
import styles from "./stylesCategories";

const Categories = ({ categories, selectedCateogry, onCategoryPress }) => {
  return (
    <FlatList
      horizontal
      keyExtractor={(item) => String(item)}
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={({ item }) => {
        const selected = selectedCateogry === item;
        return (
          <Pressable
            hitSlop={4}
            onPress={() => onCategoryPress(item)}
            style={[
              styles.categoriesItemContainer,
              selected && styles.selectedCategoriesItemContainer,
              item === "All" && styles.firstCategoryItem,
              item === "Recommended" && styles.lastCategoryItem,
            ]}
          >
            <Text
              style={[
                styles.categoriesItem,
                selected && styles.selectedCategoriesItem,
              ]}
            >
              {item}
            </Text>
          </Pressable>
        );
      }}
    />
  );
};
export default React.memo(Categories);
