import Answers from './Answers'
import {useState} from 'react'
import './EightBall.css'

const image = 'https://images-na.ssl-images-amazon.com/images/I/31NXhN9iZoL._AC_SY355_.jpg'

const EightBall = ({answers}) => {
    const getRandom = Math.floor(Math.random() * answers.length)
    const msg = answers[getRandom].msg
    const [answer, setAnswer] = useState('Think of a question')
    const color = answers[getRandom].color
    const reset = () => {
        setAnswer('Think of a question')
    }
    return (
        <div>
            <span className="eightball-child eightball-circle" style={{backgroundColor: answer === 'Think of a question' ? 'black' : color}} onClick={() => setAnswer(msg)} ></span>
            <p className='eightball-child eightball-answer'>{answer}</p>        
            <br/>
            <button className='eightball-reset' onClick={reset}>Reset Ball</button>
        </div>
    )
}

export default EightBall;