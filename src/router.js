// packages
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
// views
import Home from './Home';
import Main from './Main';
import Login from './Login';
import Profile from './Profile';
import SignUp from './SignUp';
import NotificationsView from './NotificationView';
import Favourites from './Favourites';
import Users from './Users';
import Options from './Options';
import Posts from './Posts';
import AsyncStorageExample from './AsyncStorageExample';
// create the navigators
const Route = createStackNavigator({
  Home: Home ,
  Profile: Profile,
  Login: Login,
  Main: Main,
  SignUp:SignUp,
  NotificationsView:NotificationsView,
  Favourites:Favourites,
  Users:Users,
  Options:Options,
  Posts:Posts,
  AsyncStorageExample:AsyncStorageExample

},
{
    initialRouteName: 'Main'
  }
);

// create and configure drawer parent navigator for main app
const RouterConfig = createAppContainer(Route);
export default RouterConfig;