import React, { useState } from 'react'
import { Slide } from '@material-ui/core'
import CategorySelector from './CategorySelector'
import useStreak from './useStreak'
import useDisplay from './useDisplay'
import Splash from './Splash'
import StatsWindow from './StatsWindow'
import Question from './Question'
import About from './About'

const Content = () => {
    const {methods, showCategories, showQuestions, showSplash, showAbout} = useDisplay()
    const { streak, isWinning, answerQuestion } = useStreak()
    const [category, setCategory] =useState('')
    
    return <>
    <StatsWindow
        streak={streak}
        isWinning={isWinning}
        methods={methods}
    />
    <Slide
        direction='right' 
        in={showSplash} 
        mountOnEnter 
        unmountOnExit
        ><div>
        <Splash 
            methods={methods} 
        /></div>
    </Slide>
    <Slide
        direction='up' 
        in={showCategories} 
        mountOnEnter 
        unmountOnExit
        ><div>
        <CategorySelector 
            category={category}
            setCategory={setCategory}
            methods={methods} 
        /></div>
    </Slide>
    <Slide
        direction='down' 
        in={showQuestions} 
        mountOnEnter 
        unmountOnExit
        ><div>
        <Question 
            category={category}
            answerQuestion={answerQuestion} 
            methods={methods}
        /></div>
    </Slide>
    <Slide
        direction='left' 
        in={showAbout} 
        mountOnEnter 
        unmountOnExit
        ><div>
        <About
            methods={methods}
        /></div>
    </Slide>
    </>
}

export default Content
