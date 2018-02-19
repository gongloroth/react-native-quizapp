import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { answerOptions, answerChanged } from '../actions';

class Question extends Component {
  /*
  componentWillMount() {
    this.props.answerOptions(
        this.props.correct_answer,
        this.props.incorrect_answers
      );
  }
  */

  renderRadioButtons() {
  const answers = this.props.incorrect_answers.map(
    (item, index) => ({ label: item, value: index })
  );
  answers.push({ label: this.props.correct_answer, value: 3 });
  console.log(answers);
    
  return answers.map((item) => (
        <RadioButton key={item.label} value={item.label} >
          <Text>{item.label}</Text>
        </RadioButton>
      )
    );
  }

  render() {
    return (
      <View>
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}>Question {this.props.index + 1}</Text>
          <Text style={styles.questionStyle}>
            {this.props.question.question}
          </Text>
        </View>
        <View style={styles.containerStyle2}>
          <RadioGroup
            onSelect={(index, value) => this.props.answerChanged(index, value)}
          >
            {this.renderRadioButtons()}
          </RadioGroup>
        </View>
      </View>
    );
  }
}
//{this.renderRadioButtons()}
const styles = {
  containerStyle: {
    margin: 10,
    marginBottom: 1,
    padding: 10,
    backgroundColor: '#841584',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    position: 'relative'
  },
  containerStyle2: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#BBDEFB',
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
    color: '#90CAF9',
    fontWeight: 'bold',
    fontSize: 18
  },
  questionStyle: {
    color: '#90CAF9',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center'
  },
  answerStyle: {
    color: '#841584',
    fontWeight: 'bold',
    fontSize: 14,
  }
};

const mapStateToProps = (state) => {
  return {
    selected: state.ans.selected,
    //answers: state.ans.answers
  };
};

export default connect(mapStateToProps, { answerOptions, answerChanged })(Question);
