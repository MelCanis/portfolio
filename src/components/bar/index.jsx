import "./index.sass"
import anime from "animejs"
import { session } from "../../session";
import { useEffect } from "react";
const Bar = () => {
    const { active } = session(s=>s),
    dur = 2000;
    useEffect(()=>{
        anime({
            targets: "html, body, #root",
            overflow: "hidden"
        })
        active == "hero" && anime({
            targets: ".Bar",
            height: ["10%", "60%"],
            rotate: [0, "45deg"],
            duration: dur,
            easing: "easeOutCirc"
        })
        active == "work" && anime({
            targets: ".Bar",
            height: "60%",
            rotate: "135deg",
            duration: dur,
            easing: "easeOutCirc"
        })
        active == "contact" && anime({
            targets: ".Bar",
            height: "40%",
            rotate: "45deg",
            duration: dur,
            easing: "easeOutCirc"
        })
    }, [active])
    return (
        <div className="Bar">
            {/* <h1>MEL CANIS</h1>
            <h3>WEB DEVELOPER</h3> */}
        </div>
    )
};

export default Bar;