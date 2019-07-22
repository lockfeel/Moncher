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
import Svideo   from "../Views/Svideo";
export default SvideoStack = createStackNavigator({
    SvideoStack: {
        screen: Svideo,
        navigationOptions: ({navigation}) => ({
            header: null
        }),
    }
});