import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ChevronDownIcon } from 'react-native-heroicons/mini';
import { ClockIcon, MagnifyingGlassIcon } from 'react-native-heroicons/solid';
import BannerRow from '../components/BannerRow';
import FeaturedRow from '../components/FeaturedRow';
import SuggestionRow from '../components/SuggestionRow';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView className='bg-white flex-1'>
            <View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                >
                    {/*Search Bar*/}
                <View className="flex-row items-center space-x-2 pb-2 mt-4 mx-4">
                    <View className="flex-row rounded-full justify-between border items-center space-x-3 flex-1 bg-gray-200 border-gray-200 p-2">
                        <TouchableOpacity className='flex-row items-center space-x-3 flex-1'>
                            <MagnifyingGlassIcon color='black' size={30} stroke={250}/>
                            <Text className='ml-2 flex-1 text-xl font-bold text-gray-600'>Where to?</Text>
                        </TouchableOpacity>
                        <View className='relative'>
                            <TouchableOpacity className='items-center space-x-2 border-0 border-l pl-4 border-white'>
                                <View className='flex-row rounded-full bg-white items-center p-2 space-x-3'>
                                    <ClockIcon size={25} color='black' stroke={0}/>
                                    <Text className='text-black font-medium'>Now</Text>
                                    <ChevronDownIcon color='black' size={25} stroke={200}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
                    {/*Suggestions*/}
                    <SuggestionRow/>
                    <FeaturedRow/>
                    <BannerRow/>
                    {/*Featured*/}
            </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

