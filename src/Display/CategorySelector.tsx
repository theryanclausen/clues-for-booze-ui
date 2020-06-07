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
    makeStyles
 } from '@material-ui/core'
 import { useQuery } from '@apollo/client'
 import { loader } from 'graphql.macro'
 const query = loader('../data/schema/queryCategories.graphql')

const useStyles = makeStyles({
    cardRoot:{
        minWidth:"350px"
    }
})

const CategorySelector = ({ setCategory, category, methods }) => {
    const { data:{categories=[]}={}, loading } = useQuery(query)
    const classes = useStyles()
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCategory(event.target.value as string);
      };
    return(
    <Card className={classes.cardRoot}>
        <CardHeader
            title="Select Your Category"
        />
        <CardContent>
            
            <FormControl fullWidth>
                <InputLabel id="category-select-label">Category</InputLabel>
                <Select
                    labelId="category-select-label"
                    id="category-select"
                    autoWidth={true}
                    fullWidth={true}
                    value={category}
                    onChange={handleChange}
                >
                    {categories.map(({id,name}) =>(
                        <MenuItem key={id+name} value={id}>{name}</MenuItem>
                    ))}

                </Select>
                {loading && <LinearProgress />}
            </FormControl>
               <Button
                style={{marginTop:"5px"}}
                fullWidth={true}
                disabled={!Boolean(category)} 
                onClick={methods.quesOn}>
                    Start The Quiz
                </Button>
        </CardContent>
    </Card>
)}

export default CategorySelector