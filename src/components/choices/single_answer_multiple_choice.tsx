import { useContext } from "react"

import { CreateQuestionContext } from "../../provider/create_question_context"
import { EditQuestionContext } from "../../provider/edit_question_context"
import { ErrorMessageContext } from "../../provider/error_message_context"


function SingleAnswerMultipleChoice({mode}: {mode: string}) {

    const { optionsValue, isOptionsSelected, handleOptionValueChange, handleIsOptionsSelectedChange } = useContext(
        mode === "edit" ? EditQuestionContext : CreateQuestionContext
    )
    const { optionsErrMessage, noAnswerErrMessage } = useContext(ErrorMessageContext)

    return (
        <div>
            <div className={`flex flex-col mb-5 relative`}>
                <span className={`text-sm font-semibold`}>Question Choices</span>
                <span className={`text-sm text-gray-500`}>Select the correct answer</span>
                <span className={`${noAnswerErrMessage === "" ? "hidden" : ""}`}>
                    <div className={`absolute text-xs text-red-500`}>{noAnswerErrMessage}</div>
                </span>
            </div>
            <div className={`flex flex-col space-y-6`}>
                { ...optionsValue.map((value, index) => {
                    return (
                        <div className={`flex flex-row space-x-4`}>
                            <input type="radio" 
                                id={`option-${index}`} 
                                name="option" 
                                onChange={(e) => {handleIsOptionsSelectedChange(index, e)}} 
                                className={`w-5`} 
                                checked={isOptionsSelected[index]}/> 
                            <label htmlFor={`option-${index}`}  className={`w-full relative`}>
                                {``}
                                <input type="text" 
                                    value={value} 
                                    onChange={(e) => {handleOptionValueChange(index, e)}} 
                                    className={`w-full text-sm py-2 outline-none border-b-2 border-accent-2`} 
                                    placeholder={`Enter Option ${index + 1}`}/>
                                <span className={`${optionsErrMessage[index] === "" ? "hidden" : ""}`}>
                                    <div className={`absolute text-xs text-red-500 mt-1`}>{optionsErrMessage[index]}</div>
                                </span>
                            </label>
                        </div>
                    )}
                )}
            </div>
        </div>
        
    )
}

export default SingleAnswerMultipleChoice