import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const CategoryItem = ({ name, imageUrl, index, active, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          styles.container,
          index === 0 ? { marginLeft: 25 } : { marginLeft: 15 },
          active
            ? { backgroundColor: 'rgb(241, 186, 87)' }
            : { backgroundColor: 'white' },
        ]}
      >
        <View style={styles.imageContainer}>
          <Image source={imageUrl} style={styles.image} />
          <Text style={styles.header}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 500,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.1,
    elevation: 3,
    marginBottom: 7,
  },
  image: {
    width: 35,
    height: 35,
  },
  imageContainer: {
    width: 51,
    height: 54,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 500,
    marginBottom: 3,
  },
  header: {
    fontWeight: 'bold',
  },
});
