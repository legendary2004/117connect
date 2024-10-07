import { useState, useEffect } from "react"
import SildeToTop from "../components/buttons/SlideToTop"
import Footer from "../components/footers/Footer"
import Home_1 from "../contents/home/Home_1"
import Home_2 from "../contents/home/Home_2"
import Home_3 from "../contents/home/Home_3"
import Home_4 from "../contents/home/Home_4"
import Home_5 from "../contents/home/Home_5"
import Home_6 from "../contents/home/Home_6"
import Home_7 from "../contents/home/Home_7"
import Home_8 from "../contents/home/Home_8"
import Partners from "../contents/home/Partners"

const Home = () => {
    const [scroll, setScroll] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const [classes, setClasses] = useState("")

    useEffect(() => {
        const unsub = () => {
            window.addEventListener("scroll", () => {
                setScroll(scrollY)
            })
        }

        unsub()
    }, [])

    useEffect(() => {
        if (scroll < 100) {
            setClasses("animate-out slide-out-to-bottom")
            if (isVisible) {
                setTimeout(() => {
                    setClasses("")
                    setIsVisible(false)
                }, 650)
            }
        }
        else if (scroll >= 100) {
            setIsVisible(true)
            setClasses("animate-in slide-in-from-bottom")
        }
    }, [scroll])
    return (
        <div>
            <Home_1 />
            <Home_2 />
            <Home_3 />
            <Home_4 />
            <Home_5 />
            <Home_6 />
            <Home_7 />
            <Home_8 />
            <Partners />
            <Footer />
            {isVisible && <SildeToTop classes={classes}/>}
        </div>
    )
}

export default Home