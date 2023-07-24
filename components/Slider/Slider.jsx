import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Slider = () => {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            imgUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            imgUrl: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            imgUrl: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            imgUrl: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            imgUrl: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            imgUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            imgUrl: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'
        },
    ];

    return (
        <View style={{ backgroundColor: '#fff', borderTopRightRadius: 20, borderTopLeftRadius: 20, paddingTop: 2 }}>
            <View style={styles.listText}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }} >Top Packges</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>&gt;</Text>
            </View>

            <FlatList
                horizontal
                initialNumToRender={2}
                initialScrollIndex={0}
                style={{ flex: 1 }}
                data={DATA}
                pagingEnabled

                keyExtriactor={(time, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <View style={styles.container}>
                                <View style={{ backgroundColor: '#529FF3', margin: 10, borderRadius: 50 }}>

                                    {item.imgUrl && (
                                        <Image
                                            source={{ uri: item.imgUrl }}
                                            style={{ height: 200, width: 300 }}
                                        />
                                    )}
                                </View>
                            </View>
                        </View>
                    );
                }}
            />
            <View style={styles.carddiv}>
                <View style={styles.carddiv2}>
                    <Image source={require('../../Images/cracker.png')}
                        style={{ height: 50, width: 50, tintColor: '#fff' }} />
                    <View>
                        <Text style={styles.cardtext}>
                            Looking For customized Packges?

                        </Text>
                        <Text style={{ color: '#ccc', fontSize: 14, paddingTop: 10 }}>
                            Customise your package by select your
                            preferred package or let us know of your
                            requirements through the chat or filling up our
                            quiz.
                        </Text>
                        <TouchableOpacity style={styles.qzbtndiv}>
                            <Text style={styles.qzbtn}>Quiz</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        </View>
    )
}

export default Slider

const styles = StyleSheet.create({

    carddiv: {
        backgroundColor: '#fff',

        margin: 16
    },
    carddiv2: {
        borderWidth: 1,
        borderColor: '#482287',
        backgroundColor: '#482287',
        height: '50%',
    
        padding: 16,
        height: '50vh',
        borderRadius: 10
    },
    cardtext: {
        color: '#FFF',
        fontSize: 20,
        paddingTop: 10,
        fontWeight: 'bold',
    },
    imagestyle: {
        width: 50,
        height: 50
    },
    listText: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 16,
        marginRight: 16,
        padding: 2,
        fontWeight: 'bold'
    },
    qzbtn: {
        color: "#482287",
        display: 'flex',
        alignSelf: 'center',
         fontWeight: 'bold',
    },
    qzbtndiv: {
        backgroundColor: '#fff',
        width: '20%',
        marginTop: 10,
        padding: 2,
        borderWidth: 1,
        borderColor: '#482287',
        borderRadius: 10
    }
})