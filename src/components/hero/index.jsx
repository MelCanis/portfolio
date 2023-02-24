import "./index.sass"
import anime from "animejs"
import { useEffect } from "react";
const Hero = () => {
    useEffect(()=>{
        const dur = 2000;
        anime({
            targets: ".Hero>h1",
            translateX: ["100%", 0],
            easing: "easeOutCirc",
            duration: dur
        })
        anime({
            targets: ".Hero>h3",
            translateX: ["-100%", 0],
            easing: "easeOutCirc",
            duration: dur
        })
    },[])
    return (
        <div className="Hero">
            <h1>MEL ALLEN</h1>
            <h3>WEB DEVELOPER</h3>
        </div>
    )
};

export default Hero;