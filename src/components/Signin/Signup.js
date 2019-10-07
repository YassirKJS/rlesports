import React from 'react';
import Layout from '../Layout/Layout';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitsignup = () => {
    fetch('http://localhost:3000/Signup', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    return (
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
              required
            />
            <label for='username' className='signup__username--label form__label'>Username</label>
          </div>         

          <div className='signup__email form__group'>
            <input 
              className='signup__email--input form__input'
              type='email'
              name="email-address"
              id="email-address"
              placeholder="Email Address"
              required
            />
            <label for='email-address' className='signup__email--label form__label'>Email Address</label>
          </div>

          <div className='signup__password form__group'>              
            <input 
              className='signup__password--input form__input'
              type='password'
              name="password"
              id="password"
              placeholder="Password"
              required
            />
            <label for='password' className='signup__password--label form__label'>Password</label>
          </div>

          <div className='signup__submit'>
            <input 
              className='signup__submit--input btn btn--cyan btn--animated'
              type="submit"
              value="Sign up"
            />
          </div>
        </div>

        <div className='signup__footer'>
          <div className='signup__footer--signin'>Sign in</div>
        </div>
      </div>
    );
  }
}

export default Signup;