import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
  attractionDetails: {
    margin: 32,
  },
  mainImage: {
    width: "100%",
    height: height / 2 - 50,
    justifyContent: "space-between",
  },
  mainImageIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainImageFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    borderRadius: 16,
    backgroundColor: "rgba(256,256,256,0.8)",
    marginBottom: 20,
    marginHorizontal: 8,
    paddingVertical: 4,
  },
  miniImages: {
    width: 45,
    height: 45,
    margin: 4,
    borderRadius: 8,
  },
  moreImages: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  moreImagesContainer: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.38)",
    width: 40,
    height: 40,
    top: 8,
    left: 4,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  contentHeader: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  cityName: {
    marginTop: 4,
    fontSize: 18,
  },
  priceText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  details: {
    marginTop: 20,
    flexDirection: "row",
    gap: 4,
  },
});

export default styles;
