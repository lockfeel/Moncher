/**
 ****************************************************
 ** 作者：张文晓
 **--------------------------------------------------
 ** 时间：2018-10-18
 **--------------------------------------------------
 ** 描述：系统消息类
 ****************************************************
 */
import React from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
    DeviceEventEmitter,
    Platform,
} from 'react-native';
import Images from '../Public/Images'
import MessageStyle from  "../Styles/MessageStyle";
export default class Message extends React.Component {
    componentDidMount() {
        DeviceEventEmitter.addListener('MessageMsg', (param) => {
            this.setState({
                barInit : true
            });
        });
        this.props.navigation.addListener(
            'willFocus',
            payload => {
                StatusBar.setBarStyle('dark-content');
                Platform.OS === 'ios' || StatusBar.setBackgroundColor('#FFFFFF');
            }
        );
    }
    render() {
        return (
            <View style={MessageStyle.mainView}>
                <View style={MessageStyle.messageTitle}><Text style={MessageStyle.messageTitleText}>消息</Text></View>
                <View style={MessageStyle.messageItem}>
                    <View style={[MessageStyle.imageBox,MessageStyle.color1]}><Image source={Images['message1']} style={MessageStyle.imageItem}/></View>
                    <Text style={MessageStyle.textItem}>好友消息</Text>
                    <Image source={Images['right']} style={MessageStyle.rightItem}/>
                </View>
                <View style={MessageStyle.messageItem}>
                    <View style={[MessageStyle.imageBox,MessageStyle.color2]}><Image source={Images['message2']} style={MessageStyle.imageItem}/></View>
                    <Text style={MessageStyle.textItem}>系统通知</Text>
                    <Image source={Images['right']} style={MessageStyle.rightItem}/>
                </View>
                <View style={MessageStyle.messageItem}>
                    <View style={[MessageStyle.imageBox,MessageStyle.color2]}><Image source={Images['message3']} style={MessageStyle.imageItem}/></View>
                    <Text style={MessageStyle.textItem}>新手教程</Text>
                    <Image source={Images['right']} style={MessageStyle.rightItem}/>
                </View>
                <View style={MessageStyle.messageItem}>
                    <View style={[MessageStyle.imageBox,MessageStyle.color2]}><Image source={Images['message4']} style={MessageStyle.imageItem}/></View>
                    <Text style={MessageStyle.textItem}>打开通知</Text>
                    <Image source={Images['right']} style={MessageStyle.rightItem}/>
                </View>
                <View style={MessageStyle.messageItem}>
                    <View style={[MessageStyle.imageBox,MessageStyle.color3]}><Image source={Images['message5']} style={MessageStyle.imageItem}/></View>
                    <Text style={MessageStyle.textItem}>人工客服</Text>
                    <Image source={Images['right']} style={MessageStyle.rightItem}/>
                </View>
            </View>);
    }
}
