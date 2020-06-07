import { useState } from 'react';

export default () => {
    const [showSplash, setShowSplash] = useState(true)
    const [showAbout, setShowAbout] = useState(false)
    const [showCategories, setShowCategories] = useState(false)
    const [showQuestions, setShowQuestions] = useState(false)

    const off = () =>{
        showSplash && setShowSplash(false)
        showCategories && setShowCategories(false)
        showQuestions && setShowQuestions(false)
        showAbout && setShowAbout(false)
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
        abtOn: ()=>{
            off()
            setTimeout(()=>setShowAbout(true),300)
        },
        quesOff:()=>{
            off()
        }
    }
    return {showQuestions, showCategories, showSplash, showAbout, methods};
}