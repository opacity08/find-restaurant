import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {

  const [term, setTerm] = useState('');  
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    });
  };
  

  return (
    <View style={{ flex: 1}}>
      <SearchBar 
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi()}
      />
      <Text>{term}</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text style={styles.resultsText}>We have found {results.length} results</Text>
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
        <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
        <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender"/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  resultsText: {
    marginLeft: 15,
    marginBottom: 15
  }
});

export default SearchScreen;
