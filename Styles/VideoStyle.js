import {
    StyleSheet
} from "react-native";
import System from "../Public/System";

export  default VideoStyle = StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor:"#FFF",
        width:System.width,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    fullScreenBox:{
        height:System.OS === 'ios' ? (System.x > 2 ? 36 : 0 ) : 0,
        backgroundColor:"#000",
        width:System.width
    },
    fullScreen:{
        height:(System.width/16)*9,
        backgroundColor:"#000",
        width:System.width
    },
    fullScreenX:{
        backgroundColor:"#000",
        width:System.width,
        height:System.height,
    },
    coverPic:{
        position:"absolute",
        zIndex:86,
        top:System.OS === 'ios' ? (System.x > 2 ? 36 : 0 ) : 0,
        height:(System.width/16)*9,
        width:System.width
    },
    coverPicHide:{
        height:0,
        width:0
    },
    fullScreenBack:{
        position:"absolute",
        zIndex:999,
        height:42,
        width:System.width,
        top:System.OS === 'ios' ? (System.x > 2 ? 36 : 0 ) : 0,
        left:0
    },
    fullScreenBackImg:{
        width:System.width,
        height:42
    },
    TabbarBack1:{
        position:"absolute",
        top:0,
        left:0,
        height:42,
        width:42,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TabbarBack2:{
        position:"absolute",
        top: 0,
        left:System.width - 42,
        height:42,
        width:42,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TabbarImg:{
        height :20,
        width:20
    },
    TabbarImg1:{
        height:30,
        width:30,
    },
    title:{
        width:System.width,
        backgroundColor:"#FFF",
        padding:12,
        borderBottomWidth:1,
        borderBottomColor:"#f1f1f1"
    },
    titleTxt:{
        fontSize:17,
        lineHeight:24
    },
    titleUser:{
        width:System.width,
        marginTop:6,
        height:25,
        flexDirection:"row"
    },
    titleUserL:{
        width:25,
        height:25,
        marginRight:6
    },
    userImg:{
        width:25,
        height:25,
        borderWidth:1,
        borderRadius:12.5,
        borderColor:"#ccc"
    },
    userName:{
        height:25,
        lineHeight:25,
        fontSize:15
    },
    userTime:{
        height:25,
        lineHeight:25,
        fontSize:15,
        color:"#666"
    },
    titleUserR:{
        flex: 1,
        height:36,
        flexDirection:"row"
    },
    ContentMore:{
        width:System.width,
        backgroundColor:"#FFF",
        paddingTop:12,
        paddingBottom:12,
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
        height:55,
        color:"#383838",
        fontSize:15,
        flexWrap:"wrap",
        lineHeight:24
    },
    ContentMoreLTime:{
        height:14,
        lineHeight:14,
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
        height:(60 + System.z),
        width:System.width
    },
    Comment:{
        position:'absolute',
        height:48 + System.z,
        width:System.width,
        backgroundColor:"#F1F1F1",
        top:System.height - (48 + System.z)
    }
});