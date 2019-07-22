/**
 ****************************************************
 ** 作者：张文晓
 **--------------------------------------------------
 ** 时间：2018-10-18
 **--------------------------------------------------
 ** 描述：个人注册类
 ****************************************************
 */
import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import ScrollableTabView,{ ScrollableTabBar } from 'react-native-scrollable-tab-view';
export default class Sign extends React.Component {
    render() {
        return (
            <ScrollableTabView
                initialPage={
                    0
                }
                scrollWithoutAnimation={
                    true
                }
                tabBarUnderlineStyle={
                    styles.tabBarLine
                }
                renderTabBar={
                    ()=> <ScrollableTabBar
                            activeTextColor="#fff"
                            backgroundColor="#ce3d3a"
                            inactiveTextColor='rgba(255,255,255, .7)'
                            textStyle={{fontSize: 15}}
                            tabStyle={styles.tabStyle}
                        />
                }
            >
                <View tabLabel='推荐'     style={styles.itemLayout}><Text>推荐板块</Text></View>
                <View tabLabel='热门'     style={styles.itemLayout}><Text>头条号板块</Text></View>
                <View tabLabel='视频'     style={styles.itemLayout}><Text>头条号板块</Text></View>
                <View tabLabel='重庆'     style={styles.itemLayout}><Text>头条号板块</Text></View>
                <View tabLabel='社会'     style={styles.itemLayout}><Text>头条号板块</Text></View>
                <View tabLabel='娱乐'     style={styles.itemLayout}><Text>头条号板块</Text></View>
                <View tabLabel='问答'     style={styles.itemLayout}><Text>头条号板块</Text></View>
                <View tabLabel='图片'     style={styles.itemLayout}><Text>头条号板块</Text></View>
                <View tabLabel='科技'     style={styles.itemLayout}><Text>头条号板块</Text></View>
                <View tabLabel='汽车'     style={styles.itemLayout}><Text>头条号板块</Text></View>
                <View tabLabel='体育'     style={styles.itemLayout}><Text>头条号板块</Text></View>
                <View tabLabel='财经'     style={styles.itemLayout}><Text>头条号板块</Text></View>
                <View tabLabel='军事'     style={styles.itemLayout}><Text>头条号板块</Text></View>
                <View tabLabel='国际'     style={styles.itemLayout}><Text>头条号板块</Text></View>
                <View tabLabel='段子'     style={styles.itemLayout}><Text>头条号板块</Text></View>
                <View tabLabel='趣图'     style={styles.itemLayout}><Text>头条号板块</Text></View>
                <View tabLabel='美女'     style={styles.itemLayout}><Text>头条号板块</Text></View>
                <View tabLabel='健康'     style={styles.itemLayout}><Text>头条号板块</Text></View>
                <View tabLabel='正能量'    style={styles.itemLayout}><Text>头条号板块</Text></View>
                <View tabLabel='特卖'     style={styles.itemLayout}><Text>头条号板块</Text></View>
                <View tabLabel='房产'     style={styles.itemLayout}><Text>头条号板块</Text></View>
            </ScrollableTabView>
        );
    }
}
const styles = StyleSheet.create({
    tabBarLine: {
        height: 2,
        backgroundColor: "#fff"
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    itemLayout: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    tabStyle: {
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 0
    }
});
