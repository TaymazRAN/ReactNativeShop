import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  categoriesItemContainer: {
    marginRight: 16,
    paddingVertical: 2,
  },
  selectedCategoriesItemContainer: {
    borderBottomColor: "#4681a3",
    borderBottomWidth: 2,
  },
  categoriesItem: {
    fontSize: 12,
    color: "rgba(0,0,0,0.5)",
    padding: 4,
  },
  selectedCategoriesItem: {
    fontWeight: "bold",
    color: "#4681a3",
  },
  firstCategoryItem: {
    marginLeft: 32,
  },
  lastCategoryItem: {
    marginRight: 32,
  },
});

export default styles;
