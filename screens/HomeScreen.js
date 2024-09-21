import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ChevronDownIcon } from 'react-native-heroicons/mini';
import { ClockIcon, MagnifyingGlassIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavOptions from '../components/NavOptions';
import SuggestionCard from '../components/SuggestionCard';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Testing'
        })
    }, [])

    return (
        <SafeAreaView className='bg-white pt-5 pb-5 flex-1'>
            <View>
                {/*Header*/}
                <View className='p-5 pt-16'>
                    <NavOptions/>
                </View>
                {/*Search Bar*/}
                <View className="flex-row items-center space-x-2 pb-2 mx-4">
                    <View className="flex-row rounded-full justify-between border items-center space-x-3 flex-1 bg-gray-200 border-gray-200 p-2">
                        <TouchableOpacity className='flex-row items-center space-x-3 flex-1'>
                            <MagnifyingGlassIcon color='black' size={30} stroke={250}/>
                            <Text className='ml-2 flex-1 text-xl font-bold text-gray-600'>Where to?</Text>
                        </TouchableOpacity>
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

                {/*Suggestions*/}
                <View>
                    <View className='flex-row items-center px-5 pt-9 justify-between'>
                        <Text className='text-xl font-extrabold'>Suggestions</Text>
                        <TouchableOpacity>
                            <Text className='font-semibold text-base'>See All</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/*Suggestions Options*/}
                <View>

                </View>

                <SuggestionCard/>
            </View>
            
        </SafeAreaView>
    )
}

export default HomeScreen

