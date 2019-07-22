/**
 ****************************************************
 ** 作者：张文晓
 **--------------------------------------------------
 ** 时间：2018-10-18
 **--------------------------------------------------
 ** 描述：系统设置页
 ****************************************************
 */
import React from 'react';
import {View, Text, Button} from 'react-native';

export default class System extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <StatusBar animated={true}  hidden={true}  backgroundColor={'green'}  translucent={true} barStyle={'light-content'}></StatusBar>
                <Text>System</Text>
            </View>);
    }
}