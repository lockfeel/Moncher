/**
 ****************************************************
 ** 作者：张文晓
 **--------------------------------------------------
 ** 时间：2017-09-09
 **--------------------------------------------------
 ** 描述：底部导航文件
 ****************************************************
 */
import React from 'react';
import { Image,DeviceEventEmitter} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
/**引入页面模版*/
import FunnyStack     from "../Routers/FunnyStack";
import MessageStack   from "../Routers/MessageStack";
import RemindStack    from "../Routers/RemindStack";
import MyHomeStack    from "../Routers/MyHomeStack";
import SvideoStack    from "../Routers/SvideoStack";
import Images         from "./Images";
const BottomBar = createBottomTabNavigator({
        A: {
            screen: RemindStack,
            navigationOptions: {
                tabBarLabel: "推荐",
                tabBarIcon: ({focused, tintColor}) => (
                    <Image
                        source={Images['remindx']}
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: tintColor
                        }}
                    />
                ),
            },
        },
        B: {
            screen: FunnyStack,
            navigationOptions: {
                tabBarLabel: "视频",
                tabBarIcon: ({focused, tintColor}) => (
                    <Image
                        source={Images['funnyx']}
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: tintColor
                        }}
                    />
                ),
            },
        },
        C: {
            screen: SvideoStack,
            navigationOptions: {
                tabBarLabel: "小视频",
                tabBarIcon: ({focused, tintColor}) => (
                    <Image
                        source={Images['svideo']}
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: tintColor
                        }}
                    />
                ),
            },
        },
        D: {
            screen: MessageStack,
            navigationOptions: {
                tabBarLabel: "消息",
                tabBarIcon: ({focused, tintColor}) => (
                    <Image
                        source={Images['messagex']}
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: tintColor
                        }}
                    />
                ),
            },
        },
        E: {
            screen: MyHomeStack,
            navigationOptions: {
                tabBarLabel: "我的",
                tabBarIcon: ({focused, tintColor}) => (
                    <Image
                        source={Images['homex']}
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: tintColor
                        }}
                    />
                ),
            }
        }
    }, {
        tabBarOptions: {
            activeTintColor: '#d23c3e',
            inactiveTintColor: '#424242',
            showIcon: true,
            showLabel: true,
            upperCaseLabel: false,
            pressColor: '#823453',
            pressOpacity: 0.8,
            style: {
                backgroundColor: '#f1f1f1',
                paddingBottom: 0.5,
                borderTopWidth: 0.5,
                borderTopColor: '#ccc',
            },
            labelStyle: {
                fontSize: 12,
                marginLeft: 2,
                marginTop: -2
            },
            //android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
            indicatorStyle: {
                height: 0
            },
        },
        animationEnabled: false,
        swipeEnabled: false,
    }
);

export default BottomBar;