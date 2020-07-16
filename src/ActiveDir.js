import React from 'react';
import ActiveDirectory from 'activedirectory';

export default class ActiveDirectoryComponent extends React.Component {
    state = {
      authResponse: undefined
    };
  
    componentDidMount() {
      var config = {
        url: 'ldap://compandomain.com:389',
        baseDN: 'dc=domainname,dc=com',
        username: 'user',
        password: 'pass'
      };
  
      var ad = new ActiveDirectory(config);
      var username = 'john.smith@domain.com';
      var password = 'password';
  
      ad.authenticate(username, password, function (err, auth) {
        if (err) {
          this.setState({ authResponse: { error: JSON.stringify(err) } });
          return;
        }
  
        if (auth) {
          this.setState({ authResponse: auth });
        } else {
          console.log('Authentication failed!');
          this.setState({ authResponse: { authFailed: true } });
        }
      });
    }
  
    render() {
      if (!this.state.authResponse) {
        return <div>Authenticating....</div>;
      }
      if (this.state.authResponse.error) {
        return <div>{this.state.authResponse.error}</div>
      }
      if (this.state.authResponse.authFailed) {
        return <div>Authentication Failed</div>
      }
      return <div>.....</div>
    }
  }