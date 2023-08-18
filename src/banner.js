import React from 'react'
function randInt(min, max) {
    let x = (max - min) + 1
    return min + Math.floor(Math.random() * x)
}

export default function Banner() {
    const r = randInt(1,3)
    let banner = ''
    let url = ''

    switch(r) {
    case 1:
        banner = './bannerSrc/ad1.jpg'
        url = 'https://youtu.be/MHxJXBLJW98'
        break
    case 2:
        banner = './bannerSrc/ad2.jpg'
        url = 'https://youtu.be/NuXaVXrvWUI'
        break
    case 3:
        banner = './bannerSrc/ad3.jpg'
        url = 'https://youtu.be/pLAT74acGrg'
        break
    default: break
    }

    const bannerClick = () => {
        window.open(url)
    }

    return (
        <div style = {{margin: '20px', textAlign: 'center'}}>
            <img src = {banner} onClick = {bannerClick} style = {{cursor:'pointer'}}
             alt = "banner"/>
        </div>
    )
}
