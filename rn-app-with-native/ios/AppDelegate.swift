//
//  AppDelegate.swift
//  ReactNativeWithIOSScreen
//
//  Created by Marco Saia on 30.04.25.
//


import UIKit
import React
import React_RCTAppDelegate
import ReactAppDependencyProvider

@main
@objc(AppDelegate)
class AppDelegate: UIResponder, UIApplicationDelegate {
  var window: UIWindow?
 
  var reactNativeDelegate: ReactNativeDelegate?
  var reactNativeFactory: RCTReactNativeFactory?
  var reactNativeViewController: UIViewController?
 
  func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil
  ) -> Bool {
    let delegate = ReactNativeDelegate()
    let factory = RCTReactNativeFactory(delegate: delegate)
    delegate.dependencyProvider = RCTAppDependencyProvider()
 
    reactNativeDelegate = delegate
    reactNativeFactory = factory
 
    window = UIWindow(frame: UIScreen.main.bounds)
 
    factory.startReactNative(
      withModuleName: "ReactNativeWithIOSScreen",
      in: window,
      launchOptions: launchOptions
    )
    
    reactNativeViewController = window?.rootViewController
 
    return true
  }
  
  @objc
  func goToNativeView() {
    DispatchQueue.main.async { [weak self] in
      let storyboard = UIStoryboard(name: "RNTCustomView", bundle: nil)
      let vc = storyboard.instantiateViewController(withIdentifier: "RNTCustomView")
      self?.window?.rootViewController = vc;
    }
  }
  
  @objc
  func goToReactNative() {
    DispatchQueue.main.async { [weak self] in
      guard let reactVc = self?.reactNativeViewController else {
        return
      }
      self?.window?.rootViewController = reactVc
    }
  }
}
 
class ReactNativeDelegate: RCTDefaultReactNativeFactoryDelegate {
  override func sourceURL(for bridge: RCTBridge) -> URL? {
    self.bundleURL()
  }
 
  override func bundleURL() -> URL? {
#if DEBUG
    RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
#else
    Bundle.main.url(forResource: "main", withExtension: "jsbundle")
#endif
  }
}
