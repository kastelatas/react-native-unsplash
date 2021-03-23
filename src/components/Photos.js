import * as React from "react";
import {Text} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {View, FlatList, Image, TouchableOpacity, StyleSheet} from "react-native";
import {getPhotos} from "../../store/actions";
import {useEffect, useState} from "react";

const Photos = ({navigation}) => {
  let [data, setData] = useState([])
  const posts = useSelector(state => state.photos)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos())
    setData(data.concat(posts))
  }, [posts])

  const nav = (id) => {
    navigation.navigate("Photo", {id: id})
  }

  return (
    <View style={styles}>
      <View style={styles.middle}>
        <FlatList
          contentContainerStyle={{alignItems: "center"}}
          numColumns={2}
          data={data}
          renderItem={({item}) => {
            return <TouchableOpacity onPress={() => nav(item.id)} style={{marginBottom: 10, marginRight:10}}>
              <Image style={{width: 170, height: 200}} source={{uri: `${item.urls.small}`}}/>
              <Text>| {item.user.first_name} |</Text>
              <Text style={{maxWidth:150}}>{item.alt_description}</Text>
            </TouchableOpacity>
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  flat: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  middle: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },

});
export default Photos;
