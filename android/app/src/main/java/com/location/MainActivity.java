package com.location;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
import android.content.Intent;

public class MainActivity extends ReactActivity {
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "location";
    }
     /**
     * Facebook SDK for native login
     */
     @Override
     public void onActivityResult(int requestCode, int resultCode, Intent data) {
         super.onActivityResult(requestCode, resultCode, data);
         MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
     }

}
