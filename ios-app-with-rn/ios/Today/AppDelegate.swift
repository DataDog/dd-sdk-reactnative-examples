/*
 See LICENSE folder for this sample’s licensing information.
 */

import UIKit
import Datadog

@main
class AppDelegate: UIResponder, UIApplicationDelegate {
    
  var window: UIWindow?

  func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
  ) -> Bool {
    guard let applicationId = Bundle.main.object(forInfoDictionaryKey: "APPLICATION_ID") as? String, !applicationId.isEmpty else {
        print("APPLICATION_ID is not specified. Please add a ios/Secrets.xcconfig with an APPLICATION_ID value")
        return true
    }
      
    guard let clientToken = Bundle.main.object(forInfoDictionaryKey: "CLIENT_TOKEN") as? String, !clientToken.isEmpty else {
        print("CLIENT_TOKEN is not specified. Please add a ios/Secrets.xcconfig with an CLIENT_TOKEN value")
        return true
    }
      
    guard let environment = Bundle.main.object(forInfoDictionaryKey: "ENVIRONMENT") as? String, !environment.isEmpty else {
        print("ENVIRONMENT is not specified. Please add a ios/Secrets.xcconfig with an ENVIRONMENT value")
        return true
    }

    Datadog.initialize(
      appContext: .init(),
      trackingConsent: .granted,
      configuration: Datadog.Configuration
          .builderUsing(
              rumApplicationID: applicationId,
              clientToken: clientToken,
              environment: environment
          )
          .set(endpoint: .us1)
          .trackUIKitRUMViews(using: RNHybridPredicate())
          .trackUIKitRUMActions()
          .trackURLSession()
          .build()
    )
    Global.rum = RUMMonitor.initialize()
    Datadog.verbosityLevel = .debug
    // Override point for customization after application launch.
    UINavigationBar.appearance().tintColor = .todayPrimaryTint
    UINavigationBar.appearance().backgroundColor = .todayNavigationBackground
    let navBarAppearance = UINavigationBarAppearance()
    navBarAppearance.configureWithOpaqueBackground()
    UINavigationBar.appearance().scrollEdgeAppearance = navBarAppearance
    return true
  }

  // MARK: UISceneSession Lifecycle

  func application(
    _ application: UIApplication, configurationForConnecting connectingSceneSession: UISceneSession,
    options: UIScene.ConnectionOptions
  ) -> UISceneConfiguration {
    // Called when a new scene session is being created.
    // Use this method to select a configuration to create the new scene with.
    return UISceneConfiguration(
      name: "Default Configuration", sessionRole: connectingSceneSession.role)
  }

  func application(
    _ application: UIApplication, didDiscardSceneSessions sceneSessions: Set<UISceneSession>
  ) {
    // Called when the user discards a scene session.
    // If any sessions were discarded while the application was not running, this will be called shortly after application:didFinishLaunchingWithOptions.
    // Use this method to release any resources that were specific to the discarded scenes, as they will not return.
  }

}

class RNHybridPredicate: UIKitRUMViewsPredicate {
    var defaultPredicate = DefaultUIKitRUMViewsPredicate()

    func rumView(for viewController: UIViewController) -> RUMView? {
        // Dropping RN Views here as they are caught from 
        let canonicalClassName = NSStringFromClass(type(of: viewController))
        if (canonicalClassName.starts(with: "RN")) {
            return nil
        }
        
        return defaultPredicate.rumView(for: viewController)
    }
}
