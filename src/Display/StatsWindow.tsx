import React from 'react'
import { Card, CardHeader, CardContent, makeStyles, Typography, Button } from '@material-ui/core'

const useStyles = makeStyles({
    card:{
        position:'absolute',
        top:'15px',
        right:'15px'
    }
})

export default ({ isWinning, streak, methods }) => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardHeader title='Current Streak' />
            <CardContent>
                <Typography>

                {streak} {isWinning ? 'correct':'incorrect'} answers in a row!
                </Typography>
                <Button fullWidth={true} onClick={methods.abtOn}>About</Button>
            </CardContent>
        </Card>
    )
}
