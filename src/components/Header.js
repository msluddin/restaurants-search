import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View>
      <Text style={styles.header1}>Grab your</Text>
      <Text style={styles.header2}>delicious meal!</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header1: {
    fontSize: 35,
    marginTop: 60,
    marginHorizontal: 25,
  },
  header2: {
    fontSize: 40,
    marginHorizontal: 25,
    fontWeight: 'bold',
  },
});
