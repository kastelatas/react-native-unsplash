import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Photos from "../components/Photos";


const Home = ({navigation}) => {
  return (
    <View>
      <Text style={styles.title}>Unsplash Photos</Text>
      <Photos navigation={navigation}/>
    </View>
  );
}


const styles = StyleSheet.create({
  title: {
    textAlign:'center',
    fontSize:30
  }

});
export default Home;
