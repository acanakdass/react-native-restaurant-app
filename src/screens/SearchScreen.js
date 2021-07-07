import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'

import yelp from '../api/yelp'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

export default function SearchScreen() {

   const [searchInput, setSearchInput] = useState('')
   const [makeRequestToApi, results, errorMessage] = useResults()

   const filterResultByPrice = (price) => {
      //price ==='$' || '$$' || '$$$'
      return results.filter(result => {
         return result.price == price
      })
   }
   console.log(results)
   return (
      <View style={styles.container}>
         <SearchBar
            searchInput={searchInput}
            onSearchInputChange={setSearchInput}
            onInputSubmit={() => makeRequestToApi(searchInput)}
         />
         {errorMessage ? <Text>{errorMessage}</Text> : null}
         {/* <Text>We have found {results.length} results</Text> */}
         <ScrollView>
            <ResultsList result={filterResultByPrice('$')} title="Cost Effective" />
            <ResultsList result={filterResultByPrice('$$')} title="Bit Pricier" />
            <ResultsList result={filterResultByPrice('$$$')} title="Big Spender" />
         </ScrollView>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      // margin: 10
   }
})
