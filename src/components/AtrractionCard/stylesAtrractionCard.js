import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  card: {
    padding: 6,
    borderRadius: 20,
    backgroundColor: "#fff",
    elevation: 2,
    width: (width - 40) / 2,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 20,
  },
  content: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 8,
    color: "#000",
  },
  subtitleContainer: {
    marginTop: 4,
    flexDirection: "row",
    gap: 2,
  },
  subtitle: {
    color: "#888",
    fontSize: 14,
    fontWeight: "400",
  },
});

export default styles;
