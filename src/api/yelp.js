import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios'

// Client ID :  8FFFX0HGKNDuE0hUyVmxmg

// API Key : JOqiG8tkxPQd5CxphXVwRL4RwnWRDLl5a8z9rXnu8hSOaxTJccHS4ruij
//-a37tkPPjrc_ufc0z08Zs1ch80sBjYQsw5eDQcinnTvq8slzTZi2ZKLv0sP5nkb9evlYHYx

export default axios.create({
   baseURL: 'https://api.yelp.com/v3/businesses',
   headers: {
      Authorization: 'Bearer JOqiG8tkxPQd5CxphXVwRL4RwnWRDLl5a8z9rXnu8hSOaxTJccHS4ruij-a37tkPPjrc_ufc0z08Zs1ch80sBjYQsw5eDQcinnTvq8slzTZi2ZKLv0sP5nkb9evlYHYx'
   }
})