import { useEffect, useState } from "react";

function useScreenWidth() {
    let [device, setDevice] = useState(window.innerWidth < 750 ? true : false);
    useEffect(()=>{
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    },[]);
    function resize () {
        setDevice(window.innerWidth < 750 ? true : false);
    }
    return device;
}

export default useScreenWidth;