/**
 ****************************************************
 ** 作者：张文晓
 **--------------------------------------------------
 ** 时间：2018-11-14
 **--------------------------------------------------
 ** 描述：空白页设置
 ****************************************************
 */
import React from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet
} from 'react-native';
import Images from "./Images";
export default class Blankend extends React.Component {
    render() {
        return (
            <View style={styles.Blankend}>
                <Image source={Images['isnull']} style={styles.BlankendImg}/>
                <Text  style={styles.BlankendText}>空空如也，正在加载</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    Blankend:{
        flex:1,
        height:600,
        alignItems: 'center',
        justifyContent: 'center'
    },
    BlankendImg:{
        width:100,
        height:100
    },
    BlankendText:{
        color:"#666",
        fontSize:12,
        marginTop:24
    }
});
