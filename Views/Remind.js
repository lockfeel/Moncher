/**
 ****************************************************
 ** 作者：张文晓
 **--------------------------------------------------
 ** 时间：2018-10-18
 **--------------------------------------------------
 ** 描述：首页推荐类
 ****************************************************
 */
import React from 'react';
import {
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    DeviceEventEmitter,
    FlatList,
    Platform
} from 'react-native';
import Images       from "../Public/Images";
import Blankend     from "../Public/Blankend";
import Requested    from "../Public/Requested";
import Defaults     from "../Public/Defaults";
import RemindStyle  from "../Styles/RemindStyle";
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import FunnyStyle   from "../Styles/FunnyStyle";

export default class Remind extends React.Component {
    /**初始化方法*/
    constructor(props) {
        super(props);
        this.state = {
            isReload    : true,
            isMored     : false,
            lasted      : new Date().getTime(),
            barInit     : false,
            userId      : 346916,
            tagType     : 0,
            tagIndex    : 0,
            pageNum     : 1,
            tags        : Defaults.article,
            result      : []
        };
    }

    componentDidMount() {
        DeviceEventEmitter.addListener('RemindMsg', (param) => {
            this.setState({
                barInit: true
            });
        });
        this.props.navigation.addListener(
            'willFocus',
            payload => {
                StatusBar.setBarStyle('light-content');
                Platform.OS === 'ios' || StatusBar.setBackgroundColor('#d23c3e');
            }
        );
        this.setArticleColumn();
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

    /**渲染界面*/
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={RemindStyle.statusBarX}>
                    <TouchableOpacity activeOpacity={1} onPress={() => {
                        this.props.navigation.navigate('Sign', {})
                    }}>
                        <View style={RemindStyle.statusBarItem1}>
                            <Image source={Images['gold']} style={RemindStyle.iconItem}/>
                            <Text style={RemindStyle.textItem}>签到</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={RemindStyle.statusBarItem2} onPress={() => {
                        this.props.navigation.navigate('Search', {})
                    }}>
                        <Image source={Images['soso']} style={RemindStyle.statusBarItem2Img}/>
                        <Text style={RemindStyle.statusBarItem2Text}>搜你感兴趣的内容</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => {
                        this.props.navigation.navigate('Chats', {})
                    }}>
                        <View style={[RemindStyle.statusBarItem3]}>
                            <Image source={Images['message1']} style={RemindStyle.iconItem}/>
                            <Text style={RemindStyle.textItem}>聊聊</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={RemindStyle.statusBarSoso}>
                    <Image style={RemindStyle.statusBarSosoImg} source={Images['more']}/>
                </View>
                <ScrollableTabView
                    initialPage={
                        this.state.tagIndex
                    }
                    scrollWithoutAnimation={
                        true
                    }
                    tabBarUnderlineStyle={
                        RemindStyle.tabBarLine
                    }
                    onChangeTab={(obj) => {
                        if (this.state.result.hasOwnProperty(obj.i)) return false;
                        this.state.tagType = this.state.tags[obj.i].type;
                        this.state.pageNum = 1;
                        this.state.tagIndex = obj.i;
                        this.setArticleList();
                        this.setState({
                            tagType: this.state.tags[obj.i].type,
                            tagIndex: obj.i,
                            pageNum: 1
                        });
                    }}
                    renderTabBar={
                        () => <ScrollableTabBar
                            style={RemindStyle.statusBarTags}
                            activeTextColor="#d23c3e"
                            inactiveTextColor='#383838'
                            textStyle={{fontSize: 17}}
                            tabStyle={RemindStyle.tabStyle}
                        />
                    }>
                    {this.state.tags.map((x, i) => {
                        return (
                            <View tabLabel={x.title} style={RemindStyle.itemLayout} key={'index' + i}>
                                <FlatList
                                    ref={
                                        (faltList) => {
                                            this.tagFaltList = faltList;
                                        }
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
                                    showsVerticalScrollIndicator={
                                        false
                                    }
                                    ListFooterComponent={
                                        this._footer(this.state.isMored)
                                    }
                                    onEndReachedThreshold={
                                        0.1
                                    }
                                    style={
                                        RemindStyle.articleBox
                                    }
                                    data={
                                        this.state.result[i]
                                    }
                                    keyExtractor={
                                        (item, index) => index.toString()
                                    }
                                    renderItem={
                                        ({item}) => this.renderArticle(item)
                                    }
                                >
                                </FlatList>
                            </View>
                        );
                    })}
                </ScrollableTabView>
            </View>
        );
    }

    /**渲染文章*/
    renderArticle(article) {
        if (article.images.length == 3) {
            return (
                <TouchableOpacity activeOpacity={0.88} onPress={
                    () => { this.props.navigation.navigate('Article', {item: article})}
                } id={article.id}>
                    <View style={RemindStyle.articleItem}>
                        <View style={RemindStyle.articleItemTitle}>
                            <Text style={RemindStyle.articleItemTitleText}>{article.title}</Text>
                        </View>
                        <View style={RemindStyle.articleItemCover}>
                            <Image source={{uri: article.images[0]}}
                                   style={RemindStyle.articleItemCoverImg1}/>
                            <Image source={{uri: article.images[1]}}
                                   style={RemindStyle.articleItemCoverImg1}/>
                            <Image source={{uri: article.images[2]}}
                                   style={RemindStyle.articleItemCoverImg2}/>
                        </View>
                        <View style={RemindStyle.articleItemDesc}>
                            <View style={RemindStyle.articleItemDescL}>
                                <Text style={RemindStyle.articleItemDescText}>{article.user_nickname}</Text>
                                <Text
                                    style={RemindStyle.articleItemDescText}>{article.comment_count > 0 ? article.comment_count + '条评论' : ''}</Text>
                            </View>
                            <View style={RemindStyle.articleItemDescR}>
                                <Image style={RemindStyle.articleItemDescRImg} source={Images['close']}/>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
    }

    /**舒心栏目*/
    refreshTags() {
        let tags = [];
        for (let i = 0; i < this.state.tags.length; i++) {
            tags.push(this.state.tags[i]);
        }
        return tags;
    }

    /**上拉加载*/
    getLoadMore() {
        let lasted = new Date().getTime();
        if (!this.state.isMored && this.state.result.length > 0 && (lasted - this.state.lasted > 500) ) {
            this.state.pageNum = this.state.pageNum + 1;
            this.state.isMored = true;
            this.setArticleList();
        }
    }

    /**下拉刷新*/
    getReload() {
        if (!this.state.isReload) {
            this.setState({
                isReload: true
            }, () => {
                this.state.pageNum = 1;
                this.setArticleList();
            });
        }
    }

    /**设置列表*/
    setArticleColumn() {
        Requested.GetRemindColumn(this.state.userId, (responseData) => {
            this.setState({
                tags: responseData.retData,
                tagType: responseData.retData[0].type,
                isMored: false,
                isReload:false
            });
            this.setArticleList();
        }, () => {
            this.setState({tags: [], isMored: false});
        });
    }

    /**设置文章列表*/
    setArticleList() {
        Requested.GetRemind(this.state.userId, this.state.tagType, (responseData) => {
            if (this.state.pageNum == 1) {
                this.state.result[this.state.tagIndex] = [];
                this.state.result[this.state.tagIndex] = responseData.retData;
            } else {
                this.state.result[this.state.tagIndex] = this.state.result[this.state.tagIndex].concat(responseData.retData);
            }
            this.state.lasted = new  Date().getTime();
            this.setState({
                isMored: false,
                pageNum: this.state.pageNum,
                isReload: false,
                result: this.state.result,
            });
        }, () => {
        });
    }
}