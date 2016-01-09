package com.guy_app;

import android.widget.Toast;

/*import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;*/
import com.facebook.react.bridge.*;
import com.facebook.react.modules.core.*;
import com.facebook.react.uimanager.*;

import java.util.*;

public class HuanxinModule extends ReactContextBaseJavaModule {

	private static final String DURATION_SHORT_KEY = "SHORT";
	private static final String DURATION_LONG_KEY = "LONG";
	private ReactApplicationContext reactContext;

	public HuanxinModule(ReactApplicationContext reactContext) {
		super(reactContext);
		this.reactContext = reactContext;
	}

	@Override
	public String getName() {
		return "HuanxinModule";
	}

	@Override
	public Map<String, Object> getConstants() {
		final Map<String, Object> constants = new HashMap<>();
		constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
		constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
		return constants;
	}

	private void sendEvent(ReactContext reactContext, String eventName, WritableMap params) {
	//private void sendEvent(ReactContext reactContext, String eventName) {
		/**/
		//WritableMap params
		reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
			.emit(eventName, params);
	}

	//提供给JS调用的方法
	@ReactMethod
	public void show(String message, int duration) {
		Toast.makeText(getReactApplicationContext(), message, duration).show();
	}

	@ReactMethod
	public void showByCallback(String name, Callback errorCallback, Callback successCallback) {
		try {
			if(name == null){
				name = "";
			}
			name = name + "， this is come from callback ";
		  	successCallback.invoke(name);
		} catch (IllegalViewOperationException e) {
		  	errorCallback.invoke(e.getMessage());
		}
	}

	@ReactMethod
	public void triggerEvent(String eventName){
		WritableMap params = new WritableNativeMap();
		sendEvent(this.reactContext, eventName, params);
	}
}