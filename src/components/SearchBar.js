import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

// import Toast from 'react-native-toast-message';


export default function SearchBar(props) {
   return (
      <View style={styles.backgroundStyle} >
         <AntDesign name="search1" style={styles.iconStyle} />
         <TextInput
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.inputStyle}
            placeholder="Search.."
            value={props.searchInput}
            onChangeText={props.onSearchInputChange}    // also usable => (newInput) => props.onSearchInputChange(newInput)
            onEndEditing={props.onInputSubmit}            //also usable => () => props.onInputSubmit()
         ></TextInput>
      </View>
   )
}

const styles = StyleSheet.create({
   backgroundStyle: {
      backgroundColor: '#e0e0e2',
      height: 50,
      borderRadius: 5,
      marginHorizontal: 10,
      marginVertical: 5,
      flexDirection: 'row',
      padding: 3
   },
   inputStyle: {
      fontSize: 18,
      flex: 1  //use much space as ypu can
   },
   iconStyle: {
      fontSize: 30,
      alignSelf: 'center',
      marginHorizontal: 15
   }
})
