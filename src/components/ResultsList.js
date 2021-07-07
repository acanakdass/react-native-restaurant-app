import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import ResultsDetail from './ResultsDetail'

const ResultsList = (props) => {
   return (
      <View style={styles.container}>
         <Text style={styles.titleStyle} >{props.title}</Text>
         <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={props.result}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
               return (
                  <TouchableOpacity onPress={() => props.navigation.navigate("ResultsShow")}>
                     <ResultsDetail result={item} />
                  </TouchableOpacity>
               )
            }}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   titleStyle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 10
   },
   container: {
      marginBottom: 5
   }
})
export default withNavigation(ResultsList);