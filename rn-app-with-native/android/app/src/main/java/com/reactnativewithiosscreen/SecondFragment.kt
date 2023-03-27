package com.reactnativewithiosscreen

import android.os.Bundle
import android.view.View
import android.widget.Button
import androidx.fragment.app.Fragment
import com.datadog.android.rum.GlobalRum

class SecondFragment : Fragment(R.layout.fragment_second) {

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        val closeButton: Button = view.findViewById<Button>(R.id.button_react)

        closeButton.setOnClickListener {
            this.onCloseButtonPress()
        }
    }

    override fun onResume() {
        super.onResume()
        GlobalRum.get().startView("second_fragment", "Second Fragment", mapOf())
    }

    override fun onPause() {
        super.onPause()
        GlobalRum.get().stopView("second_fragment", mapOf())
    }

    private fun onCloseButtonPress() {
        activity?.finish();
    }

}