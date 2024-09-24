import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import SuggestionCard from './SuggestionCard'

const SuggestionRow = () => {
    return (
        <View
        className='flex-1 mx-auto justify-center'>
            {/* Header */}
            <View className='flex-row items-center px-4 pt-5 justify-between'>
                <Text className='text-xl font-extrabold'>Suggestions</Text>
                <TouchableOpacity>
                    <Text className='font-semibold text-base'>See All</Text>
                </TouchableOpacity>
            </View>
            
            {/* Scrollable Suggestion Cards */}
            <SuggestionCard />
        </View>
    )
}


export default SuggestionRow
