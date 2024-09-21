import React from 'react'
import { SafeAreaView, Text, TextInput, View } from 'react-native'
import { ChevronDownIcon } from 'react-native-heroicons/mini'
import { ClockIcon, MagnifyingGlassIcon } from 'react-native-heroicons/solid'
import NavOptions from '../components/NavOptions'

const HomeScreen = () => {
    return (
        <SafeAreaView className='bg-white h-full'>
            <View className='p-5 pt-16'>
                <NavOptions/>
            </View>
            {/*Search Bar*/}
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row rounded-full border items-center space-x-3 flex-1 bg-gray-200 border-gray-200 p-2">
                    <MagnifyingGlassIcon color='black' size={30} stroke={250}/>
                    <TextInput
                        placeholder="Where to?"
                        keyboardType='default'
                        className='ml-2 flex-1 text-xl font-extrabold'
                    />
                    <View className='relative flex-row'>
                        <View className='flex-row items-center space-x-2 border-0 border-l pl-4 border-white'>
                            <View className='flex-row rounded-full bg-white items-center p-2 space-x-3'>
                                <ClockIcon size={25} color='black' stroke={0}/>
                                <Text className='text-black font-medium'>Now</Text>
                                <ChevronDownIcon color='black' size={25} stroke={200}/>
                            </View>
                        </View>
                    </View>
                    
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

