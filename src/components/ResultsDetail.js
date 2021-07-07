import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
export default function ResultsDetail(props) {
   return (
      <View style={styles.container}>
         <Image style={styles.image} source={{ uri: props.result.image_url }} />
         <Text>{props.result.name}</Text>
         <Text>{props.result.rating} <AntDesign name="star" size={15} color="black" /> </Text>
         <Text>{props.result.review_count} reviews</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   image: {
      width: 200,
      height: 120,
      borderRadius: 4,
      marginBottom: 5
   },
   container: {
      marginLeft: 10,
   }
})
