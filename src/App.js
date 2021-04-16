import React from 'react'
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import {BrowserRouter, Route} from 'react-router-dom';


function App(props) {


    // const profileRender = () =>
    // const dialogRender = () => <Dialogs dialogs={props.dialogs} messages={props.messages}/>

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path='/profile' render={() => <Profile
                                                                  profilePage={props.state.profilePage}
                                                                  dispatch={props.dispatch}


                    />}/>
                    <Route path='/dialogs' component={() => <Dialogs store={props.store}/>}/>
                    {/*<Route path='/news' component={}/>*/}
                    {/*<Route path='/music' component={}/>*/}
                    {/*<Route path='settings' component={}/>*/}
                </div>


            </div>
        </BrowserRouter>
    );
}

export default App;
