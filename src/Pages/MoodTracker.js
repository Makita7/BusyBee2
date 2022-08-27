import React, { useState, useEffect } from 'react';
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
  const [emotion, setEmotion ] = useState( JSON.parse(localStorage.getItem('currentEmotion')) || '');
  const [ date, setDate ] = useState('');
  const [log, setLog] = useState(JSON.parse(localStorage.getItem('StoredMoods')) || []);
  const Month = moment().format('MMMM');

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

  useEffect( () => {
    localStorage.setItem('StoredMoods', JSON.stringify(log));
  }, [log]);

  useEffect( () => {
    localStorage.setItem('currentEmotion', JSON.stringify(emotion));
  }, [emotion]);


  const Choose = ( src, name ) => {
    //save data to local storage and make it delete itself once every month
    setEmotion(src);
    setDate((moment().format('dddd Do')));

    const today = (moment().format('dddd Do'))
    const Search = log.find(log => log.date === today);

    if(!Search){
          setLog(current => [ ...current, {
            name: name,
            src: src,
            date: (moment().format('dddd Do')),
            key: Math.floor(Math.random()*1000 +1)
        }]);
    } else {
      const New = log.map(log =>{
        if( log.date === today ){
          return{
              name: name,
              src: src,
              date: (moment().format('dddd Do')),
              key: Math.floor(Math.random()*1000 +1)
          }
        }
        return log;
      })
      setLog(New);
    }
  }


  const ResetEmotion = () =>{
    setEmotion('');
  }



  return (
    <div className='mood'>
      <h1 className='moodTitle'>{Month} Moods </h1>
      <div className='emotionList'>

        {emotion ?
            <>
              <h3>Today you're Feeling</h3>
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

      <div className='EmotionLog flex'>
        {log.map(l =>
          <div className='LogItem'>
            <p className='logdate'>{l.date || date}</p>
            <img src={l.src} />
            <p className='logname'>{l.name}</p>
          </div>
        )}

      </div>

    </div>
  )
}

export default MoodTracker