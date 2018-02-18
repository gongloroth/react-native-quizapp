import React, { Component } from 'react';
import { Picker, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { loadCategories, categoryChanged } from '../actions';

class CatPick extends Component {

  componentWillMount() {
    this.props.loadCategories();
  }

  updateCategory = (itemValue, itemPosition) => {
    const category = { name: itemValue, id: itemPosition };
    console.log(category);
     this.props.categoryChanged(category);
  }

  renderCategories() {
    console.log(this.props.categories);
    return this.props.categories.map((item) => (
      <Picker.Item label={item.name} value={item.name} key={item.id} />)
   );
  }

   render() {     
      return (
        <View>
          <Picker
            selectedValue={this.props.Placeholder}
            onValueChange={this.updateCategory.bind(this)}
          >
            {this.renderCategories()}
          </Picker>
        </View>
      );
   }
}

const mapStateToProps = (state) => {

  return {
    categories: state.cat.categories,
    loadingSucces: state.cat.loadingSuccess,
    loadingCategories: state.cat.loadingCategories,
    Placeholder: state.cat.Placeholder
  };
};

export default connect(mapStateToProps, { loadCategories, categoryChanged })(CatPick);
