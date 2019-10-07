import React from 'react';

class Restore extends React.Component {
  render() {
    return (
      <div className='restore'>
        <div className='restore__header'>RESTORE YOUR PASSWORD</div>

        <div className='restore__form'>       

          <div className='restore__notice'>Enter your Email Adress and we will send you instructions for setting a new password.</div>

          <div className='restore__email form__group'>
            <input 
              className='restore__email--input form__input'
              type='email'
              name="email-address"
              id="email-address"
              placeholder="Email Address"
              required
            />
            <label for='email-address' className='restore__email--label form__label'>Email Address</label>
          </div>

          <div className='restore__submit'>
            <input 
              className='restore__submit--input btn btn--cyan btn--animated'
              type="submit"
              value="Send"
            />
          </div>
        </div>

        <div className='restore__footer'>
          <div className='restore__footer--signin' onClick={this.props.handleSignin}>Sign in</div>
        </div>
      </div>
    );
  }
}

export default Restore;

//&rarr;