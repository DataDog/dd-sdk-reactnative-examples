package com.reactnativewithiosscreen

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.navigation.NavController
import androidx.navigation.Navigation
import androidx.navigation.ui.setupActionBarWithNavController

class NativeActivity : AppCompatActivity() { // If you are using custom name change it here

    lateinit var nav: NavController
    override fun onSupportNavigateUp(): Boolean = nav.navigateUp()
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContentView(R.layout.view_layout)
        setSupportActionBar(findViewById(R.id.toolbar))

        nav = Navigation.findNavController(this, R.id.fragment_nav)

        setupActionBarWithNavController(nav)
    }
}
