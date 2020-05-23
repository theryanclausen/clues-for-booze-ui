import React from 'react'
import { Card, CardHeader, CardContent, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    card:{
        position:'absolute',
        top:'15px',
        right:'15px'
    }
})

export default ({ isWinning, streak }) => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardHeader title='Current Streak' />
            <CardContent>
                {streak} {isWinning ? 'correct':'incorrect'} answers in a row!
            </CardContent>
        </Card>
    )
}
