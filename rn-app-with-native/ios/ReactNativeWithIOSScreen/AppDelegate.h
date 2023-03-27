#import <RCTAppDelegate.h>
#import <UIKit/UIKit.h>

@interface AppDelegate : RCTAppDelegate {
  UIViewController *reactViewController;
}

- (void) goToNativeView; // called from the RCTBridge module
- (void) goToReactNative; // called from the RCTBridge module

@end
