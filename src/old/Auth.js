import auth0 from 'auth0-js';

// Auth0 dashboard: https://manage.auth0.com/dashboard/us/rl-feed/applications/SFzIDisy1hlV2FldPKy72hgh5AxCFqba/settings
export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'rl-feed.auth0.com',
    clientID: 'SFzIDisy1hlV2FldPKy72hgh5AxCFqba',
    redirectUri: 'http://localhost:3001/callback',
    audience: 'https://rl-feed.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  constructor() {
    this.login = this.login.bind(this);
  }

  login() {

  }
}