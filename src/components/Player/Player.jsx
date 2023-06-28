import { useRef } from "react"


export const Player = ({ source }) => {
    const playerRef = useRef()
    const play = () => playerRef.current.play()
    const pause = () => playerRef.current.pause()

    console.log(playerRef.current)

    return (
        <div>
            <video src={source} ref={playerRef}>
                Sorry, your browser does not support video
            </video>
            <button onClick={play}>Play</button>
            <button onClick={pause}>Pause</button>
        </div>
    )
}