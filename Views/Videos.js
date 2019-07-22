/**
 ****************************************************
 ** 作者：张文晓
 **--------------------------------------------------
 ** 时间：2018-10-18
 **--------------------------------------------------
 ** 描述：视频详情页
 ****************************************************
 */
import React from 'react';
import {
    View,
    Text,
    Platform,
    Image,
    FlatList,
    StatusBar,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
import Requested       from "../Public/Requested";
import Images            from "../Public/Images";
import VideoStyle       from "../Styles/VideoStyle";
export default class Videos extends React.Component {
    constructor(props) {
        super(props);
        let { item } = this.props.navigation.state.params;
        this.state = {
            video:item,
            rate: 1,
            volume: 1,
            userId:346916,
            muted: false,
            resizeMode: 'cover',
            payload:false,
            duration: 0.0,
            currentTime: 0.0,
            paused: false
        }
        this.props.navigation.addListener(
            'willFocus',
            payload => {
                StatusBar.setBarStyle('light-content');
                Platform.OS === 'ios' ||  StatusBar.setBackgroundColor('#000');
            }
        );
    }
    componentDidMount() {
        Requested.GetVideoDetailed(this.state.userId,this.state.video.id,0,(responseData) => {
            this.setState({
                recommend : responseData.retData.relevant,
            });
        },()=>{
            this.state.recommend = [];
        });
    }
    onLoad = (data) => {
        this.setState({
            duration: data.duration,
            payload:true
        });
    };
    onProgress = (data) => {
        this.setState({currentTime: data.currentTime});
    };
    onEnd = () => {
        this.setState({paused: true}); this.video.seek(0)
    };
    render() {
        return (
            <View style={VideoStyle.main}>
                <View style={VideoStyle.fullScreenBox}></View>
                <Video
                    ref={(ref: Video) => {
                        this.video = ref
                    }}
                    source={{uri:this.state.video.video_url}}
                    style={VideoStyle.fullScreen}
                    rate={this.state.rate}
                    paused={this.state.paused}
                    volume={this.state.volume}
                    muted={this.state.muted}
                    resizeMode={this.state.resizeMode}
                    onLoad={this.onLoad}
                    onProgress={this.onProgress}
                    onEnd={this.onEnd}
                    repeat={false}>
                </Video>
                <Image  source={{uri: this.state.video.cover_pic}}  style={ this.state.payload ? VideoStyle.coverPicHide : VideoStyle.coverPic} />
                <View style={VideoStyle.fullScreenBack}>
                    <TouchableOpacity  style={VideoStyle.TabbarBack1}  activeOpacity={0.88}  onPress={() =>{
                        this.props.navigation.goBack();
                    }}>
                        <Image style={VideoStyle.TabbarImg} source={Images['aleft1']} />
                    </TouchableOpacity>
                    <TouchableOpacity style={VideoStyle.TabbarBack2} activeOpacity={0.88}  onPress={() =>{
                        this.props.navigation.goBack();
                    }}>
                        <Image style={VideoStyle.TabbarImg1} source={Images['more1']} />
                    </TouchableOpacity>
                </View>
                <ScrollView style={VideoStyle.Content}  showsVerticalScrollIndicator = {false}>
                    <View style={VideoStyle.title}>
                        <Text style={VideoStyle.titleTxt}>{this.state.video.title}</Text>
                        <View style={VideoStyle.titleUser}>
                            <View style={VideoStyle.titleUserL}>
                                <Image style={VideoStyle.userImg} source={{uri:this.state.video.user_pic}}/>
                            </View>
                            <View style={VideoStyle.titleUserR}>
                                <Text style={VideoStyle.userName}>{this.state.video.user_nickname}</Text>
                                <Text style={VideoStyle.userTime}> . {this.state.video.create_time}</Text>
                            </View>
                        </View>
                    </View>
                    <FlatList
                        style={VideoStyle.ContentMore}
                        data={this.state.recommend}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => this.renderRemmend(item)}>
                    </FlatList>
                    <View style={VideoStyle.OFF}></View>
                </ScrollView>
            </View>);
    }
    renderRemmend(item) {
        return (
            <TouchableOpacity activeOpacity={0.88} onPress={() => {
                this.setState({
                    video:item,
                    payload:false,
                    recommend:[]
                });
                Requested.GetVideoDetailed(this.state.userId,item.id,0,(responseData) => {
                    this.setState({
                        recommend : responseData.retData.relevant,
                    });
                },()=>{
                    this.state.recommend = [];
                });
            }}>
                <View style={VideoStyle.ContentMoreItem}>
                    <View style={VideoStyle.ContentMoreItemL}>
                        <Text style={VideoStyle.ContentMoreLText}>{item.title}</Text>
                        <Text style={VideoStyle.ContentMoreLTime}>{item.user_nickname} . {item.create_time}</Text>
                    </View>
                    <View style={VideoStyle.ContentMoreItemR}>
                        <Image style={VideoStyle.ContentMoreItemRImg} source={{uri: item.cover_pic}}/>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}