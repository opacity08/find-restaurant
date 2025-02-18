import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
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
        marginTop: 10,
        flexDirection: 'row'        
    },
    inputstyle: {     
      flex: 1,
      fontSize: 18
    },
    iconStyle: {
      fontSize: 35,
      alignSelf: 'center',
      marginHorizontal: 15
    }
});

export default SearchBar;
