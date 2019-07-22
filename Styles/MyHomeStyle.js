import {
    StyleSheet
} from "react-native";
import System from "../Public/System";
export  default MyHomeStyle = StyleSheet.create({
    statusBar:{
        height:42+System.y,
        paddingTop:System.y,
        flexDirection:"row",
        backgroundColor:"#d23c3e",
    },
    statusBarItem1:{
        flex: 1,
        marginTop:9,
        flexDirection:"row",
        justifyContent:"flex-start",
        color:"#FFF"
    },
    statusBarItem2:{
        flex: 1,
        marginTop:9,
        flexDirection:"row",
        justifyContent:"center",
        color:"#FFF"
    },
    statusBarItem3:{
        flex: 1,
        marginTop:9,
        flexDirection:"row",
        justifyContent:"flex-end",
        color:"#FFF"
    },
    statusBarItemTitle:{
        color:"#FFF",
        fontSize:17,
        fontWeight:"800",
        textAlign:"center",
        height:24,
        lineHeight:24
    },
    iconItem:{
        height:24,
        width:24,
        marginLeft:12,
        marginRight:12
    },
    myHomeView: {
        flex: 1,
        backgroundColor: '#efefef'
    },
    headerItem: {
        height: 100,
        flexDirection:"row",
        backgroundColor: "#d23c3e"
    },
    userIcon:{
        height :50,
        width:50,
        backgroundColor:"#FFF",
        borderRadius:25,
        marginTop:25,
        marginLeft:12
    },
    userIconImg:{
        height:50,
        width:50,
        borderRadius:25
    },
    userInfo:{
        height :50,
        width:120,
        marginTop:25,
        marginLeft:12
    },
    userInfoName:{
        fontSize:17,
        fontWeight:"800",
        color:"#FFF",
        lineHeight:34
    },
    userInfoCode:{
        fontSize:12,
        color:"#FFF"
    },
    userSign:{
        backgroundColor:"#FEF70A",
        flexDirection:"row",
        justifyContent:"center",
        borderRadius:17,
        marginTop:32,
        height:30,
        marginLeft:System.width - 150 - 120 - 50 - 36,
        width:150
    },
    userSignImg:{
        width:22,
        height:22,
        marginTop:4,
        marginRight:4
    },
    userSignText:{
        color:"#542601",
        lineHeight:30,
        fontSize:13
    },
    walletItem: {
        height: 60,
        flexDirection:"row",
        backgroundColor: "#FFF"
    },
    walletItemView:{
        flex: 1,
        justifyContent:"center",
    },
    walletItemNum:{
        textAlign:"center",
        fontSize:17,
        color:"#383838",
        fontWeight:"600",
        lineHeight:30
    },
    walletItemText:{
        color:"#555",
        textAlign:"center"
    },
    walletItemImgBox:{
        flexDirection:"row",
        height:30.5,
        justifyContent:"center",
    },
    walletItemImg:{
        width:22,
        height:22,
        marginTop:4
    },
    apprenticeItem: {
        height: 136,
        backgroundColor: "#FFF"
    },
    apprenticeItemTo:{
        height:56,
        flexDirection:"row"
    },
    apprenticeItemToL:{
        height:56,
        width:48,
        marginLeft:12
    },
    apprenticeItemToLImg:{
        height:48,
        width:48,
        marginTop:4,
    },
    apprenticeItemToC:{
        width:System.width - 60 - 20 - 17,
        height:56,
        marginLeft:12
    },
    apprenticeItemToCText:{
        fontSize:21,
        fontFamily:"Times",
        letterSpacing:2,
        color:"#424242",
        lineHeight:56
    },
    apprenticeItemToCSpan:{
        fontSize:21,
        color: "#d23c3e"
    },
    apprenticeItemToR:{
        width:20,
        height:56,
        lineHeight:56,
    },
    apprenticeItemToRImg:{
        width:20,
        height:20,
        marginTop:18
    },
    apprenticeItemBo:{
        height:80,
        flexDirection:"row",
    },
    apprenticeItemBox:{
        flex: 1,
        justifyContent:"center",
    },
    apprenticeItemBoBox:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:8
    },
    apprenticeItemBoImg:{
        width:28,
        height:28,
    },
    apprenticeItemBoText:{
        fontSize:13
    },
    friendItem: {
        height: 45,
        borderColor:"#efefef",
        borderBottomWidth:1,
        flexDirection:"row",
        backgroundColor:"#FFF",
        marginTop: 8
    },
    friendItemBox:{
        flex: 1,
        height:45,
        justifyContent:"center",
    },
    friendItemBoxText1:{
        textAlign:"center",
        paddingLeft:12,
        paddingRight:12,
        fontSize:13
    },
    friendItemBoxText2:{
        textAlign:"center",
        paddingLeft:12,
        paddingRight:12,
        fontSize:13
    },
    taskList: {
        paddingBottom:44
    },
    taskListNew:{
        marginTop:8,
        backgroundColor:"#FFF"
    },
    taskListTitle:{
        height:42,
        paddingLeft:4,
        flexDirection:"row"
    },
    taskListTitleDot:{
        height:20,
        width:20,
        marginTop:12,
    },
    taskListTitleText:{
        height:42,
        fontSize:18,
        lineHeight:42,
        marginLeft:-2
    },
    taskListItem:{
        height:46,
        flexDirection:"row",
        borderBottomColor:"#efefef",
        borderBottomWidth:1
    },
    taskListItemL:{
        flex:0.75,
        flexDirection:"row"
    },
    taskListItemLImg:{
        height:20,
        width:20,
        marginTop:13,
        marginLeft:8
    },
    taskListItemLText:{
        height:45,
        lineHeight:45,
        fontSize:15,
        marginLeft:4
    },
    taskListItemR:{
        flex:0.25,
        flexDirection:"row",
        justifyContent:"flex-end"
    },
    taskListItemRImg2:{
        height:16,
        width:16,
        marginTop:15,
        marginRight:4
    },
    taskListItemRImg1:{
        height:16,
        width:16,
        marginTop:15
    },
    taskListItemRText:{
        height:46,
        lineHeight:46,
        color:"#d23c3e",
        marginRight:4,
        marginLeft:4
    }
});