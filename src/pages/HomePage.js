import React, {Component} from 'react';
import Layout from "../hoc/Layout/Layout";
import Home from "../containers/Home/Home";
import Routes from "../containers/Routes/Routes";
import Advantages from "../containers/Advantages/Advantages";
import Reasons from "../containers/Reasons/Reasons";
import Footer from "../containers/Footer/Footer";

class HomePage extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Home />
                    <Routes />
                    <Advantages/>
                    <Reasons/>
                    <Footer/>
                </Layout>
            </div>
        );
    }
}

export default HomePage;