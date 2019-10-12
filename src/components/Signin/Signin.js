/* eslint no-restricted-globals: 0 */
import React from 'react';
import { Redirect } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';
import { userLogin } from '../../actions';

// react-router redirect: https://stackoverflow.com/questions/29244731/react-router-how-to-manually-invoke-link


class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
      redirect: false,
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignin = () => {  
    fetch('http://localhost:3010/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ // stringify the object
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json()) // data: success or error logging in   (F12/Network/signin)
      .then(data => {
        if (data === 'success') {
          this.props.onCloseSignin();
          this.props.dispatch(userLogin(this.state.signInEmail));
          this.setState({redirect: true});
        }
      })

      /*.then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onCloseSignin();
          // this.setState({redirect: true});
        }
      })*/
      
  }

  render() {    
    if (this.state.redirect) {
      return <Redirect push to={location.pathname} />;
    }

    return (
      <div>
        <FontAwesomeIcon icon={faTimes} className='icon-signinCollapse' onClick={this.props.onCloseSignin} />  

        <div className='signin'>
          <div className='signin__header'>SIGN IN</div>

          <div className='signin__form'>            
            <div className='signin__email form__group'>
              <input 
                className='signin__email--input form__input'
                type='email'
                name="email"
                id="email"
                placeholder="Email Address"
                onChange={this.onEmailChange}
                required
              />
              <label for='email-address' className='signin__email--label form__label'>Email Address</label>
            </div>

            <div className='signin__password form__group'>              
              <input 
                className='signin__password--input form__input'
                type='password'
                name="password"
                id="password"
                placeholder="Password"
                onChange={this.onPasswordChange}
                required
              />
              <label for='password' className='signin__password--label form__label'>Password</label>
            </div>

            <div className='signin__remember form__checkbox-group'>
                <input 
                  className='signin__remember--input form__checkbox-input'
                  type='checkbox'
                  id="remember"
                />
                <label for="remember" class="form__checkbox-label">
                    <span className="form__checkbox-button"></span>
                    Remember me
                </label>
            </div>

            <div className='signin__submit'>
              <input 
                className='signin__submit--input btn btn--cyan btn--animated'
                type="submit"
                value="Sign in"
                onClick={this.onSubmitSignin}
              />
            </div>
          </div>

          <div className='signin__footer'>
            <div className='signin__footer--signup' onClick={this.props.handleSignup}>Sign up</div>
            <div className='signin__footer--forgot' onClick={this.props.handleRestore}>Restore your password</div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Signin);

//&rarr;