import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/solid'

const data = [
    {
        id: '789',
        title: 'Ready? Then let`s roll.',
        description: 'Ride with Uber',
        image: require('../assets/images/Eats_1.png'),
        bgColor: '#F2E4FE',
        screen: 'MapScreen',
    },
    {
        id: '456',
        title: 'Rent without the hassle',
        description: 'Learn more',
        image: require('../assets/images/Eats_1.png'),
        bgColor: '#633396',
        screen: 'EatsScreen',
    },
]

const BannerCard = () => {
    return (
        <View className='flex-row'>
            {data.map((item) => (
                <TouchableOpacity
                key={item.id}
                style={{ backgroundColor: item.bgColor }}
                className='rounded-xl mr-3 shadow mt-5 mb-5 '
                >
                    <View className='flex-row'>
                        <View className='pb-4 flex-row items-center space-x-2'>
                            <Text className='font-bold text-lg pt-2 pl-3'>{item.title}</Text>
                            <ArrowRightIcon color='black' opacity={0.5} size={22} stroke={200}/>
                        </View>
                        <Image
                            className='h-36 w-40 rounded-xl ml-20'
                            source={item.image}
                        />
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default BannerCard

const styles = StyleSheet.create({})