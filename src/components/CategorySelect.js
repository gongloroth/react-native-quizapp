import React from 'react';
import { View, Text } from 'react-native';
import CatPick from './CatPick';

const CategorySelect = ({ categories }) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.labelStyle}>
        <Text style={styles.textStyle}>
          Choose Category
        </Text>
      </View>
      <View style={styles.pickerStyle}>
        <CatPick categories={categories} />
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    margin: 10,
    padding: 10,
    backgroundColor: '#841584',
    flexDirection: 'column',
    borderRadius: 10,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    position: 'relative'
  },
  labelStyle: {
    padding: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#90CAF9',
    borderBottomWidth: 2,
    borderColor: '#841584',
  },
  pickerStyle: {
    flexDirection: 'column',
    backgroundColor: '#90CAF9',
    borderColor: '#841584',
  },
  textStyle: {
    color: '#841584',
    fontWeight: 'bold'
  }
};

export default CategorySelect;
