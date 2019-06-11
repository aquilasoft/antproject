import React, { Component } from 'react'

class Register extends Component{
    render(){
        return(
            <div className='register-wrapper'>
                <h1>Как вы хотите зарегистрироваться</h1>
                <form>
                   <a href='#facebook'>Войти через Facebook</a> 
                   <a href='#mail'>Зарегистироваться через эл. почту</a>
                </form>
            </div>
        )
    }
}

export default Register;