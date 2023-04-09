import React, { useEffect, useState } from 'react'
import './styles/carousel.css'

const Carousel = (props) => {
    const {children, show} = props
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)
    const [touchPosition, setTouchPosition] = useState(null)
    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        if (currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if(touchDown === null) {
            return
        }
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch
        if (diff > 5) {
            next()
        }
        if (diff < -5) {
            prev()
        }
        setTouchPosition(null)
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {currentIndex > 0 &&
                    <button onClick={prev} onMouseEnter={prev} className="left-arrow" style={{backgroundColor:'#f5b800'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                    </button>
                }
                <div className="carousel-content-wrapper" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                    <div className={`carousel-content show-${show}`} style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}>
                        {children}
                    </div>
                </div>
                {currentIndex < (length - show) 
                    && <button onClick={next} onMouseEnter={next} className="right-arrow" style={{backgroundColor:'#f5b800'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                    </button>
                }
            </div>
        </div>
    )
}

export default Carousel