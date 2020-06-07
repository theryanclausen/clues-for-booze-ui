import React from 'react'
import { Card, CardHeader, CardContent, makeStyles, Typography, Button, CardActionArea } from '@material-ui/core'

const useStyles = makeStyles({
    cardRoot:{
        minWidth:"350px",
        maxWidth:"450px"
    },
    cardHeader:{
        textAlign:'center'
    },

})

export default ({ methods }) => {
    const classes = useStyles()
    return (
        <Card className={classes.cardRoot}>
            <CardHeader className={classes.cardHeader} title='Clues for Booze!' />
            <CardContent>
                <Typography align='center' gutterBottom={true} variant='subtitle1'>
                    The only online quiz where you can win a free cocktail*!
                </Typography>
                <Typography align='center' variant='body1'>
                    Answer correctly 5 times in a row and we will send a cocktail* right to your browser!
                </Typography>
            </CardContent>
            <Button  fullWidth={true} onClick={methods.catOn}>Start</Button>
            <CardActionArea>
                *Recipe
            </CardActionArea>
        </Card>
    )
}
