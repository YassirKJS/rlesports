import React from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: ''
    }
  }

  onUsernameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignup = () => {
    fetch('http://localhost:3010/signup', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        username: this.state.name
      })
    })
      .then(response => response.json())  
      .then(user => {  // if we get a user back
        if (user) {
          this.props.onCloseSignup();
          this.props.onClickLoadUser(user);
          this.props.dispatch(userLogin(this.state.email));
          this.props.onClickRedirect();
        }
      })
  }

  render() {
    return (
      <div>
        <FontAwesomeIcon icon={faTimes} className='icon-signupCollapse' onClick={this.props.onCloseSignup} /> 

        <div className='signup'>
          <div className='signup__header'>SIGN UP</div>

          <div className='signup__form'>
            <div className='signup__username form__group'>
              <input 
                className='signup__username--input form__input'
                type='username'
                name="username"
                id="username"
                placeholder="Username"
                onChange={this.onUsernameChange}
                required
              />
              <label for='username' className='signup__username--label form__label'>Username</label>
            </div>         

            <div className='signup__email form__group'>
              <input 
                className='signup__email--input form__input'
                type='email'
                name="email"
                id="email"
                placeholder="Email Address"
                onChange={this.onEmailChange}
                required
              />
              <label for='email' className='signup__email--label form__label'>Email Address</label>
            </div>

            <div className='signup__password form__group'>              
              <input 
                className='signup__password--input form__input'
                type='password'
                name="password"
                id="password"
                placeholder="Password"
                onChange={this.onPasswordChange}
                required
              />
              <label for='password' className='signup__password--label form__label'>Password</label>
            </div>

            <div className='signup__submit'>
              <input 
                className='signup__submit--input btn btn--cyan btn--animated'
                type="submit"
                value="Sign up"
                onClick={this.onSubmitSignup}
              />
            </div>
          </div>

          <div className='signup__footer'>
            <div className='signup__footer--signin' onClick={this.props.handleSignin}>Sign in</div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Signup);