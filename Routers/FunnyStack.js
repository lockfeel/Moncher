/**
 ****************************************************
 ** 作者：张文晓
 **--------------------------------------------------
 ** 时间：2018-10-18
 **--------------------------------------------------
 ** 描述：内涵路由类
 ****************************************************
 */
import {
    createStackNavigator
} from 'react-navigation';

/**引入页面模版*/
import Funny   from "../Views/Funny";
export default FunnyStack = createStackNavigator({
    FunnyStack: {
        screen: Funny,
        navigationOptions: ({navigation}) => ({
            header: null
        }),
    }
});