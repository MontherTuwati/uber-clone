import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

const data = [
    {
        id: '123',
        title: 'Ride',
        image: require('../assets/UberX.png'),
        screen: 'MapScreen',
    },
    {
        id: '456',
        title: 'Rental Cars',
        image: require('../assets/UberRental.png'),
        screen: 'RentalScreen',
    },
]

const SuggestionCard = () => {
    return (
        <SafeAreaView>
            <View className='flex-row'>
                {data.map((item) => (
                    <TouchableOpacity
                    key={item.id}
                    className='rounded-xl p-3 pl-3 pb-2 pt-4 bg-gray-100 m-2 w-44'
                    >
                    <View className='flex-row justify-between'>
                        <Text className='text-lg pt-14'>{item.title}</Text>
                        <Image
                        style={{
                            width: 50,
                            height: 50,
                            resizeMode: 'contain',
                        }}
                        source={item.image}
                        />
                    </View>
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
        
    )
}

export default SuggestionCard

