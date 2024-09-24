import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'

const data = [
    {
        id: '123',
        title: 'Rides',
        image: require('../assets/icons/UberX.png'),
        screen: 'MapScreen',
    },
    {
        id: '456',
        title: 'Eats',
        image: require('../assets/icons/FoodBowl.png'),
        screen: 'EatsScreen',
    },
]

const NavOptions = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({item}) => (
                <TouchableOpacity>
                    <View className='flex-row items-center'>
                        <Image
                            style={{
                                width: 50,
                                height: 50,
                                resizeMode: 'contain'
                            }}
                            source={item.image}
                        />
                        <Text className='font-bold text-xl'>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions