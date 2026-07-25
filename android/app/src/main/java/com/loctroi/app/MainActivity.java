package com.loctroi.app;

import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public void onStart() {
        super.onStart();
        if (this.bridge != null && this.bridge.getWebView() != null) {
            WebView webView = this.bridge.getWebView();
            webView.setVerticalScrollBarEnabled(true);
            webView.setOverScrollMode(WebView.OVER_SCROLL_IF_CONTENT_SCROLLS);
            WebSettings settings = webView.getSettings();
            settings.setDomStorageEnabled(true);
            settings.setJavaScriptEnabled(true);
        }
    }
}
