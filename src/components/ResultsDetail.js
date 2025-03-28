import React from "react";
import { View, Image, Text, StyleSheet } from 'react-native';


const ResultsDetail = ({ result }) => {
    return(
        <View style={styles.container}>
            <View style={styles.containerItem}>
                <Image source={{ uri: result.image_url}} style={styles.image} />
                <Text style={styles.name}>{result.name}</Text>
                <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
            </View>            
        </View>
    )         
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginBottom: 20
    },
    containerItem: {
        width: 250
    },
    image: {
        width: 250,
        borderRadius: 4,
        height: 160,        
    },
    name: {
        fontWeight: 'bold',
        marginBottom: 4,
        marginTop: 4
    }
});

export default ResultsDetail;