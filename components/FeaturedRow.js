import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import FeaturedCard from './FeaturedCard'

const FeaturedRow = () => {
    return (
        <View className='flex-1 justify-center'>
            {/* Header */}
            <View className='flex-row items-center px-4 mt-4 justify-between'>
                <Text className='text-xl font-extrabold'>Travel made easy</Text>
            </View>
            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
                className='pt-4'
            >
                {/* Scrollable Suggestion Cards */}
                <FeaturedCard />
            </ScrollView>
            
        </View>
    )
}

export default FeaturedRow
