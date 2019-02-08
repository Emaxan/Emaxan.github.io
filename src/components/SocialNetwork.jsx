import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from 'reactstrap';

import './SocialNetwork.scss';

class SocialNetwork extends Component {

  state = {
    tooltipOpen : false,
  }

  toggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render(){
    return (
      <a
        className="App-link social-network-link"
        href={this.props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon id={this.props.text} icon={this.props.icon} size={this.props.size} />
        <Tooltip placement="top" target={this.props.text} isOpen={this.state.tooltipOpen} toggle={this.toggle}>
          {this.props.text}
        </Tooltip>
      </a>
    );
  }
}

export default SocialNetwork;

SocialNetwork.propTypes = {
  icon : PropTypes.object.isRequired,
  link : PropTypes.string.isRequired,
  size : PropTypes.string.isRequired,
  text : PropTypes.string.isRequired,
};
