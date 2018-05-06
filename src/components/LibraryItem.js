import React, { Component } from 'react';
import { LayoutAnimation,
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';


class LibraryItem extends Component {

  componentWillUpdate() {
      LayoutAnimation.linear();
  }

  renderDetailView() {
    const { library, isExpanded } = this.props;
    if (isExpanded) {
      return (
        <CardSection>
          <Text>{library.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)} >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDetailView()}
          </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const isExpanded = ownProps.library.id === state.selectedItem;
  return (
    { isExpanded }
  );
};

export default connect(mapStateToProps, actions)(LibraryItem);
