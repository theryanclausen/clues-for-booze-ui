import { useState } from 'react';
export const displayConstants ={
    SPL:'SPL',
    CAT:'CAT',
    QUES:'QUES'
}
export default () => {
    const [showSplash, setShowSplash] = useState(true)
    const [showCategories, setShowCategories] = useState(false)
    const [showQuestions, setShowQuestions] = useState(false)

    const off = () =>{
        showSplash && setShowSplash(false)
        showCategories && setShowCategories(false)
        showQuestions && setShowQuestions(false)
    }

    const methods = {
        catOn: ()=>{
            off()
            setTimeout(()=>setShowCategories(true),300)
        },
        quesOn: ()=>{
            off()
            setTimeout(()=>setShowQuestions(true),300)
        },
        quesOff:()=>{
            off()
        }
    }
    return {showQuestions, showCategories, showSplash, methods};
}