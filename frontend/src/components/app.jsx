import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/rout_util';
import { Switch, Link } from 'react-router-dom';
import HomePage from './HomePage';
import NavBarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import CollectionIndexContainer from './collections/collection_index_container';
import ProfilePageContainer from './profile/profile_page_container';
// import Iframe from 'react-iframe'

const App = () => (
    <div id="the-whole-enchilada">
        <div id="left-navbar-wrapper">
            <NavBarContainer/>
            <Switch class="signin-switch">
                {/* <AuthRoute exact path = "/" component = {HomePage}/> */}
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <ProtectedRoute exact path="/collections" component={CollectionIndexContainer} />
                <ProtectedRoute exact path="/profile-page" component={ProfilePageContainer} />
            </Switch>
        </div>
        <div id="main-content-wrapper">
            <iframe src="https://www.sfsu.edu" height="100%" width="100%"></iframe>
        </div>
    </div>
)

export default App;