import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { store } from './redux/helpers';
import Chat from './screens/chat/Chat';
import ClubEdit from './screens/clubs/club-edit/ClubEdit';
import ClubList from './screens/clubs/club-list/ClubList';
import ClubPrompt from './screens/clubs/club-prompt/ClubPrompt';
import MyClub from './screens/clubs/my-club/MyClub';
import RegisterClubFormInfo from './screens/clubs/register-club/RegisterClubFormInfo';
import Games from './screens/Games';
import Login from './screens/Login';
import EditProfile from './screens/profile/EditProfile';
import MyProfile from './screens/profile/MyProfile';
import Profile from './screens/profile/Profile';
import Register from './screens/Register';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PrivateRoute exact path="/profile/edit" component={EditProfile}/>
          <PrivateRoute path="/chat" component={Chat}/>
          <PrivateRoute exact path="/profile/:type" component={Profile}/>
          <PrivateRoute exact path="/profile" component={Profile}/>
          <PrivateRoute exact path="/my-profile" component={MyProfile}/>
          <PrivateRoute exact path="/my-profile/:type" component={MyProfile}/>
          <PrivateRoute path="/games" component={Games}/>
          <PrivateRoute exact path="/clubs" component={ClubList}/>
          <PrivateRoute path="/clubs/register-club" component={RegisterClubFormInfo}/>
          <PrivateRoute exact path="/clubs/:id/prompt" component={ClubPrompt}/>
          <PrivateRoute exact path="/clubs/:id/profile" component={MyClub}/>
          <PrivateRoute exact path="/clubs/:id/edit-profile" component={ClubEdit}/>
          <Route exact path="/" component={Login}/>
          <Route path="/register" component={Register}/>
        </Switch>
      </Router>
    </Provider>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route 
    {...rest}
		render={
      props => localStorage.getItem('user') ? 
      ( <Component {...props} /> ) : 
        (<Redirect	to={{ pathname: "/", state: { from: props.location } }}	/>)
    }
	/>
);

export default App;
