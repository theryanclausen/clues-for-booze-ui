import React, { useState } from 'react'
import CategorySelector from './CategorySelector'

const Content = () => {
    const [category, setCategory] =useState('')
    // if(category === ''){
        return <CategorySelector 
                    category={category}
                    setCategory={setCategory} 
                />
    // }
    // return <div/>
}

export default Content
