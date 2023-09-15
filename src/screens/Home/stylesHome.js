import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
  homeList: {
    paddingVertical: 20,
    gap: 16,
  },
  homeHeader: {
    paddingTop: 12,
    paddingBottom: 20,
  },
  homeTitle: {
    marginHorizontal: 32,
  },
  homeSubtitle: {
    fontSize: 20,
    color: "#000",
    marginTop: 40,
    marginBottom: 16,
  },
  notFoundText: {
    color: "red",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
