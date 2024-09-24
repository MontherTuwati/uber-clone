import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

const data = [
    {
        id: '123',
        title: 'Ride',
        image: require('../assets/icons/UberX.png'),
        screen: 'MapScreen',
    },
    {
        id: '456',
        title: 'Rental Cars',
        image: require('../assets/icons/UberRental.png'),
        screen: 'RentalScreen',
    },
]

const SuggestionCard = () => {
    return (
        <SafeAreaView className='flex-1'>
            <View className='flex-row'>
                {data.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        className='rounded-xl p-4 pl-4 bg-gray-100 mx-2 my-3 w-44'
                    >
                        <View className='flex-row justify-between'>
                            {/* Bottom-left alignment */}
                            <Text className='text-sm self-end'>{item.title}</Text>
                            <Image
                                style={{
                                    width: 55,
                                    height: 70,
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

