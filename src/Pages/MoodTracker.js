import React, { useState } from 'react';
import moment from 'moment';

import Happy from '../Assets/happy.png';
import Anxious from '../Assets/anxious.png';
import Bored from '../Assets/bored.png';
import Content from '../Assets/content.png';
import Exited from '../Assets/exited.png';
import Relaxed from '../Assets/relaxed.png';
import Sad from '../Assets/sad.png';
import Angry from '../Assets/angry.png';




function MoodTracker() {
  const [emotion, setEmotion ] = useState('');
  const [ date, setDate ] = useState('');


  const ListEmotions = [
    {
      name: 'anxious',
      src: Anxious
    },
    {
      name: 'bored',
      src: Bored
    },
    {
      name: 'content',
      src: Content
    },
    {
      name: 'exited',
      src: Exited
    },
    {
      name: 'happy',
      src: Happy
    },
    {
      name: 'relaxed',
      src: Relaxed
    },
    {
      name: 'sad',
      src: Sad
    },
    {
      name: 'angry',
      src: Angry
    },
  ]


  const Choose = ( src ) => {
    setEmotion(src)
    setDate(Date());

  }

  const ResetEmotion = () =>{
    setEmotion('');
  }


  return (
    <div className='mood'>
      <div className='emotionList'>

        {emotion ? 
            <>
              <button onClick={ResetEmotion}>
                <img className='emotionIcon' alt='emotion' src={emotion} />
              </button>
            </>
          : 
            <>
                {ListEmotions.map(e =>
        
                  <button onClick={ () => Choose(e.src, e.name)}>
                    <img className='emotionIcon' src={e.src} alt={e.name} />
                  </button>

                )}
            </>
        }

      </div>

      <div className='CalendarContainer'>
 

      </div>

    </div>
  )
}

export default MoodTracker