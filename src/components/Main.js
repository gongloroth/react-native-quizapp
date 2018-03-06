import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { loadCategories, requestToken, resetScore } from '../actions';
import {
  Button,
  QuizLabel
} from './common';
import CategorySelect from './CategorySelect';


class Main extends Component {

  componentWillMount() {
    this.props.loadCategories();
    if (this.props.token === '') {
      this.props.requestToken();
    }
  }

  onButtonPress() {
    Actions.questionList();
    this.props.resetScore();
  }

  render() {
    if (this.props.loadingCategories) {
      console.log('Loading categories: ');
      console.log(this.props.loadingCategories);
      return (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    console.log('Loading categories: ');
    console.log(this.props.loadingCategories);
    return (
      <View style={styles.MainContainer}>
        <QuizLabel labelText='Quiz App' />
        <CategorySelect categories={this.props.categories} />
        <View style={{ flex: 1 }} />
        <Button onPress={this.onButtonPress.bind(this)}>
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
  },
  indicatorContainer: {
    flex: 1,
    backgroundColor: '#90CAF9',
    justifyContent: 'center'
  }
};

const mapStateToProps = (state) => {
  return {
    loadingCategories: state.cat.loadingCategories,
    categories: state.cat.categories,
    token: state.token.token,
    score: state.ans.score
  };
};

export default connect(mapStateToProps, { loadCategories, requestToken, resetScore })(Main);
