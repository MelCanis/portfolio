import anime from "animejs";
import { useEffect, useRef } from "react";
import useScreenWidth from "../../../hooks/device";
import useEventListener from "../../../hooks/eventlistener"
import { $, _ } from "../../../res/mijikai";

const Panel = ({img, re, fl}) => {
    const ref = useRef();
    const columns = 20, rows = 20;
    let row = [], grid = [];
    for (let i = 0; i < columns; i++) row.push(<div key={i} className='tile'></div>);
    for (let i = 0; i < rows; i++) grid.push(row);
    useEffect(() => {ref.current && anime({
        targets: '.tile',
        opacity: ["100%", 0],
        delay: anime.stagger(5),
        easing: "easeOutQuad",
    })
    }, [ref, re])
    useEventListener(ref.current, "mousemove", repel, true)
    function repel (e) {
        const tiles = $([".tile"]);
        if (e.type == "mouseout") {
            tiles.forEach(tile => tile.style.opacity = 0);
            return;   
        }
        // let { clientX: x, clientY: y } = e;
        let { left: x, top: y } = $(".Cursor").getBoundingClientRect();
        tiles.forEach((tile, n) => {
            let { top, left, width, height } = tile.getBoundingClientRect();
            const xField = Math.abs(x - (left + width/2)), yField = Math.abs(y - (top + height/2));
            const close = (xField <= 50 && yField <= 50);
            if (close) tile.style.opacity = `${Math.round(50-((xField+yField)/2))*2}%`
            else tile.style.opacity = 0;
        })
    }
    return (
        <div ref={ref} className="Panel" onMouseOut={repel}>
            <div className="Grid" >
                {grid.map((i, n)=>(
                    <div key={n} className="row">
                        {i.map(t=>t)}
                    </div>
                )
                )}
            </div>
            <img className="coverImage" src={img}/>
        </div>
    )
}

export default Panel;