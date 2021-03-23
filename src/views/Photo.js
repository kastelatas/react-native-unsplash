import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {getPhoto} from "../../store/actions";


const Photo = ({route}) => {
  const dispatch = useDispatch();
  const photo = useSelector(state => state.photo)

  useEffect(()=> {
    if (route.params.id) {
      dispatch(getPhoto(route.params.id))
    }
  },[])
  return (
    <View >
      {
        photo.urls &&
        <View style={styles.img_block}>
          <Image style={{width: '100%', height: '100%'}} source={{uri:photo.urls.regular}}/>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  img_block:{
    height: 500
  }
});
export default Photo;
