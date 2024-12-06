//
//  CustomViewController.m
//  ReactNativeWithIOSScreen
//
//  Created by Louis Zawadzki on 24/02/2023.
//

#import <Foundation/Foundation.h>
#import "CustomViewController.h"
#import "AppDelegate.h"
@import DatadogObjc;

@implementation CustomViewController

- (IBAction)goBack {
  AppDelegate *appDelegate = (AppDelegate *)[UIApplication sharedApplication].delegate;
  [appDelegate goToReactNative];
}

- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    
    
  
  [DDRUMMonitor.shared startViewWithViewController:self name:nil attributes:[[NSDictionary alloc] init]];
}

- (void)viewDidDisappear:(BOOL)animated {
    [super viewDidDisappear:animated];

    [DDRUMMonitor.shared stopViewWithViewController:self attributes:[[NSDictionary alloc] init]];
}

@end
