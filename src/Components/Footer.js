import React from 'react'
import Iframe from 'react-iframe'

function Footer() {
  return (
    <footer>
        <Iframe
            width="271"
            height="152.38"
            src="https://www.youtube.com/embed/jfKfPfyJRdk"
            title="lofi hip hop radio - beats to relax/study to"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style="border-radius: 30px;"
        />

        <Iframe 
            width="271"
            height="152.38"
            src="https://www.youtube.com/embed/1dn4h-k-2xc"
            title="Campfire Crackling 🔥 Calm Lofi & Beautiful Relaxing Background Music - Lofi Hip Hop Mix"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        />

        <Iframe
            width="271"
            height="152.38"
            src="https://www.youtube.com/embed/-5KAN9_CzSA"
            title="coffee shop radio // 24/7 lofi hip-hop beats"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        />
    </footer>
  )
}

export default Footer