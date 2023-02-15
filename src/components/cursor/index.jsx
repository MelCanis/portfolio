import { useEffect, useRef } from "react";
import "./index.sass"
import anime from "animejs" 

const Cursor = () => {
    const ref = useRef();
    function track(e) {
        let top = e.clientY - 2, left = e.clientX - 2,
        pointer = e.target.classList.contains("pointerable") ? true:false,
        x = e.movementX > 10 ? 10 : e.movementX < -10 ? -10 : e.movementX,
        y = e.movementY > 10 ? 10 : e.movementY < -10 ? -10 : e.movementY;

        anime({
            targets: ".Cursor",
            top: top,
            left: left,
            backgroundColor: pointer ?"#ffe9be":"#ffb41d",
            width: pointer?"15px":"10px",
            height: pointer ? "15px" : "10px",
            duration: 350,
            easing: 'easeOutBack',
        });
        // anime({
        //     targets: ".screen",
        //     translateX: x*1.1,
        //     translateY: y*1.1,
        //     easing: "linear"
        // })
    }
    useEffect(()=>{
        window.addEventListener("mousemove", track)
        return () => window.removeEventListener("mousemove", track)
    },[])
    return (
        <div ref={ref} className="Cursor">
        </div>
    )
}
export default Cursor;