import React from 'react';
import { View } from 'react-native';

const CardView = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 0,
    borderColor: '#ddd',
    //borderBottomWidth: 0,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10
  }
};

export { CardView };
