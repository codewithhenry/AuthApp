export default {
  oidc: {
    clientId: ENTER YOUR CLIENT ID HERE,
    issuer: ENTER YOUR OKTA DOMAIN HERE,
    redirectUri: 'http://localhost:4200/login/callback',
    scopes: ['openid', 'profile', 'email']
  }
}
