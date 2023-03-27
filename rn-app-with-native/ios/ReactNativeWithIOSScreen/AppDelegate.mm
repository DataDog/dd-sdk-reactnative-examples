#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"ReactNativeWithIOSScreen";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  BOOL result = [super application:application didFinishLaunchingWithOptions:launchOptions];
  
  reactViewController = self.window.rootViewController;
  return result;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

/// This method controls whether the `concurrentRoot`feature of React18 is turned on or off.
///
/// @see: https://reactjs.org/blog/2022/03/29/react-v18.html
/// @note: This requires to be rendering on Fabric (i.e. on the New Architecture).
/// @return: `true` if the `concurrentRoot` feature is enabled. Otherwise, it returns `false`.
- (BOOL)concurrentRootEnabled
{
  return true;
}

- (void) goToNativeView {
  dispatch_async(dispatch_get_main_queue(), ^{
    UIStoryboard *sb = [UIStoryboard storyboardWithName:@"RNTCustomView" bundle:nil];
    UIViewController *vc = [sb instantiateViewControllerWithIdentifier:@"RNTCustomView"];
    self.window.rootViewController = vc;
  });
}

- (void) goToReactNative {
  dispatch_async(dispatch_get_main_queue(), ^{
    self.window.rootViewController = self->reactViewController;
  });
}


@end
