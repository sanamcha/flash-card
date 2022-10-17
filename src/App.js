
import React, {useEffect, useState} from 'react';
import FlashcardList from './components/FlashcardList';
import axios from 'axios';

import './App.css';

function App() {
  const [cards, setCards] = useState([])

 
  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10')
    .then(res=>{
      setCards(res.data.results.map((item, index) => {
        let decoded_incorrect = item.incorrect_answers.map(it => myfn(it))
        return {
          id:'${index}-${Date.now()}',
          question: myfn(item.question),
          answer:myfn(item.correct_answer),
          options: [...decoded_incorrect, myfn(item.correct_answer)]
        }
      }))
    })
  }, [])

  function myfn(str){
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
  }

  
  return (
    <div className="App">
     <h1>Flahcard Games</h1>
   
     <FlashcardList flashcards={cards}/>
    </div>
  );
}


// const SAMPLE_CARDS=[
//   {
//     id:1,
//     question:'what is 2 + 2 ?',
//     answer:'4',
//     options:['2','4','6','8']

//   },
//   {
//     id:2,
//     question:'what is 2 + 6 ?',
//     answer:'8',
//     options:['2','4','6','8']

//   },
//   {
//     id:3,
//     question:'what is 2 + 9 ?',
//     answer:'11',
//     options:['2','4','6','11']

//   }
// ]

export default App;
