package io.ionic.starter;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.rana.plugin.MyCustomPluginPlugin;

public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstaceState) {
    registerPlugin(MyCustomPluginPlugin.class);
    super.onCreate(savedInstaceState);
  }
}
