import React,  { useState } from 'react';

const Flashcard = ({ flashcard }) => {
    const[ flip, setFlip ] = useState(false);

    return (
        //we can flip using css 
        <div className={`card ${flip ? 'flip' : ''}`} onClick={()=> setFlip(!flip)}>
           <div className='front'>
            {flashcard.question}
           
            {/* <div className='flashcard-options'>
                {flashcard.options.map(option => {
                    return <div className ='flashcard-option'>
                        {flashcard.options} 
                    </div>

                })}

            </div> */}

           </div>
           
            <div className='back'>{flashcard.answer}</div>
        </div>

        //below we can just flip by js
        // <div onClick={()=> setFlip(!flip)}>
        //     {flip ? flashcard.answer : flashcard.question}
        // </div>
        
    )
}

export default Flashcard;