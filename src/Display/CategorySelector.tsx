import React from 'react'
import { 
    Card, 
    Select, 
    CardHeader, 
    CardContent, 
    FormControl,
    InputLabel,
    MenuItem,
    LinearProgress
 } from '@material-ui/core'
 import { useQuery } from '@apollo/client'
 import { loader } from 'graphql.macro'
 const query = loader('../data/schema/queryCategories.graphql')

const CategorySelector = ({ setCategory, category }) => {
    const { data:{categories=[]}={}, loading } = useQuery(query)

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCategory(event.target.value as string);
      };
    return(
    <Card>
        <CardHeader
            title="Select Your Category"
        />
        <CardContent>
            {loading && <LinearProgress />}
            <FormControl fullWidth>
                <InputLabel id="category-select-label">Category</InputLabel>
                <Select
                    labelId="category-select-label"
                    id="category-select"
                    autoWidth={true}
                    fullWidth={true}
                    variant='outlined'
                    value={category}
                    onChange={handleChange}
                >
                    {categories.map(({id,name}) =>(
                        <MenuItem key={id+name} value={id}>{name}</MenuItem>
                    ))}

                </Select>
            </FormControl>

        </CardContent>
    </Card>
)}

export default CategorySelector