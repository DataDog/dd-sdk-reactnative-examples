package com.example.hybridapp

import android.app.Application
import android.util.Log
import androidx.fragment.app.Fragment
import com.datadog.android.Datadog
import com.datadog.android.core.configuration.Configuration
import com.datadog.android.event.EventMapper
import com.datadog.android.privacy.TrackingConsent
import com.datadog.android.rum.Rum
import com.datadog.android.rum.RumConfiguration
import com.datadog.android.rum.model.ActionEvent
import com.datadog.android.rum.tracking.ComponentPredicate
import com.datadog.android.rum.tracking.FragmentViewTrackingStrategy
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.soloader.SoLoader

class MyReactApplication : Application(), ReactApplication {
    override fun onCreate() {
        super.onCreate()

        val configuration = Configuration.Builder(
            clientToken = BuildConfig.CLIENT_TOKEN,
            env = BuildConfig.ENVIRONMENT,
        ).build()
        Datadog.setVerbosity(Log.VERBOSE)
        Datadog.initialize(this, configuration, TrackingConsent.GRANTED)

        val rumConfiguration = RumConfiguration.Builder(
            applicationId = BuildConfig.DD_APPLICATION_ID
        )
            .trackUserInteractions()
            .useViewTrackingStrategy(FragmentViewTrackingStrategy(true, RNComponentPredicate()))
            .setActionEventMapper(RNActionEventMapper())
            .build()
        Rum.enable(rumConfiguration)

        SoLoader.init(this, false)
    }
    private val reactNativeHost =
        object : ReactNativeHost(this) {
            override fun getUseDeveloperSupport() = BuildConfig.DEBUG
            override fun getPackages(): List<ReactPackage> {
                val packages = PackageList(this).getPackages().toMutableList()
                // Packages that cannot be autolinked yet can be added manually here
                return packages
            }
        }
    override fun getReactNativeHost(): ReactNativeHost = reactNativeHost
}

class RNActionEventMapper : EventMapper<ActionEvent> {
    override fun map(event: ActionEvent): ActionEvent? {
        var targetClassName = (event.context?.additionalProperties?.get("action.target.classname") as? String)
        if(targetClassName?.startsWith("com.facebook.react") == true) {
            return null
        }
        return event
    }
}

class RNComponentPredicate : ComponentPredicate<Fragment> {
    override fun accept(component: Fragment): Boolean {
        if (component.javaClass.name.startsWith("com.swmansion.rnscreens")) {
            return false
        }
        if (component.javaClass.name.startsWith("com.facebook.react")) {
            return false
        }
        return true
    }

    override fun getViewName(component: Fragment): String? {
        return null
    }
}
