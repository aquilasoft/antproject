import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Advantages from './containers/Advantages/Advantages'
import Footer from './containers/Footer/Footer'
import Home from './containers/Home/Home'
import Reasons from './containers/Reasons/Reasons'
import Routes from './containers/Routes/Routes'
import Layout from './hoc/Layout/Layout'

function App() {
  return (
    <div className="App">
        <Layout>
        <Header/>
        <Home />
        <Routes />
        <Advantages/>
        <Reasons/> 
        <Footer/> 
        </Layout>   
    </div>
  );
}

export default App;
