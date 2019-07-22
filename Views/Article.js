/**
 ****************************************************
 ** 作者：张文晓
 **--------------------------------------------------
 ** 时间：2017-10-17
 **--------------------------------------------------
 ** 描述：文章详情页
 ****************************************************
 */
import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    FlatList,
    TextInput,
    Platform,
    DeviceEventEmitter,
    Keyboard
} from 'react-native';
import Images           from "../Public/Images";
import Requested        from "../Public/Requested";
import ArticleStyle     from "../Styles/ArticleStyle";
import System           from "../Public/System";
let  {
    width,
    height
} = Dimensions.get("window");
let  x = (height/width).toFixed(4);
let  z = Platform.OS === 'ios' ? (x > 2 ? 17 : 0) : StatusBar.currentHeight;

export default class Article extends React.Component {
    constructor(props) {
        super(props);
        let { item } = this.props.navigation.state.params;
        this.state = {
            article:item,
            userId:1,
            pageNum:1,
            images:[],
            text:'',
            pageSize:100,
            keyposition:height - (48 + 0)
        };
        // keyboardWillShow：软键盘将要显示
        // keyboardDidShow：软键盘显示完毕
        // keyboardWillHide：软键盘将要收起
        // keyboardDidHide：软键盘收起完毕
        // keyboardWillChangeFrame：软件盘的 frame 将要改变
        // keyboardDidChangeFrame：软件盘的 frame 改变完毕
        Keyboard.addListener('keyboardDidShow', (event) => {
            this.setState({
                keyposition : height - (event.endCoordinates.height + 48 + z)
            })
        });
        Keyboard.addListener('keyboardDidHide', (event) => {
            this.setState({
                keyposition : height - (48 + 0)
            })
        });
        this.props.navigation.addListener(
            'willFocus',
            payload => {
                StatusBar.setBarStyle('dark-content');
                Platform.OS === 'ios' || StatusBar.setBackgroundColor('#FFFFFF');
            }
        );
    }
    /**初始化方法*/
    componentDidMount() {
        this.refreshArticle(
            this.state.userId,
            this.state.article,
            this.state.pageNum,
            this.state.pageSize
        );
    }
    /**渲染整个视图*/
    render() {
        return (
            <View style={ArticleStyle.Article}>
                <View style={ArticleStyle.Tabbar}>
                    <TouchableOpacity style={ArticleStyle.TabbarL} onPress={() =>{
                        DeviceEventEmitter.emit('RemindMsg', {
                            id : 0
                        });
                        this.props.navigation.goBack();
                    }}>
                        <Image style={ArticleStyle.TabbarImg} source={Images['aleft3']} />
                    </TouchableOpacity>
                    <View style={ArticleStyle.TabbarC}>
                        <Image style={ArticleStyle.UserImg} source={{uri:this.state.article.user_pic}}/>
                        <Text style={ArticleStyle.UserName}>{this.state.article.user_nickname}</Text>
                    </View>
                    <TouchableOpacity style={ArticleStyle.TabbarR}>
                        <Image style={ArticleStyle.TabbarImg1} source={Images['more3']}/>
                    </TouchableOpacity>
                </View>
                <ScrollView style={ArticleStyle.Content} showsVerticalScrollIndicator = {false}>
                    <View style={ArticleStyle.ContentTitle} >
                        <Text style={ArticleStyle.ContentTitleText}>{this.state.article.title}</Text>
                    </View>
                    <View style={ArticleStyle.ContentUser}>
                        <Text style={ArticleStyle.ContentUserText}>{this.state.article.user_nickname}</Text>
                        <Text style={ArticleStyle.ContentUserText}>{this.state.article.create_time}</Text>
                    </View>
                    <FlatList
                        style={
                            ArticleStyle.ContentBody
                        }
                        data={
                            this.state.spend
                        }
                        keyExtractor={
                            (item, index) => index.toString()
                        }
                        renderItem={
                            ({item}) => this.renderSpend(item)
                        }
                    >
                    </FlatList>
                    <FlatList
                        style={
                            ArticleStyle.ContentMore
                        }
                        data={
                            this.state.recommend
                        }
                        keyExtractor={
                            (item, index) => index.toString()
                        }
                        renderItem={
                            ({item}) => this.renderRemmend(item)
                        }
                    >
                    </FlatList>
                    <View style={ArticleStyle.ContentComment}>
                    </View>
                    <View style={ArticleStyle.OFF}></View>
                </ScrollView>
            </View>);
    }
    /**渲染段落*/
    renderSpend(spend){
        if(spend.type == 1){
            return (
                <Text style={ArticleStyle.ContentBodyText}>{spend.html}</Text>
            )
        }else if(spend.type == 2){
           return (
               <Image style={[ArticleStyle.ContentBodyImg,{
                   width:System.width - 24,
                   height:(System.width - 24)/16 * 10 }]
               } source={{uri:spend.html}} resizeMode="cover"/>
           )
        }
    }
    /**渲染推荐文章*/
    renderRemmend(article) {
        return (
            <TouchableOpacity activeOpacity={0.88} onPress={ () => {
                this.refreshArticle(
                    this.state.userId,
                    article,
                    this.state.pageNum,
                    this.state.pageSize
                );}
            }>
                <View style={ArticleStyle.ContentMoreItem}>
                    <View style={ArticleStyle.ContentMoreItemL}>
                        <Text style={ArticleStyle.ContentMoreLText}>{article.title}</Text>
                        <Text style={ArticleStyle.ContentMoreLTime}>{article.user_nickname} . {article.create_time}</Text>
                    </View>
                    <View style={ArticleStyle.ContentMoreItemR}>
                        <Image style={ArticleStyle.ContentMoreItemRImg} source={{uri: article.cover_pic}} resizeMode="cover"/>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    /**获取整个数据*/
    refreshArticle(userId,article,pageNum,pageSize) {
            this.setState({
                article : article,
                recommend:[],
                spend:[]
            });
            Requested.GetArticlePend(userId,article.id,pageNum,pageSize,(responseData)=>{
                this.setState({
                    spend : responseData.data,
                });
            },()=>{
                this.state.spend = [];
            });
            Requested.GetArticleDetailed(userId,article.id,0,(responseData) => {
                this.setState({
                    recommend : responseData.data.relevant,
                });
            },()=>{
                this.state.recommend = [];
            });
    }
}
