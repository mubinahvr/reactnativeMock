import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Slider from './components/Slider/Slider'

const App = () => {
  return (
    <ScrollView style={styles.container}>
   
        <Header />
        <Banner />
        <Slider />
      
    </ScrollView>
   
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#482287',
    flex:1,
   
 
  }
})