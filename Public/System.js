/**
 ****************************************************
 ** 作者：张文晓
 **--------------------------------------------------
 ** 时间：2019-03-20
 **--------------------------------------------------
 ** 描述：系统常用变量
 ****************************************************
 */
import {
    Dimensions,
    Platform,
    StatusBar
} from "react-native";

let  { width, height } = Dimensions.get("window");
let  X = (height/width).toFixed(4);
export  default  System = {
    width  : width,
    height : height,
    x      : X,
    y      : Platform.OS === 'ios' ? (X > 2 ? 44 : 20 ) : 0,
    z      : Platform.OS === 'ios' ? (X > 2 ? 17 : 0) : StatusBar.currentHeight,
    OS     : Platform.OS,
    BH     : StatusBar.currentHeight
};