import React, { useEffect, useState, MouseEvent } from 'react'
import { 
    Card, 
    Select, 
    CardHeader, 
    CardContent, 
    FormControl,
    InputLabel,
    MenuItem,
    LinearProgress,
    Button,
    CardActions,
    makeStyles
 } from '@material-ui/core'
 import { useQuery } from '@apollo/client'
 import { loader } from 'graphql.macro'
 const query = loader('../data/schema/queryQuestion.graphql')

const useStyles = makeStyles({
    cardRoot:{
        minWidth:"350px"
    },
    answerBox:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:"space-between"
    },
    answerButton:{
        width:"48%",
        margin: '5px 0'
    },
    answerButtonBoo:{
        width:"100%",
        margin: '5px 0'
    },
    correctAnswerBoo:{
        width:"100%",
        background:'green',
        margin: '5px 0',
        color:'white'
    },
    wrongAnswerBoo:{
        width:"100%",
        background:'red',
        margin: '5px 0',
        color:'white'
    },
    correctAnswer:{
        width:"48%",
        background:'green',
        margin: '5px 0',
        color:'white'
    },
    wrongAnswer:{
        width:"48%",
        background:'red',
        margin: '5px 0',
        color:'white'
    }

    
})

type Answer = {
    answer:string 
    value:boolean
}

type Question ={
    question:string 
    answers: Answer[]
    multiple: boolean
}

const Question = ({ answerQuestion, category }) => {
    const { data, loading } = useQuery(query,{variables:{category}})
    const [question, setQuestion] = useState<Question>({question:'', answers:[], multiple:true})
    const [answered, setAnswered] = useState(false)
    const classes = useStyles()
    useEffect(() => {
        if(!loading){
            const q = data.question.question 
            console.log(q)
            const answers = [ 
                {answer:q.correctAnswer, value:true}, 
                ...q.incorrectAnswers.map(a =>(
                    {answer:a, value:false}
                    )
                )].sort((a,b)=> a.answer>= b.answer? -1:1)
            setQuestion({answers, question:q.question, multiple: q.questionType === 'multiple'})
        }
    }, [loading, data])
    const handleAnswer = (answer:boolean)=>(e: MouseEvent)=>{
        answerQuestion(answer)
        setAnswered(true)
    }
    return(
    <Card className={classes.cardRoot}>
        <CardHeader
            title={loading ? 'loading...': question.question}
        />
        <CardContent>
            <div className={classes.answerBox}>
                {question.answers.map(({answer,value}) =>{
                    let classKey:string = ''
                    if(!answered){
                        classKey = question.multiple ? 'answerButton':'answerButtonBoo'
                    }else{
                        if(question.multiple){
                            classKey= value ? 'correctAnswer':'wrongAnswer'
                        }else{
                            classKey= value ? 'correctAnswerBoo':'wrongAnswerBoo'
                        }
                    }
                    return (
                        <Button disabled={answered} className={classes[classKey]} onClick={handleAnswer(value)} key={answer}>
                            {answer}
                        </Button>
                    )
                })}
            </div>
            we'll see
        </CardContent>
    </Card>
)}

export default Question