import React from 'react'
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
    }
})

const Question = ({ answerQuestion, category }) => {
    const { data, loading } = useQuery(query,{variables:{category}})
    const classes = useStyles()
    console.log(data)
    return(
    <Card className={classes.cardRoot}>
        <CardHeader
            title={loading ? 'loading...': data.question.question.question}
        />
        <CardContent>
            
            we'll see
        </CardContent>
    </Card>
)}

export default Question