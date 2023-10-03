import "react-native-gesture-handler";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Home from "./src/screens/Home/Home";
import AttractionDetails from "./src/screens/AttractionDetails/AttractionDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AttractionGallery from "./src/screens/AttractionGallery/AttractionGallery";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="AttractionDetails"
            component={AttractionDetails}
          />
          <Stack.Screen
            name="AttractionGallery"
            component={AttractionGallery}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
``;

// index.js

// import React from "react";
// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import photoReducer from "./src/redux/photoSlice"; // Import your Redux slice
// import categorieslice from "./src/redux/categoriesSlice"; // Import your Redux slice
// import PhotoList from "./src/redux/PhotoList";

// const store = configureStore({
//   reducer: {
//     photos: photoReducer,
//     category: categorieslice,
//   },
// });

// const App = () => {
//   return (
//     <Provider store={store}>
//       <PhotoList />
//     </Provider>
//   );
// };

// export default App;
