import { StyleSheet } from "react-native";
// const {height} =
const styles = StyleSheet.create({
  AttractionGallery: {
    flex: 1,
    marginHorizontal: 32,
  },
  imageList: {},
  image: {
    width: "100%",
    height: 400,
    borderRadius: 20,
    marginVertical: 20,
  },
  backIcon: {
    position: "absolute",
    top: 32,
    left: 32,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});

export default styles;
