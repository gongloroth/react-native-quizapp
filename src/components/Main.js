import React, { Component } from 'react';
import { View } from 'react-native';
import {
  Button,
  QuizLabel
} from './common';
import CategorySelect from './CategorySelect';


class Main extends Component {

  render() {
    return (
      <View style={styles.MainContainer}>
        <QuizLabel labelText='Quiz App' />
        <CategorySelect />
        <View style={{ flex: 1 }} />
        <Button>
          Start Quiz
        </Button>
      </View>
    );
  }
}

const styles = {
  MainContainer: {
    flex: 1,
    backgroundColor: '#90CAF9',
    padding: 10
  },
  imageView: {
    flex: 1,
    backgroundColor: '#90CAF9',
  },
  buttonView: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    backgroundColor: '#90CAF9',
  }
};

export default Main;
