import React, { Component } from 'react';
import { View, ScrollView, ActivityIndicator, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { loadQuestions, calculateResult } from '../actions';
import Question from './Question';
import { Button } from './common';

class QuestionList extends Component {

  componentWillMount() {
    console.log(this.props.categoryId);
    this.props.loadQuestions(this.props.categoryId);
  }

  onButtonPress() {
    console.log(this.props.answers);
    this.props.calculateResult(this.props.answers, this.props.questions);
  }

  onShowResult() {
    console.log(this.props.result);
    const resultString = 'Great job!\n Your result is: ' + this.props.result + ' points';
    ToastAndroid.show(resultString, ToastAndroid.SHORT);
  }

    renderQuestions() {
      console.log(this.props.questions);
      return this.props.questions.map((question, index) => (
        <Question
          key={question.question}
          question={question}
          index={index}
          correct_answer={question.correct_answer}
          incorrect_answers={question.incorrect_answers}
        />
      )
     );
    }

  render() {
    if (this.props.loadingQuestions) {
      console.log('Loading questions: ');
      console.log(this.props.loadingQuestions);
      return (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    console.log('Loading questions: ');
    console.log(this.props.loadingQuestions);
    return (
      <ScrollView style={styles.mainContainer}>
        {this.renderQuestions()}
        <Button onPress={this.onButtonPress.bind(this)}>
          Submit
        </Button>
        <Button onPress={this.onShowResult.bind(this)}>
          Show Results
        </Button>
      </ScrollView>
    );
  }
}

const styles = {
  mainContainer: {
    flex: 1,
    backgroundColor: '#90CAF9',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  indicatorContainer: {
    flex: 1,
    backgroundColor: '#90CAF9',
    justifyContent: 'center'
  }
};

const mapStateToProps = (state) => {
  return {
    questions: state.quest.questions,
    loadingQuestions: state.quest.loadingQuestions,
    categoryId: state.cat.PlaceholderId,
    answers: state.ans,
    result: state.ans.score,
    calculating: state.ans.calculating
  };
};

export default connect(mapStateToProps, { loadQuestions, calculateResult })(QuestionList);
