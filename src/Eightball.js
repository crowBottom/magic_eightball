import React, {useState} from 'react';
import './Eightball.css';
import Answers from './Answers';

const Eightball = () => {
  //pick a random index from the imported array
  const idx = Math.floor(Math.random()* Answers.length);

  //starting message
  const eightball_msg = "Think of Something.";
  //setting up answer state
  const [answer, setAnswer] = useState(eightball_msg);
  //inital color of the eightball initialized to black
  const [color, setColor] = useState('black')


  //setting up function when eightball is clicked
  const makePrediction = () => {
    setAnswer(Answers[idx].msg);
    setColor(Answers[idx].color);
  }

  const the_margin = "0px 45px";
  return (
    <>
      <div class="w3-container">
        <div>
        <h1 style={{margin: the_margin}}>Magic Eightball</h1>
        </div>
        <div>
          <button className="EightBall w3-ripple" onClick={makePrediction} style={{ backgroundColor: color }}>
            <div>
              <div class="w3-xxxlarge">8</div>
              <div class="w3-margin w3-padding w3-border w3-border-round">{answer}</div>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default Eightball;
