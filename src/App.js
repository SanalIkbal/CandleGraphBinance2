import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import styles from './App.module.css';

class App extends Component {
  render (){
  return (
    <div>
      <div  className={styles.Nav}>Welcome to Daily Binance
      <br></br>
      Select your coin to see the current data 
      </div>
      
      <br></br>      
      <br></br>            
      <br></br>      
      <br></br>      
      <Layout>
      </Layout>
      
    </div>
  );
  }
}

export default App;
