import React, {Component} from 'react'
import {Layout, Menu, Icon} from 'antd';

import './Header.scss'


const Header = Layout.Header;
const MenuItem = Menu.Item;
class Header extends Component{


    state={
        current: ''
    };

    handleClick =e=>{
        this.setState({
            current: e.key
        })
    };


    render(){
        return(
            <Header className="app-header">
                <div className="container">
                    <div className="app-title">
                        <h1>Cardosh App</h1>
                    </div>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={this.state.current}
                        mode="horizontal"
                    >
                        <MenuItem key="search"><Icon type="search" />Найти</MenuItem>
                    </Menu>
                </div>
            </Header>
        )
    }
}
export default Header;