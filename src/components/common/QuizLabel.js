// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const QuizLabel = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.labelText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    margin: 10,
    marginBottom: 20,
    flexDirection: 'row',
    backgroundColor: '#841584',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderRadius: 10,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#90CAF9'
  }
};

// Make the component available to other parts of the app
export { QuizLabel };
