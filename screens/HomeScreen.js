import React from 'react'
import { Image, SafeAreaView, View } from 'react-native'

const HomeScreen = () => {
    return (
        <SafeAreaView className='bg-white h-full'>
            <View className='p-5'>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode:'contain',
                    }}
                    source={require('../assets/uber_logo.png')}
                />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

