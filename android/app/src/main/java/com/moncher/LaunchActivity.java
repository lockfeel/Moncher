package com.moncher;
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
public class LaunchActivity  extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //--加载启动图片
        setContentView(R.layout.launch);
        //--设置等待时间，单位为毫秒
        Integer time        = 888;
        Handler handler = new Handler();
        //--当计时结束时，跳转至主界面
        handler.postDelayed(new Runnable() {
            @Override
            public void run() {
                //--跳转至 MainActivity
                startActivity(new Intent(LaunchActivity.this, MainActivity.class));
                //--结束当前的 Activity
                LaunchActivity.this.finish();
            }
        }, time);
    }
}
