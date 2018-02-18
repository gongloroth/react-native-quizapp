import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';

class QuestionList extends Component {

  onSelect(index, value) {
    this.setState({
      text: `Selected index: ${index} , value: ${value}`
    });
  }

  loadQuestions() {
    const data = [{ question: 'question1' }, { queston: 'question3' }];
    console.log(data);
      return data;
    }

    renderItem = (question) => {
      console.log(question);
      return <Text>{question.question}</Text>;
    }

  render() {
    return (
      <ScrollView style={styles.mainContainer}>
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}>Question 1</Text>
          <Text style={styles.questionStyle}>
            What is your name ha naygoynashgféasdégadkéajdk as fkéajs?
          </Text>
        </View>
        <View style={styles.containerStyle2}>
        <RadioGroup
          onSelect={(index, value) => this.onSelect(index, value)}
          thickness={2}
        >
          <RadioButton
            value={'item1'}
          >
            <Text>This is item #1</Text>
          </RadioButton>

          <RadioButton value={'item2'}>
            <Text>This is item #2</Text>
          </RadioButton>

          <RadioButton value={'item3'}>
            <Text>This is item #3</Text>
          </RadioButton>
        </RadioGroup>

        </View>
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

export default QuestionList;
