/**
 ****************************************************
 ** 作者：张文晓
 **--------------------------------------------------
 ** 时间：2018-10-18
 **--------------------------------------------------
 ** 描述：消息路由类
 ****************************************************
 */
import {createStackNavigator} from 'react-navigation';

/**引入页面模版*/
import Message from "../Views/Message";

export default  MessageStack = createStackNavigator({
    MessageStack: {
        screen: Message,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    }
});