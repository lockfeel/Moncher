import {
    StyleSheet
} from "react-native";
import System from "../Public/System.js";

export  default MessageStyle = StyleSheet.create({
    messageTitle:{
        width:System.width,
        height:42+System.y,
        marginBottom:12,
        backgroundColor:"#FFF",
        flexDirection:"row",
        justifyContent:"center",
        alignContent:"center"
    },
    messageTitleText:{
        fontSize:18,
        fontWeight:"bold",
        marginTop:System.y,
        color:"#383838",
        lineHeight:42
    },
    mainView:{
        flex: 1,
        backgroundColor:'#f1f1f1',
        color:"#383838"
    },
    messageItem : {
        height:54,
        flexDirection:"row",
        borderBottomWidth:1,
        backgroundColor:"#FFF",
        borderColor:'#EEE'
    },
    imageBox:{
        borderRadius:54,
        height:40,
        width:40,
        marginTop:7,
        marginLeft:12,
        marginRight:12
    },
    color1:{
        backgroundColor:"#EB3D35"
    },
    color2:{
        backgroundColor:"#2980F8"
    },
    color3:{
        backgroundColor:"#1DB071"
    },
    color4:{
        backgroundColor:"#2F9DFC"
    },
    textItem:{
        width:100,
        height:53,
        color:"#383838",
        lineHeight:52,
        fontSize: 17
    },
    imageItem:{
        width: 24,
        height: 24,
        marginLeft:8,
        marginTop:8,
        marginRight:8
    },
    rightItem:{
        width: 20,
        height: 20,
        marginTop:18,
        marginLeft:System.width - 190
    }
});