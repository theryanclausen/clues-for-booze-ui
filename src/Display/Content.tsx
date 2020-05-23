import React, { useState } from 'react'
import { Slide } from '@material-ui/core'
import CategorySelector from './CategorySelector'
import useStreak from './useStreak'
import StatsWindow from './StatsWindow'
import Question from './Question'

const Content = () => {
    const [showCategories, setShowCategories] = useState(true)
    const [category, setCategory] =useState('')
    const { streak, isWinning, answerQuestion } = useStreak()
    return <>
    <StatsWindow
        streak={streak}
        isWinning={isWinning}
    />
    <Slide
        direction='up' 
        in={showCategories} 
        mountOnEnter 
        unmountOnExit
        ><div>
        <CategorySelector 
            category={category}
            setCategory={setCategory}
            setShowCategories={setShowCategories} 
        /></div>
    </Slide>
    <Slide
        direction='down' 
        in={!showCategories} 
        mountOnEnter 
        unmountOnExit
        ><div>
        <Question 
            category={category}
            answerQuestion={answerQuestion} 
        /></div>
    </Slide>
    </>
}

export default Content
