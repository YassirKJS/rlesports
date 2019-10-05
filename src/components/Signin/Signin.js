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
          <div className='signin__header'>Sign In</div>

          <div className='signin__form'>            
            <div className='signin__email'>
              <label className='signin__email--label'>Email</label><br/>
              <input 
                className='signin__email--input'
                type='email'
                name="email-address"
                id="email-address"
              />
            </div>

            <div className='signin__password'>
              <label className='signin__password--label'>Password</label><br/>
              <input 
                className='signin__password--input'
                type='password'
                name="password"
                id="password"
              />
            </div>

            <div className='signin__remember'>
              <label>
                <input 
                  className='signin__remember--input'
                  type='checkbox'
                />
                <span className='signin__remember--span'> Remember me </span>
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
            <div className='signin__footer--signup'>Sign up</div>
            <div className='signin__footer--forgot'>Forgot your password?</div>
          </div>

        </div>
      </Layout>
    );
  }
}

export default Signin;