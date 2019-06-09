import React, {Component} from 'react'
import './Header.css'

class Header extends Component{
    render(){
        return(
          <div className="header">  
            <header className='app-header'>
                    <ul 
                        className="navbar">
                        <li><img className="app-logo" alt="Cardosh"/></li>
                        <li><a href="#search">Найти</a></li>
                        <li><a href="#offer">Предложить поездку</a></li>
                        <li><a href="#register">Регистрация</a></li>
                        <li><a href="#login">Войти</a></li>
                    </ul> 
            </header> 
           </div>
        )
    }
}
export default Header;