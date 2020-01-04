import {useState, useEffect, useRef} from 'react'

function useCustomHook() {

    const STARTING_TIME = 10
    const [text, setText] = useState('')
    const [timeReamining, setTimeRemaining] = useState(STARTING_TIME)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordNum, setWordNum] = useState(0)
    const textBoxRef = useRef(null)

    function handleChange(e) {
        e.preventDefault()
        const {value} = e.target
        setText(value)
    }
    
    function wordCount(text) {
        let words = text.trim().split(' ')
        return words.filter(word => word !== '').length
  
    }

    function startClock() {
        setIsTimeRunning(true)
        setTimeRemaining(STARTING_TIME)
        setText('')
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
    }

    function endGame() {
        setIsTimeRunning(false)
        setWordNum(wordCount(text))
    }
    

    useEffect(() => {
        if(isTimeRunning && timeReamining > 0)
        {setTimeout(() => {
           setTimeRemaining(time => time - 1)
        }, 1000)}else if(timeReamining === 0){
            endGame()
        }
    }, [timeReamining, isTimeRunning])

    return {text, handleChange, isTimeRunning, textBoxRef, timeReamining, startClock, wordNum}

}

export default useCustomHook