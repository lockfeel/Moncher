/**
 ****************************************************
 ** 作者：张文晓
 **--------------------------------------------------
 ** 时间：2018-10-18
 **--------------------------------------------------
 ** 描述：项目路由设置类
 ****************************************************
 */
import {createStackNavigator} from 'react-navigation';

/**引入页面模版*/
import Article          from "../Views/Article";
import Chats            from "../Views/Chats";
import Friend           from "../Views/Friend";
import Interest         from "../Views/Interest";
import Introduce        from "../Views/Introduce";
import Login            from "../Views/Login";
import Register         from "../Views/Register";
import Sign             from "../Views/Sign";
import System           from "../Views/System";
import Videos           from "../Views/Videos";
import Wallet           from "../Views/Wallet";
import Search           from "../Views/Search";
import BottomBar        from "./BottomBar";

/**注册路由🌲*/
export default  Routers = createStackNavigator({
    Main : {
        screen: BottomBar,
        navigationOptions: ({navigation}) => ({
            header: null
        }),
    },
    Article: {
        screen: Article,
        navigationOptions: ({navigation}) => ({
            header: null
        }),
    },
    Chats: {
        screen: Chats,
        navigationOptions: ({navigation}) => ({
            header: null
        }),
    },
    Friend: {
        screen: Friend,
        navigationOptions: ({navigation}) => ({
            header: null
        }),
    },
    Interest: {
        screen: Interest,
        navigationOptions: ({navigation}) => ({
            header: null
        }),
    },
    Introduce: {
        screen: Introduce,
        navigationOptions: ({navigation}) => ({
            header: null
        }),
    },
    Login: {
        screen: Login,
        navigationOptions: ({navigation}) => ({
            header: null
        }),
    },
    Register: {
        screen: Register,
        navigationOptions: ({navigation}) => ({
            header: null
        }),
    },
    Sign: {
        screen: Sign,
        navigationOptions: ({navigation}) => ({
            header: null
        }),
    },
    System: {
        screen: System,
        navigationOptions: ({navigation}) => ({
            header: null
        }),
    },
    Videos: {
        screen: Videos,
        navigationOptions: ({navigation}) => ({
            header: null
        }),
    },
    Wallet: {
        screen: Wallet,
        navigationOptions: ({navigation}) => ({
            header: null
        }),
    },
    Search: {
        screen: Search,
        navigationOptions: ({navigation}) => ({
            header: null
        }),
    }
});
