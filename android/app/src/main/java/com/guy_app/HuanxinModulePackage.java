package com.guy_app;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.uimanager.ViewManager;

import java.util.*;

public class HuanxinModulePackage implements ReactPackage {

  @Override
  public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
    List<NativeModule> modules = new ArrayList<>();

    modules.add(new HuanxinModule(reactContext));

    return modules;
  }

  @Override
  public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
    List<ViewManager> modules = new ArrayList<>();

    //modules.add(new HuanxinModule(reactContext));
    return modules;
  }

  @Override
  public List<Class<? extends JavaScriptModule>> createJSModules(){
  	List<Class<? extends JavaScriptModule>> modules = new ArrayList<>();
  	return modules;
  }

}