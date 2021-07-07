import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
   const [results, setResults] = useState([])
   const [errorMessage, seterrorMessage] = useState('')

   const makeRequestToApi = async (searchValue) => {
      console.log("makin requestt")
      try {
         const response = await yelp.get('/search', {
            params: {
               limit: 50,
               term: searchValue,
               location: 'san jose'
            }
         })
         setResults(response.data.businesses)
         seterrorMessage('')

      } catch (error) {
         seterrorMessage('Something went wrong :(')
         console.log("error :" + error)
      }
   }

   useEffect(() => {
      makeRequestToApi('pasta')
   }, [])

   return [makeRequestToApi, results, errorMessage]
};