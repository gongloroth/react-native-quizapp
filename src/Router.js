import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Login from './components/Login';
import Main from './components/Main';
import QuestionList from './components/QuestionList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={Login} title="Please Login" />
        </Scene>
        <Scene key="main" initial>
          <Scene
            onRight={() => Actions.questionList()}
            rightTitle="Add"
            rightButtonTextStyle={styles.rightTextStyle}
            key="main_menu"
            component={Main}
            title="Main Menu"
          />
          <Scene key="questionList" component={QuestionList} title="Quiz Questions" />
        </Scene>
      </Scene>
    </Router>
  );
};

const styles = {
  rightTextStyle: {
    fontSize: 20,
    color: 'red',
    margin: 5
  }
};

export default RouterComponent;
