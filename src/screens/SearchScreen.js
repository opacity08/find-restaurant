import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {

  const [term, setTerm] = useState('');

  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term,
        location: 'honefoss'
      }
    });
    setResults(response.data.businesses);
  }


  return (
    <View> 
      <SearchBar 
        term={term} 
        onTermChange={setTerm} 
        onTermSubmit={searchApi}
      />
      <Text>{term}</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
