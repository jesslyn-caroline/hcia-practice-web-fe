import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./user_context";

export const ErrorMessageContext = createContext({
    userIdErrMessage: "", 
    usernameErrMessage: "", 
    passwordErrMessage: "", 
    confirmPasswordErrMessage: "", 

    questionErrMessage: "", 
    yearErrMessage: "", 
    scoreErrMessage: "", 
    optionsErrMessage: ["", "", "", ""], 
    noAnswerErrMessage: "",

    classCodeErrMessage: "",

    setUserIdErrMessage: (message: string) => { console.log(message) },
    setUsernameErrMessage: (message: string) => { console.log(message) },
    setPasswordErrMessage: (message: string) => { console.log(message) },
    setConfirmPasswordErrMessage: (message: string) => { console.log(message) },

    setQuestionErrMessage: (message: string) => { console.log(message) },
    setYearErrMessage: (message: string) => { console.log(message) },
    setScoreErrMessage: (message: string) => { console.log(message) },
    setOptionsErrMessage: (message: string[]) => { console.log(message) },
    setNoAnswerErrMessage: (message: string) => { console.log(message) },

    setClassCodeErrMessage: (message: string) => { console.log(message) },

    resetErrMessage: () => { console.log("reset") }
})

function ErrorMessageProvider({children} : {children: React.ReactNode}) {

    const { currentActiveRoute } = useContext(UserContext)
    
    // === login and signup ===
    const [userIdErrMessage, setUserIdErrMessage] = useState<string>("")
    const [usernameErrMessage, setUsernameErrMessage] = useState<string>("")
    const [passwordErrMessage, setPasswordErrMessage] = useState<string>("")

    const [confirmPasswordErrMessage, setConfirmPasswordErrMessage] = useState<string>("")

    // =======================

    // === create question ===
    const [questionErrMessage, setQuestionErrMessage] = useState<string>("")
    const [yearErrMessage, setYearErrMessage] = useState<string>("")
    const [scoreErrMessage, setScoreErrMessage] = useState<string>("")
    const [optionsErrMessage, setOptionsErrMessage] = useState<string[]>(["", "", "", ""])
    const [noAnswerErrMessage, setNoAnswerErrMessage] = useState<string>("")

    // =======================


    // === class code for student ===

    const [classCodeErrMessage, setClassCodeErrMessage] = useState<string>("")

    // ==============================

    function resetErrMessage () {
        setUserIdErrMessage("")
        setUsernameErrMessage("")
        setPasswordErrMessage("")
        setConfirmPasswordErrMessage("")

        setQuestionErrMessage("")
        setYearErrMessage("")
        setScoreErrMessage("")
        setOptionsErrMessage(["", "", "", ""])
        setNoAnswerErrMessage("")

        setClassCodeErrMessage("")
    }

    useEffect(() => {
        resetErrMessage()
    }, [currentActiveRoute])

    return (
        <ErrorMessageContext.Provider 
            value={{
                userIdErrMessage, 
                usernameErrMessage, 
                passwordErrMessage, 
                confirmPasswordErrMessage, 
                
                questionErrMessage, 
                yearErrMessage, 
                scoreErrMessage, 
                optionsErrMessage, 
                noAnswerErrMessage, 

                classCodeErrMessage,

                setUserIdErrMessage, 
                setUsernameErrMessage, 
                setPasswordErrMessage, 
                setConfirmPasswordErrMessage, 
                setQuestionErrMessage,
                setYearErrMessage,
                setScoreErrMessage,
                setOptionsErrMessage,
                setNoAnswerErrMessage,
                setClassCodeErrMessage,
                resetErrMessage
            }}>
            { children }
        </ErrorMessageContext.Provider>
    )
}

export default ErrorMessageProvider