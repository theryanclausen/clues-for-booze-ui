import React from 'react'
import { Card, 
    CardHeader, 
    CardContent, 
    makeStyles, 
    Typography, 
    Button, 
    Link as MUILink } from '@material-ui/core'

const useStyles = makeStyles({
    cardRoot:{
        minWidth:"350px",
        maxWidth:"450px"
    },
    cardHeader:{
        textAlign:'center'
    },
})

const Link = ({href, children}) => <MUILink target="_blank" href={href}>{children}</MUILink>


export default ({ methods }) => {
    const classes = useStyles()
    return (
        <Card className={classes.cardRoot}>
            <CardHeader className={classes.cardHeader} title='About Clues for Booze!' />
            <CardContent>
                <Typography  paragraph={true} variant='body2'>
                    Clues for Booze was written in TypeScript using React and Apollo Client for data management.{' '}
                     <Link href='https://github.com/theryanclausen/clues-for-booze-ui'>Check out the Repo!</Link>
                </Typography>
                <Typography  paragraph={true} variant='body2'>
                    This project utilizes a BFF (Backend For Frontend) pattern. 
                    All requests are relayed through an Apollo Graphql Server.{' '}
                     <Link href='https://github.com/theryanclausen/clues-for-booze-bff'>Check out the BFF Repo!</Link>
                </Typography>
                <Typography paragraph={true} variant='body2'>
                    Trivia questions pulled from <Link href='https://opentdb.com/'>Open Trivia Database</Link>.
                </Typography>
                <Typography align='center'>

                <Link href='https://ryanclausen.netlify.app/'>More From Ryan!</Link>
                </Typography>
            </CardContent>
            <Button  fullWidth={true} onClick={methods.catOn}>Back to Quiz</Button>
        </Card>
    )
}
