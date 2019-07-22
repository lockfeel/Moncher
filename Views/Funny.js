/**
 ****************************************************
 ** 作者：张文晓
 **--------------------------------------------------
 ** 时间：2018-10-18
 **--------------------------------------------------
 ** 描述：内涵视频类
 ****************************************************
 */
import React from 'react';
import {
    View,
    Text,
    Image,
    Platform,
    TouchableOpacity,
    DeviceEventEmitter,
    FlatList,
    StatusBar
} from 'react-native';
import Images           from '../Public/Images';
import Blankend         from "../Public/Blankend";
import Requested        from "../Public/Requested";
import FunnyStyle       from "../Styles/FunnyStyle";
export default class Funny extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReload    : false,
            isMorend    : false,
            barInit     : false,
            userId      : 346916,
            pageNum     : 1,
            tagType     : 43,
            tags        : null,
            result      : []
        };
    }
    componentDidMount() {
        DeviceEventEmitter.addListener('FunnyMsg', (param) => {
            alert('FuunyMsg');
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
        Requested.GetVideoColumn(this.state.userId,(responseData)=>{
            this.setState({
                tags : responseData.retData,
            });
        },()=>{
            this.state.result = [];
        });
        this.setVideoList();
    }

    setVideoList(){
        Requested.GetVideo(this.state.userId,this.state.tagType,(responseData)=>{
            this.setState({
                isMorend : false,
                isReload : false,
                result : this.state.pageNum == 1 ? responseData.retData : this.state.result.concat(responseData.retData),
            });
        },()=>{
            this.state.result = [];
        });
    }
    _footer (is) {
        if(is){
            return (
                <View style={{fontSize: 14, alignSelf: 'center',height:40,justifyContent:"center"}}>
                    <Image style={FunnyStyle.statusBarSosoImg1} source={Images['loading']}/>
                </View>
            )
        }else{
            return (
                <View></View>
            )
        }
    }

    render() {
        return (
            <View style={FunnyStyle.main}>
                <View style={FunnyStyle.statusBar}>
                    <FlatList
                        style={
                            FunnyStyle.statusBarTags
                        }
                        horizontal={
                            true
                        }
                        showsHorizontalScrollIndicator={
                            false
                        }
                        data={
                            this.state.tags
                        }
                        keyExtractor={
                            (item, index) => index.toString()
                        }
                        renderItem={
                            ({item}) => this.renderColumn(item)
                        }>
                    </FlatList>
                    <View style={FunnyStyle.statusBarSoso}>
                        <Image style={FunnyStyle.statusBarSosoImg} source={Images['soso']}/>
                    </View>
                </View>
                <FlatList
                    style ={
                        FunnyStyle.videoBox
                    }
                    data  ={
                        this.state.result
                    }
                    showsVerticalScrollIndicator = {
                        false
                    }
                    onEndReachedThreshold={
                        0.01
                    }
                    ListFooterComponent={
                        this._footer(this.state.isMorend)
                    }
                    ListEmptyComponent={
                        <Blankend/>
                    }
                    onRefresh={
                        () => this.getReload()
                    }
                    refreshing={
                        this.state.isReload
                    }
                    onEndReached={
                        () => this.getLoadMore()
                    }
                    keyExtractor={
                        (item, index) => index.toString()
                    }
                    renderItem={
                        ({item}) => this.renderVideo(item)
                    }>
                </FlatList>
            </View>
        );
    }
    renderColumn(tags){
        return(
            <Text style={[FunnyStyle.statusBarTagItem,this.state.tagType == tags.type ? FunnyStyle.action  : FunnyStyle.close]} onPress={() => {
                this.state.tagType = tags.type;
                this.setState({
                    tags: this.refreshTags()
                });
                this.getReload();
            }}>{tags.title}</Text>
        );
    }

    refreshTags(){
        let tags = [];
        for(let i = 0; i<this.state.tags.length;i++){
            tags.push(this.state.tags[i]);
        }
        return tags;
    }

    renderVideo(video) {
        return (
            <TouchableOpacity activeOpacity={0.88} onPress={() => {
                this.props.navigation.navigate('Videos',{ item : video})
            }} id={video.id}>
                <View style={FunnyStyle.videoItem}>
                    <View style={FunnyStyle.videoItemT}>
                        <Image
                            source={{uri:video.cover_pic}}
                            style={FunnyStyle.videoItemTImg}/>
                        <View style={FunnyStyle.videoItemTitle}>
                            <Image source={Images['shawn']} style={FunnyStyle.videoItemTitleImg}/>
                            <Text style={FunnyStyle.videoItemTitleText}>{video.title}</Text>
                        </View>
                        <View style={FunnyStyle.videoItemPlay}>
                            <Image source={Images['playx']} style={FunnyStyle.videoItemPlayImage}/>
                        </View>
                    </View>
                    <View style={FunnyStyle.videoItemB}>
                        <View style={FunnyStyle.videoItemBL}>
                            <Image source={{uri:video.user_pic}} style={FunnyStyle.videoItemBLImg}/>
                            <Text style={FunnyStyle.videoItemBLName}>{video.user_nickname}</Text>
                        </View>
                        <View style={FunnyStyle.videoItemBR}>
                            <Image source={Images['comment']} style={FunnyStyle.videoItemBRImg}/>
                            <Image source={Images['share']}   style={FunnyStyle.videoItemBRImg}/>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    getLoadMore(){
        if (!this.state.isMorend && this.state.result.length > 0){
            this.state.pageNum = this.state.pageNum + 1;
            this.setState({
                isMorend : true
            });
            this.setVideoList();
        }
    }

    getReload(){
        if(!this.state.isReload){
            this.state.pageNum = 1;
            this.setVideoList();
        }
    }
}