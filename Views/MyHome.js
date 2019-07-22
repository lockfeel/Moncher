/**
 ****************************************************
 ** 作者：张文晓
 **--------------------------------------------------
 ** 时间：2018-10-18
 **--------------------------------------------------
 ** 描述：个人中心页
 ****************************************************
 */
import React from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    StatusBar,
    Platform,
    DeviceEventEmitter
} from 'react-native';
import Images from "../Public/Images";
import MyHomeStyle from  "../Styles/MyHomeStyle";
export default class MyHome extends React.Component {
    componentDidMount() {
        DeviceEventEmitter.addListener('MyHomeMsg', (param) => {
            this.setState({
                barInit : true
            });
        });
        this.props.navigation.addListener(
            'willFocus',
            payload => {
                StatusBar.setBarStyle('light-content');
                Platform.OS === 'ios' || StatusBar.setBackgroundColor('#d23c3e');
            }
        );
    }
    render() {
        return (
            <View style={MyHomeStyle.myHomeView}>
                <View style={MyHomeStyle.statusBar}>
                    <View style={MyHomeStyle.statusBarItem1}><Image source={Images['message5']} style={MyHomeStyle.iconItem}/></View>
                    <View style={MyHomeStyle.statusBarItem2}><Text style={MyHomeStyle.statusBarItemTitle}>今日聚点</Text></View>
                    <View style={[MyHomeStyle.statusBarItem3]}><Image source={Images['reset']} style={MyHomeStyle.iconItem}/></View>
                </View>
                <ScrollView>
                    <View style={MyHomeStyle.headerItem}>
                        <View style={MyHomeStyle.userIcon}>
                            <Image source={Images['defuser']} style={MyHomeStyle.userIconImg}/>
                        </View>
                        <View style={MyHomeStyle.userInfo}>
                            <Text style={MyHomeStyle.userInfoName}>张紊晓</Text>
                            <Text style={MyHomeStyle.userInfoCode}>邀请码V346916</Text>
                        </View>
                        <View style={MyHomeStyle.userSign}>
                            <Image style={MyHomeStyle.userSignImg} source={Images['sign']}/>
                            <Text style={MyHomeStyle.userSignText}>立即签到</Text>
                        </View>
                    </View>
                    <View style={MyHomeStyle.walletItem}>
                        <View style={MyHomeStyle.walletItemView}>
                            <Text style={MyHomeStyle.walletItemNum}>1.0</Text>
                            <Text style={MyHomeStyle.walletItemText}>今日金币</Text>
                        </View>
                        <View style={MyHomeStyle.walletItemView}>
                            <Text style={MyHomeStyle.walletItemNum}>99.99</Text>
                            <Text style={MyHomeStyle.walletItemText}>累计零钱</Text>
                        </View>
                        <View style={MyHomeStyle.walletItemView}>
                            <Text style={MyHomeStyle.walletItemNum}>99.99</Text>
                            <Text style={MyHomeStyle.walletItemText}>零钱余额</Text>
                        </View>
                        <View style={MyHomeStyle.walletItemView}>
                            <View style={MyHomeStyle.walletItemImgBox}><Image style={MyHomeStyle.walletItemImg} source={Images['wallet']}/></View>
                            <Text style={MyHomeStyle.walletItemText}>提现兑换</Text>
                        </View>
                    </View>
                    <View style={MyHomeStyle.friendItem}>
                        <View style={MyHomeStyle.friendItemBox}><Text style={MyHomeStyle.friendItemBoxText1}>好友数量：5</Text></View>
                        <View style={MyHomeStyle.friendItemBox}>
                            <Text style={MyHomeStyle.friendItemBoxText2}>视频教程</Text>
                        </View>
                    </View>
                    <View style={MyHomeStyle.apprenticeItem}>
                        <View style={MyHomeStyle.apprenticeItemTo}>
                            <View style={MyHomeStyle.apprenticeItemToL}>
                                <Image style={MyHomeStyle.apprenticeItemToLImg} source={Images['redbox']}/>
                            </View>
                            <View style={MyHomeStyle.apprenticeItemToC}>
                                <Text style={MyHomeStyle.apprenticeItemToCText}>邀请收徒,赚<Text style={MyHomeStyle.apprenticeItemToCSpan}>60</Text>元！</Text>
                            </View>
                            <View style={MyHomeStyle.apprenticeItemToR}>
                                <Image style={MyHomeStyle.apprenticeItemToRImg} source={Images['right']}/>
                            </View>
                        </View>
                        <View style={MyHomeStyle.apprenticeItemBo}>
                            <View style={MyHomeStyle.apprenticeItemBox}>
                                <View style={MyHomeStyle.apprenticeItemBoBox}><Image style={MyHomeStyle.apprenticeItemBoImg} source={Images['circle']}/></View>
                                <View style={MyHomeStyle.apprenticeItemBoBox}><Text style={MyHomeStyle.apprenticeItemBoText}>朋友圈</Text></View>
                            </View>
                            <View style={MyHomeStyle.apprenticeItemBox}>
                                <View style={MyHomeStyle.apprenticeItemBoBox}><Image style={MyHomeStyle.apprenticeItemBoImg} source={Images['wechat']}/></View>
                                <View style={MyHomeStyle.apprenticeItemBoBox}><Text style={MyHomeStyle.apprenticeItemBoText}>微信</Text></View>
                            </View>
                            <View style={MyHomeStyle.apprenticeItemBox}>
                                <View style={MyHomeStyle.apprenticeItemBoBox}><Image style={MyHomeStyle.apprenticeItemBoImg} source={Images['QQ']}/></View>
                                <View style={MyHomeStyle.apprenticeItemBoBox}><Text style={MyHomeStyle.apprenticeItemBoText}>QQ</Text></View>
                            </View>
                            <View style={MyHomeStyle.apprenticeItemBox}>
                                <View style={MyHomeStyle.apprenticeItemBoBox}><Image style={MyHomeStyle.apprenticeItemBoImg} source={Images['qrcode']}/></View>
                                <View style={MyHomeStyle.apprenticeItemBoBox}><Text style={MyHomeStyle.apprenticeItemBoText}>二维码</Text></View>
                            </View>
                        </View>
                    </View>
                    <View style={MyHomeStyle.taskList}>
                        <View style={MyHomeStyle.taskListNew}>
                            <View style={MyHomeStyle.taskListTitle}>
                                <Image style={MyHomeStyle.taskListTitleDot} source={Images['dot']}/>
                                <Text style={MyHomeStyle.taskListTitleText}>新手任务</Text>
                            </View>
                            <View style={MyHomeStyle.taskListBox}>
                                <View style={MyHomeStyle.taskListItem}>
                                    <View style={MyHomeStyle.taskListItemL}>
                                        <Image style={MyHomeStyle.taskListItemLImg} source={Images['task']}/>
                                        <Text  style={MyHomeStyle.taskListItemLText}>首次邀请好友</Text>
                                    </View>
                                    <View style={MyHomeStyle.taskListItemR}>
                                        <Text  style={MyHomeStyle.taskListItemRText}>+1000</Text>
                                        <Image style={MyHomeStyle.taskListItemRImg1} source={Images['gold']}/>
                                        <Image style={MyHomeStyle.taskListItemRImg2} source={Images['right']}/>
                                    </View>
                                </View>
                                <View style={MyHomeStyle.taskListItem}>
                                    <View style={MyHomeStyle.taskListItemL}>
                                        <Image style={MyHomeStyle.taskListItemLImg} source={Images['task']}/>
                                        <Text  style={MyHomeStyle.taskListItemLText}>新手阅读</Text>
                                    </View>
                                    <View style={MyHomeStyle.taskListItemR}>
                                        <Text  style={MyHomeStyle.taskListItemRText}>+1000</Text>
                                        <Image style={MyHomeStyle.taskListItemRImg1} source={Images['gold']}/>
                                        <Image style={MyHomeStyle.taskListItemRImg2} source={Images['right']}/>
                                    </View>
                                </View>
                                <View style={MyHomeStyle.taskListItem}>
                                    <View style={MyHomeStyle.taskListItemL}>
                                        <Image style={MyHomeStyle.taskListItemLImg} source={Images['task']}/>
                                        <Text  style={MyHomeStyle.taskListItemLText}>绑定微信</Text>
                                    </View>
                                    <View style={MyHomeStyle.taskListItemR}>
                                        <Text  style={MyHomeStyle.taskListItemRText}>+1000</Text>
                                        <Image style={MyHomeStyle.taskListItemRImg1} source={Images['gold']}/>
                                        <Image style={MyHomeStyle.taskListItemRImg2} source={Images['right']}/>
                                    </View>
                                </View>
                                <View style={MyHomeStyle.taskListItem}>
                                    <View style={MyHomeStyle.taskListItemL}>
                                        <Image style={MyHomeStyle.taskListItemLImg} source={Images['task']}/>
                                        <Text  style={MyHomeStyle.taskListItemLText}>绑定手机</Text>
                                    </View>
                                    <View style={MyHomeStyle.taskListItemR}>
                                        <Text  style={MyHomeStyle.taskListItemRText}>+1000</Text>
                                        <Image style={MyHomeStyle.taskListItemRImg1} source={Images['gold']}/>
                                        <Image style={MyHomeStyle.taskListItemRImg2} source={Images['right']}/>
                                    </View>
                                </View>
                                <View style={MyHomeStyle.taskListItem}>
                                    <View style={MyHomeStyle.taskListItemL}>
                                        <Image style={MyHomeStyle.taskListItemLImg} source={Images['task']}/>
                                        <Text  style={MyHomeStyle.taskListItemLText}>开启提现特权</Text>
                                    </View>
                                    <View style={MyHomeStyle.taskListItemR}>
                                        <Text  style={MyHomeStyle.taskListItemRText}>+1000</Text>
                                        <Image style={MyHomeStyle.taskListItemRImg1} source={Images['gold']}/>
                                        <Image style={MyHomeStyle.taskListItemRImg2} source={Images['right']}/>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={MyHomeStyle.taskListNew}>
                            <View style={MyHomeStyle.taskListTitle}>
                                <Image style={MyHomeStyle.taskListTitleDot} source={Images['dot']}/>
                                <Text style={MyHomeStyle.taskListTitleText}>日常任务</Text>
                            </View>
                            <View style={MyHomeStyle.taskListBox}>
                                <View style={MyHomeStyle.taskListItem}>
                                    <View style={MyHomeStyle.taskListItemL}>
                                        <Image style={MyHomeStyle.taskListItemLImg} source={Images['task']}/>
                                        <Text  style={MyHomeStyle.taskListItemLText}>首次邀请好友</Text>
                                    </View>
                                    <View style={MyHomeStyle.taskListItemR}>
                                        <Text  style={MyHomeStyle.taskListItemRText}>+1000</Text>
                                        <Image style={MyHomeStyle.taskListItemRImg1} source={Images['gold']}/>
                                        <Image style={MyHomeStyle.taskListItemRImg2} source={Images['right']}/>
                                    </View>
                                </View>
                                <View style={MyHomeStyle.taskListItem}>
                                    <View style={MyHomeStyle.taskListItemL}>
                                        <Image style={MyHomeStyle.taskListItemLImg} source={Images['task']}/>
                                        <Text  style={MyHomeStyle.taskListItemLText}>新手阅读</Text>
                                    </View>
                                    <View style={MyHomeStyle.taskListItemR}>
                                        <Text  style={MyHomeStyle.taskListItemRText}>+1000</Text>
                                        <Image style={MyHomeStyle.taskListItemRImg1} source={Images['gold']}/>
                                        <Image style={MyHomeStyle.taskListItemRImg2} source={Images['right']}/>
                                    </View>
                                </View>
                                <View style={MyHomeStyle.taskListItem}>
                                    <View style={MyHomeStyle.taskListItemL}>
                                        <Image style={MyHomeStyle.taskListItemLImg} source={Images['task']}/>
                                        <Text  style={MyHomeStyle.taskListItemLText}>绑定微信</Text>
                                    </View>
                                    <View style={MyHomeStyle.taskListItemR}>
                                        <Text  style={MyHomeStyle.taskListItemRText}>+1000</Text>
                                        <Image style={MyHomeStyle.taskListItemRImg1} source={Images['gold']}/>
                                        <Image style={MyHomeStyle.taskListItemRImg2} source={Images['right']}/>
                                    </View>
                                </View>
                                <View style={MyHomeStyle.taskListItem}>
                                    <View style={MyHomeStyle.taskListItemL}>
                                        <Image style={MyHomeStyle.taskListItemLImg} source={Images['task']}/>
                                        <Text  style={MyHomeStyle.taskListItemLText}>绑定手机</Text>
                                    </View>
                                    <View style={MyHomeStyle.taskListItemR}>
                                        <Text  style={MyHomeStyle.taskListItemRText}>+1000</Text>
                                        <Image style={MyHomeStyle.taskListItemRImg1} source={Images['gold']}/>
                                        <Image style={MyHomeStyle.taskListItemRImg2} source={Images['right']}/>
                                    </View>
                                </View>
                                <View style={MyHomeStyle.taskListItem}>
                                    <View style={MyHomeStyle.taskListItemL}>
                                        <Image style={MyHomeStyle.taskListItemLImg} source={Images['task']}/>
                                        <Text  style={MyHomeStyle.taskListItemLText}>开启提现特权</Text>
                                    </View>
                                    <View style={MyHomeStyle.taskListItemR}>
                                        <Text  style={MyHomeStyle.taskListItemRText}>+1000</Text>
                                        <Image style={MyHomeStyle.taskListItemRImg1} source={Images['gold']}/>
                                        <Image style={MyHomeStyle.taskListItemRImg2} source={Images['right']}/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}