import {
    StyleSheet
} from "react-native";

import   System   from "../Public/System.js";
export  default ArticleStyle = StyleSheet.create({
    Tabbar:{
        height:42 + System.y,
        width:System.width,
        alignItems: 'flex-end',
        flexDirection:"row",
        backgroundColor:"#FFF",
        borderBottomWidth:1,
        borderBottomColor:"#f1f1f1"
    },
    commentC:{
        position:'absolute',
    },
    TabbarL:{
        width:42,
        height:42
    },
    TabbarC:{
        width:System.width - 84,
        height:42,
        flexDirection:"row",
        justifyContent: 'center'
    },
    TabbarR:{
        width:42,
        height:42
    },
    UserImg:{
        height : 28,
        width:28,
        borderRadius:14,
        marginRight:5,
        marginTop:7,
        borderColor:"#f1f1f1",
        borderWidth:1
    },
    UserName:{
        fontSize:17,
        color:"#383838",
        lineHeight:42
    },
    TabbarImg:{
        height:20,
        width:20,
        marginLeft:6,
        marginTop:11
    },
    TabbarImg1:{
        height:30,
        width:30,
        marginLeft:6,
        marginTop:6
    },
    Article :{
        flex: 1,
        width:System.width,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    Content :{
        flex: 1,
        width:System.width,
        height:System.height - 48,
        backgroundColor:"#fff"
    },
    ContentTitle:{
        width:System.width - 24,
        marginLeft:12,
        marginRight:12,
        paddingTop:12,
        paddingBottom:6
    },
    ContentTitleText:{
        fontSize:20,
        color:"#383838",
        fontWeight:"bold",
        lineHeight:25
    },
    ContentUser:{
        flexDirection:"row",
        width:System.width - 24,
        marginLeft:12,
        marginRight:12,
        borderBottomWidth:1,
        paddingTop:6,
        paddingBottom:12,
        borderBottomColor:"#efefef"
    },
    ContentBody:{
        width:System.width - 24,
        marginLeft:12,
        marginRight:12,
        paddingTop:12,
        paddingBottom:12
    },
    ContentBodyText:{
        fontSize:17,
        color:"#383838",
        lineHeight:25.5,
        paddingTop:6,
        paddingBottom:6,
    },
    ContentBodyImg:{
        borderRadius:1,
        marginTop:6,
        marginBottom:6,
    },
    ContentUserText:{
        fontSize:13,
        color:"#666",
        marginRight:12,
    },
    ContentMore:{
        width:System.width,
        paddingTop:12,
        paddingBottom:12,
        borderTopWidth:1,
        borderTopColor:"#efefef"
    },
    ContentMoreItem:{
        width:System.width - 24,
        marginLeft:12,
        marginRight:12,
        paddingTop:12,
        paddingBottom:12,
        borderBottomWidth:1,
        borderBottomColor:"#efefef",
        flexDirection:"row",
    },
    ContentMoreItemL:{
        height:68,
        width: System.width - 24 - 100,
        paddingRight:12,
    },
    ContentMoreLText:{
        height:54,
        color:"#383838",
        fontSize:15,
        flexWrap:"wrap",
        lineHeight:18
    },
    ContentMoreLTime:{
        height:14,
        color:"#666",
        fontSize:12,
    },
    ContentMoreItemR:{
        height:68,
        width:100,
    },
    ContentMoreItemRImg:{
        width:100,
        height:68,
        borderRadius:1
    },
    OFF:{
        height:(48 + System.z),
        width:System.width
    },
    Comment :{
        position:'absolute',
        width:System.width,
        bottom:0,
        left:0,
        borderTopColor:"#efefef",
        borderTopWidth:1,
        backgroundColor:"#FFF"
    },
    CommentMain:{
        width:System.width,
        height:48,
        flexDirection:"row"
    },
    CommentInput:{
        flex:0.5,
        height:36,
        marginLeft:12,
        marginTop:6,
        paddingLeft:15,
        fontSize:13,
        borderRadius:18,
        borderColor:"#dbdbdb",
        borderWidth:1
    },
    CommentSend:{
        flex:0.5,
        flexDirection:"row",
        height:36,
        marginRight:12,
        marginTop:6,
    },
    CommentSendi:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        height:36,
    },
    TabbarImg2:{
        height:20,
        width:20
    },
    commentNum:{
        position:'absolute',
        color:"#09F",
        height:16,
        width:16,
        textAlign:"center",
        lineHeight:16,
        top:11,
        right:0,
        fontSize:13,
    }
});