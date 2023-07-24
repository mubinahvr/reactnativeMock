import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.div1}>
            <View>
                <Text style={styles.headertext}>Hi, Jenny</Text>
            </View>
            <View style={styles.iconsstyle}>
                <Image source={require('../../Images/search.png')} style={styles.headericons} />
                <Image source={require('../../Images/bell.png')} style={styles.headericons} />
                <Image source={require('../../Images/calendar.png')} style={styles.headericons} />

                </View>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    div1: {
        display: 'flex',
        flexDirection: 'row',
        margin: 16,
justifyContent:'space-between'
    },
    headertext: {
        color: "#fff",
        fontSize: 18,
       
    },
    headericons: {
        width: 20,
        height: 20,
        tintColor: "#fff",
        margin: "2%",
        fontWeight:'bold'

    },
    iconsstyle:{
        display:'flex',
        flexDirection:'row',
      justifyContent:'space-evenly'
    }
})