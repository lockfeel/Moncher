/**
 ****************************************************
 ** 作者：张文晓
 **--------------------------------------------------
 ** 时间：2018-10-18
 **--------------------------------------------------
 ** 描述：推荐路由类
 ****************************************************
 */
import {createStackNavigator} from 'react-navigation';
/**引入页面模版*/
import Remind  from "../Views/Remind";
export default  RemindStack = createStackNavigator({
    RemindStack: {
        screen: Remind,
        navigationOptions: ({navigation}) => ({
            header: null
        }),
    }
});

