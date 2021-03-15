import React from 'react'
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import {BrowserRouter, Route} from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    {/*<Route path='/news' component={}/>*/}
                    {/*<Route path='/music' component={}/>*/}
                    {/*<Route path='settings' component={}/>*/}
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
