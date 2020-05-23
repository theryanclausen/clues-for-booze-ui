import { useState, useEffect } from 'react';

export default () => {
  const [streak, setStreak] = useState(0);
  const [isWinning, setIsWinning] = useState(true)
  useEffect(() => {
      const storedStreak = window.localStorage.getItem('streak')
      if(storedStreak){
          setStreak(parseInt(storedStreak))
      }
      const storedIsWinning = window.localStorage.getItem('isWinning') === 'true'
      if(!storedIsWinning){
          setIsWinning(false)
      }
  },[]);
  const answerQuestion = isCorrect =>{
      let newStreak = streak
      if(isWinning === isCorrect){
          newStreak ++
        }
        else{
            newStreak = 1
            setIsWinning(isCorrect)
            window.localStorage.setItem('isWinning', isCorrect.toString())
        }
        setStreak(newStreak)
        window.localStorage.setItem('streak', newStreak.toString())
  }
  return {streak, isWinning, answerQuestion};
}