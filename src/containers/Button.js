import React from 'react';
import { connect } from 'react-redux';
import { getOrderList } from '../actions'

let styles = {
  backgroundColor: 'HotBlue ',
  width: '120px',
  height: '70px',
  borderRadius: '100px',
  display: 'block',
  margin: '50px auto',
  fontSize: '8px',
  border: '3px solid '
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  render() {
    return (
      <button style={!this.state.hover ? styles : { ...styles, backgroundColor: 'DarkBluish ' }}
        onMouseOut={() => { this.setState({ hover: false }) }}
        onMouseOver={() => { this.setState({ hover: true }) }}
        onClick={this.props.getOrderList}
      >Press to see order list</button>
    );
  }

};

const mapDispatchToProps = {
  getOrderList: getOrderList,
};

Button = connect(
  null,
  mapDispatchToProps,
)(Button);

export default Button;
