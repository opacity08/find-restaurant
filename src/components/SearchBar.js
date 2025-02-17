import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" size={30} />
      <TextInput style={styles.inputstyle} placeholder='Search' />
    </View>
  );
};

const styles = StyleSheet.create({
    
    backgroundStyle: {
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputstyle: {
      borderColor: 'black',
      borderWidth: 1,
      flex: 1
    }
});

export default SearchBar;
