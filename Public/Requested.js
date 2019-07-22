/**
 ****************************************************
 ** 作者：张文晓
 **--------------------------------------------------
 ** 时间：2018-11-14
 **--------------------------------------------------
 ** 描述：网络请求数据
 ****************************************************
 */
import React from 'react';
export default class Requested {
    /**获取文章列表*/
    static GetRemind (userId,columnId,successCallback,errorCallback) {
        this.API(
            "http://47.94.166.90:8888/V1/Columns/findArticleList",
            "userId="+userId+"&columnId="+columnId,
            successCallback,
            errorCallback
        );
    }
    /**获取文章栏目*/
    static GetRemindColumn(userId,successCallback,errorCallback){
        this.API(
            "http://47.94.166.90:8888/V1/Columns/findArticleColumn",
            "userId="+userId,
            successCallback,
            errorCallback
        );
    }
    /**获取视频栏目*/
    static GetVideoColumn(userId,successCallback,errorCallback){
        this.API(
            "http://47.94.166.90:8888/V1/Columns/findVideoColumn",
            "userId="+userId,
            successCallback,
            errorCallback
        );
    }
    /**获取视频列表*/
    static GetVideo(userId,columnId,successCallback,errorCallback){
        this.API(
            "http://47.94.166.90:8888/V1/Columns/findVideoList",
            "userId="+userId+"&columnId="+columnId,
            successCallback,
            errorCallback
        );
    }
    /**获取文章详情*/
    static GetArticleDetailed(userId,articleId,columnId,successCallback,errorCallback){
        this.API(
            "http://47.94.166.90:8888/V1/Article/findDesc",
            "user_id="+userId+"&column_id="+columnId+"&article_id="+articleId,
            successCallback,
            errorCallback
        );
    }
    /**获取视频详情*/
    static GetVideoDetailed(userId,videoId,columnId,successCallback,errorCallback){
        this.API(
            "http://47.94.166.90:8888/V1/Video/getDetailed",
            "user_id="+userId+"&column_id="+columnId+"&video_id="+videoId,
            successCallback,
            errorCallback
        );
    }
    /**获取文章段落*/
    static GetArticlePend(userId,articleId,pageNum,pageSize,successCallback,errorCallback){
        this.API(
            "http://47.94.166.90:8888/V1/Article/findPend",
            "user_id="+userId+"&article_id="+articleId+"&page_num="+pageNum+"&page_size="+pageSize,
            successCallback,
            errorCallback
        );
    }
    /**请求网络*/
    static API(url,params,successCallback,errorCallback){
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: params
        }).then((response) => {
            return response.json();
        }).then((responseData) => {
            successCallback(responseData);
        }).catch((error) => {
            errorCallback();
        }).done();
    }
}