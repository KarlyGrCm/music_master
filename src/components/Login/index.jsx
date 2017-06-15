import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

export default class Login extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Login', className)} {...props}>
        <div id="login">
          <h1>First, log in to spotify</h1>
          <a onClick="">Log in</a>
          </div>
          <div id="loggedin">
          </div>      
        </div>
    );
  }
}