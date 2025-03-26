import React from "react";
import { View, Image, Text, StyleSheet } from 'react-native';


const ResultsDetail = ({ result }) => {
    return(
        <View>
            <Image source={{ uri: result.image_url}} style={styles.image} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )         
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        borderRadius: 4,
        height: 120,
        margin: 10
    },
    name: {
        fontWeight: 'bold'
    }
});

export default ResultsDetail;