import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const data = [
    {
        id: '123',
        title: 'Ride',
        image: require('../assets/icons/UberX.png'),
        screen: 'RidesScreen',
    },
    {
        id: '456',
        title: 'Rental Cars',
        image: require('../assets/icons/UberRental.png'),
        screen: 'RentalScreen',
    },
]

const SuggestionCard = () => {
    const navigation = useNavigation();

    return (
        <View className='flex-row'>
            {data.map((item) => (
                <TouchableOpacity
                onPress={() => navigation.navigate(item.screen)}
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
    )
}


export default SuggestionCard

