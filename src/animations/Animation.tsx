import React, {useEffect, useRef, useState} from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ComponnetProps {
    xPosition: number;
    yPosition: number;
}

interface AnimationProps {
    x: number;
    y: number;
    currentRef: React.RefObject<HTMLDivElement>
    Atension: ({xPosition, yPosition}:ComponnetProps) => JSX.Element
}

const Animation = ({ currentRef, Atension, x, y }: AnimationProps) => {
    const [xPosition, setXPosition] = useState<number>(1)
    const [yPosition, setYPosition] = useState<number>(1)

    var w = currentRef.current?.offsetWidth;
    var h = currentRef.current?.offsetHeight;
    if(x && y) {
        if(w && h) {
            if(x <( w / 2)) {
                setXPosition((x - w/2) / 30)
            } else {
                setXPosition(x / 30)
            }
            if(y <( h / 2)) {
                setYPosition((y - h/2) / 20)
            } else {
                setYPosition(y / 20)
            }
        }
        setXPosition(x/ 30)
        setYPosition(y/ 30)
    }

    return (
        <>
         
            <Atension xPosition={xPosition} yPosition={yPosition}/>
           
        </>
    )
}

export default Animation