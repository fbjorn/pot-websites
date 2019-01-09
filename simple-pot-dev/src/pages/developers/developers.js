import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

const styles = {
  button: {
    marginRight: '1rem'
  }
};

class App extends Component {

  render() {
    return (
      <div className="developers">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Build trusted products in minutes</h1>
            <p className="lead">Platform of Trust gives access to both rich built environment data and customers. You don’t have to be an industry specialist to be able to create valuable apps and data products for and with the community. Study use cases to explore the opportunities!
            </p>
            <a className="btn btn-primary btn-lg" href="#" role="button" style={styles.button}>Register and get started</a>
            <a className="btn btn-primary btn-lg" href="#" role="button" style={styles.button}>Our APIs</a>
            <a className="btn btn-primary btn-lg" href="#" role="button" style={styles.button}>Use cases</a>
          </div>
        </div>
        <div className="container">
          <div>
            <h1>Get Started</h1>
            <p>How to use digital twins. We have ready to use digital twins which enable creation of first app in minutes!
            Digital twin can be a room, building or alike. In fact your identity is a digital twin too!</p>
            <p>Lets build an app! Code for the sample app can also be found from Github.</p>
            <h2>Craft new node.js app</h2>
            <pre>npm install express-generator -g | express --view=pug myapp  | cd myapp  | npm install</pre>
            <h2>Get data from digital twin</h2>
            <p>Add the below code to your basic node.js app</p>
            <pre>Node code example to get data from digital twin</pre>
            <pre>Response</pre>
            <h2>Run the app!</h2>
            <p>Lets see the digital twin data in app.</p>
            <pre>DEBUG=myapp:* npm start</pre>
            <p>Then load http://localhost:3000/ in your browser to access the app.</p>
          </div>
          <div>
            <h1>How to publish trusted apps</h1>
            <div>
              <div>
                <h3>1. Sign up</h3>
                <p>Sign up for an account, register an app.</p>
              </div>
              <div>
                <h3>2. Develop with developer friendly APIs</h3>
                <p>Connect to data (digital twins).</p>
              </div>
              <div>
                <h3>3. Publish</h3>
                <p>Publish your app to trusted marketplace and go live!</p>
              </div>
            </div>
          </div>
          <div>
            <h1>How to publish trusted data products</h1>
            <p>Connecting your data sources to Platform of Trust is simple and easy! </p>
            <div>
              <div>
                <h3>1. Sign up</h3>
                <p>Sign up for an account, register an app, connect to an API.</p>
              </div>
              <div>
                <h3>2. Connect with translator tool</h3>
                <p>Use the sandbox to experiment. Modify translator skeleton to fit your data.</p>
              </div>
              <div>
                <h3>3. Publish</h3>
                <p>Publish your data product and go live!</p>
              </div>
            </div>
          </div>
          <div>
            <h1>Stay informed</h1>
            <p>Receive notifications about new features sign up for our newsletter and join our Slack community</p>
          </div>
          <div>
            <h1>Why work with us?</h1>
            <div>
              <div>
                <h3>For Developers</h3>
                <ul>
                  <li>Deliver value with high quality APIs</li>
                  <li>Developer friendly experience</li>
                </ul>
              </div>
              <div>
                <h3>For Companies</h3>
                <ul>
                  <li>Build trusted data products</li>
                  <li>Collaboration and partnerships</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
