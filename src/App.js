import './App.css';
import HeaderContainer from './components/Header/headerContainer';
import Nav from './components/NavBar/navbar';
import ProfileContainer from './components/Profile/profileContainer';
import DialogsContainer from './components/Dialogs/dialogsContainer';
import News from './components/News/news';
import Music from './components/Music/music';
import Settings from './components/Settings/settings';
import Login from './components/Login/login';
import FriendsContainer from './components/Friends/friendsContainer';
import UsersContainer from './components/Users/UsersContainer';
import {Route} from "react-router-dom";
import React from 'react';
import {connect} from "react-redux";
import {initialazeApp} from "./redux/appReducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Preloader from "./components/common/preloader/preloader";


class App extends React.PureComponent {
    componentDidMount() {
        this.props.initialazeApp()
    }

    render() {
        if (!this.props.initialazed){
            return <Preloader />
        }
        return (
            <div className="App">
                <HeaderContainer/>
                <Nav/>
                <div className="App-content">
                    <Route path="/login" render={() => <Login/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/friends" render={() => <FriendsContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialazed: state.app.initialazed
})
export default compose (
    withRouter,
    connect(mapStateToProps, {initialazeApp})
)(App);
