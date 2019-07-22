/**
 ****************************************************
 ** 作者：张文晓
 **--------------------------------------------------
 ** 时间：2018-10-18
 **--------------------------------------------------
 ** 描述：个人主页路由类
 ****************************************************
 */
import {createStackNavigator} from 'react-navigation';

/**引入页面模版*/
import MyHome  from "../Views/MyHome";
export default  MyHomeStack = createStackNavigator({
    MyHomeStack: {
        screen: MyHome,
        navigationOptions: ({navigation}) => ({
            header: null
        }),
    }
});