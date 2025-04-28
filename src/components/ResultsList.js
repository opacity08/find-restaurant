import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";


const ResultsList = ({ title, results, navigation }) => {
    return <View>
        <Text style={styles.title}>{title}({results.length})</Text>
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity 
                        onPress={() => 
                            navigation.navigate('ResultsShow', {id: item.id})
                        }
                    >
                        <ResultsDetail result={item} /> 
                    </TouchableOpacity>
                )
            }}
        />
    </View>
}

const styles =  StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 10
    }
});

export default withNavigation(ResultsList);
