import Letterize from "letterizejs";
import anime from "animejs";
import { useEffect, useRef, useState } from "react";

const Project = ({title, subtitle, description, img, link}) => {
    const containerRef = useRef(), textRef = useRef(), imageRef = useRef();
    const [w, sw] = useState(window.innerWidth);
    useEffect(()=>{
        window.addEventListener("resize", setHeight);
        return ()=> window.removeEventListener("resize", setHeight)
    }, []);
    function setHeight() {
        sw(window.innerWidth);
    }
    function animate ({type}) {
        const enter = type == "mouseenter";
        const phone = (w < 600);
        // console.log(w, phone)
        if (!imageRef.current) return;
        const resize = anime({
            targets: containerRef.current,
            begin: function() {
                containerRef.current.style.height = enter ? `${12 * (phone? 16:24)}px` : "unset";
            },
            duration: 400
        });
        const fadeLetters = anime({
            targets: [...textRef.current.children],
            opacity: enter? "0" : "100%",
            easing: "easeOutQuad",
            duration: 400,
        });
        const showImage = anime({
            targets: imageRef.current,
            easing: "easeOutQuad",
            duration: 400,
            opacity: enter ? "100%" : "0"
        })
    }
    return (
        <div ref={containerRef} className="Project"  onMouseEnter={animate} onMouseLeave={animate}>
            <div ref={textRef}>
                <h2>{title}</h2>
                <h4>{subtitle}</h4>
                {description && <p className="Project_Letters">{description}</p>}
            </div>
            {img && <>
                <img ref={imageRef} src={img} alt="" />
            </>}
            <div>
                <span className="Project_Open pointerable" onClick={() => window.open(link)}>Open Site</span>
            </div>
        </div>
    )
}
export default Project;