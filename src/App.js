import React from 'react'
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


function App(props) {


    // const profileRender = () =>
    // const dialogRender = () => <Dialogs dialogs={props.dialogs} messages={props.messages}/>

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path='/profile/:userID?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    {/*<Route path='/news' component={}/>*/}
                    {/*<Route path='/music' component={}/>*/}
                    {/*<Route path='settings' component={}/>*/}
                </div>


            </div>
        </BrowserRouter>
    );
}

export default App;
