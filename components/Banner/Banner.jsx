import { Image, ImageBackground, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const Banner = () => {
    return (
        <View style={styles.banner}>
            <ImageBackground style={styles.bannerimage}
                source={require("../../Images/wedding.jpg")}
                resizeMode='cover'
            >
                <View style={styles.bannertext}>
                    <Text style={{ color: '#fff', fontSize: 28, fontWeight: 'bold' }}>Modern Wedding</Text>
                    <View style={styles.bannertext2}>
                        <Text style={{ color: '#fff', marginLeft: 10, fontSize: 20, fontWeight: 'bold' }}>&#8377;2,16,666</Text>
                        <Text style={{ color: '#fff', textDecorationLine: 'line-through', marginLeft: 10 }}>&#8377;2,16,666</Text>
                        <TouchableOpacity style={styles.bannerbtn}>
                            <Text style={styles.bannerbtntxt}>20%</Text>
                        </TouchableOpacity>
                    </View>
                </View>
               
            </ImageBackground>
            <View style={{flex:1}}>
                <Text style={{ color: '#fff', fontSize: 32, textAlign: 'center', top: 0, display: 'flex' }}>....</Text>
            </View>
           
        </View>
    )
}

export default Banner

const styles = StyleSheet.create({
    banner: {
       
        padding: 16,
        height:'35%'
    },
    bannerimage: {
        height: "100%",
        width: '100%',
flex:1,

    },
    bannertext: {
        paddingTop:'60%',
        padding: '1%',
        backgroundColor: '#141414',
        opacity: 0.6,
        display: 'flex',
bottom:0,
        color: "#fff",
        zIndex: 111111,
    
        
   lineHeight:80,

    },
    bannertext2: {
        display: 'flex',
        flexDirection: 'row',

    },
    bannerbtn: {
        backgroundColor: "#66AE64",
        borderWidth: 1,
        borderColor: '#66AE64',
        marginLeft: 10,
        color: "#fff",
        display: 'flex',
        alignSelf: 'center',
        padding: 5,

    },
    bannerbtntxt: {
        color: "#fff",
        fontSize: 12,
        fontWeight: 'bold'
    }
})