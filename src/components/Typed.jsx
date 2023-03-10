import React, { useEffect, useRef } from "react"
import Typed from "typed.js"

const TypedText = () => {

    const element = useRef(null)
    
    useEffect(() => {
        const typed = new Typed(element.current, {
            strings: ["Developer", "Freelancer"],
            startDelay: 300,
            typeSpeed: 150,
            backSpeed: 100,
            backDelay: 100,
            smartBackspace: true,
            loop: true,
            showCursor: true,
            cursorChar: "_"
        })

        // Destropying
        return () => {
            typed.destroy()
        }
    }, [])

    return (
        <div style={{fontSize: '74px', margin: 0}}>
            <h1 style={{paddingRight: '25px'}}>I am a <span ref={element}></span></h1>
        </div>
    )
}

export default TypedText