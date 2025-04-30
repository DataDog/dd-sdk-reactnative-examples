//
//  RCTCustomView.m
//  ReactNativeWithIOSScreen
//
//  Created by Louis Zawadzki on 24/02/2023.
//

#import <Foundation/Foundation.h>
#import "RCTCustomView.h"
#import "ReactNativeWithIOSScreen-Swift.h"

@implementation RCTCustomView

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(startView)
{
  AppDelegate *appDelegate = (AppDelegate *)[UIApplication sharedApplication].delegate;
  [appDelegate goToNativeView];
}

@end
