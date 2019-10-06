import React from 'react';
import Layout from '../Layout/Layout';


class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <Layout>
        <div className='signin'>
          <div className='signin__header'>SIGN IN</div>

          <div className='signin__form form__group'>            
            <div className='signin__email'>
              <input 
                className='signin__email--input form__input'
                type='email'
                name="email-address"
                id="email-address"
                placeholder="Email Address"
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
              />
            </div>
          </div>

          <div className='signin__footer'>
            <div className='signin__footer--signup'>Sign up !</div>
            <div className='signin__footer--forgot'>Forgot your password ?</div>
          </div>

        </div>
      </Layout>
    );
  }
}

export default Signin;

//&rarr;