import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/solid'

const data = [
    {
        id: '123',
        title: 'Book a rental car',
        description:'Check out a new city with ease',
        image: require('../assets/images/Rental_1.png'),
        screen: 'MapScreen',
    },
    {
        id: '456',
        title: 'Try local spots',
        description:'Delivered on Uber Eats',
        image: require('../assets/images/Eats_1.png'),
        screen: 'EatsScreen',
    },
]

const FeaturedCard = () => {
    return (
        <View className='flex-row'>
            {data.map((item) => (
                <TouchableOpacity
                key={item.id}
                className='rounded-xl mr-3 shadow bg-white'
                >
                    <Image
                        className='h-36 w-60 rounded-2xl'
                        source={item.image}
                    />
                    <View>
                        <View className='pb-1 flex-row items-center space-x-2'>
                            <Text className='font-bold text-lg pt-2'>{item.title}</Text>
                            <ArrowRightIcon color='black' opacity={0.5} size={22} stroke={200}/>
                        </View>
                        <View>
                            <Text className='text-base'>{item.description}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default FeaturedCard

const styles = StyleSheet.create({})