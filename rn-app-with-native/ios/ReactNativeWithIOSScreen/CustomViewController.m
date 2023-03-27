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

    [DDGlobal.rum startViewWithViewController:self name:nil attributes:nil];
}

- (void)viewDidDisappear:(BOOL)animated {
    [super viewDidDisappear:animated];

    [DDGlobal.rum stopViewWithViewController:self attributes:nil];
}

@end
