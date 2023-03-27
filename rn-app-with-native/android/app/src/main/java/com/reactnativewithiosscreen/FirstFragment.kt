package com.reactnativewithiosscreen

import android.os.Bundle
import android.view.View
import android.widget.Button
import androidx.fragment.app.Fragment
import androidx.navigation.fragment.findNavController
import com.datadog.android.DatadogInterceptor
import com.datadog.android.rum.GlobalRum
import okhttp3.OkHttpClient
import okhttp3.Request
import java.io.IOException

class FirstFragment : Fragment(R.layout.fragment_first) {
    private val client = OkHttpClient.Builder()
        .addInterceptor(DatadogInterceptor())
        .build()

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        val firstButton: Button = view.findViewById<Button>(R.id.button_first)

        firstButton.setOnClickListener {
            this.onButtonPress()
        }
    }

    override fun onResume() {
        super.onResume()
        GlobalRum.get().startView("first_fragment", "First Fragment", mapOf())
    }

    override fun onPause() {
        super.onPause()
        GlobalRum.get().stopView("first_fragment", mapOf())
    }

    private fun onButtonPress() {
        val request = Request.Builder()
            .url("https://publicobject.com/helloworld.txt")
            .build()

        Thread {
            client.newCall(request).execute().use { response ->
                if (!response.isSuccessful) throw IOException("Unexpected code $response")

                for ((name, value) in response.headers) {
                    println("$name: $value")
                }

                println(response.body!!.string())
            }
        }.start()



        findNavController().navigate(R.id.SecondFragment)
    }

}
