import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import BannerCard from './BannerCard'

const BannerRow = () => {
    return (
        <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
        >
            <BannerCard/>
        </ScrollView>
    )
}

export default BannerRow

const styles = StyleSheet.create({})