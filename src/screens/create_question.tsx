import { useContext } from "react"

import MultipleAnswerMultipleChoice from "../components/create_answer_choices/multiple_answer_multiple_choice"
import { CreateQuestionContext } from "../provider/create_question_context"
import SingleAnswerMultipleChoice from "../components/create_answer_choices/single_answer_multiple_choice"
import SingleWordAnswer from "../components/create_answer_choices/single_word_answer"
import TrueOrFalse from "../components/create_answer_choices/true-or-false"
import { Bounce, ToastContainer } from "react-toastify"
import { ErrorMessageContext } from "../provider/error_message_context"
import InputField from "../components/field/input_field"
import SelectField from "../components/field/select_field"
import ActionButton from "../components/action_button"


function CreateQuestion() {

    const { year, score, typeOptions, type, question, isOnLoad, handleYearChange, handleTypeChange, handleScoreChange, handleQuestionChange, saveQuestion } = useContext(CreateQuestionContext)

    const { yearErrMessage, scoreErrMessage, questionErrMessage } = useContext(ErrorMessageContext)

    return (
        <div className={`flex flex-col`}>
            <i className={`text-4xl ri-menu-add-line mb-2`}/>
            <h1 className={`text-xl font-semibold mb-8`}>Create Question</h1>
            <div className={`space-y-8`}>
                <div className={`flex flex-row space-x-12`}>
                    <div>
                        <SelectField handleSelectChange={handleTypeChange} 
                            optionsValue={typeOptions} 
                            optionsLabel={["Multiple Answers Multiple Choice", "Single Answer Multiple Choice", "True or False", "Single Word Answer"]}
                            labelValue="Question Type" 
                            titleValue="question-type"
                            errMessage="" />
                    </div>
                    <InputField handleInputChange={handleYearChange}
                        inputType="text" 
                        errMessage={yearErrMessage} 
                        placeholderValue="YYYY" 
                        idValue="question-year" 
                        labelValue="Year"
                        value={year} />
                    <InputField handleInputChange={handleScoreChange} 
                        inputType="number" 
                        errMessage={scoreErrMessage} 
                        placeholderValue="Score" 
                        idValue="question-score" 
                        labelValue="Score" 
                        value={score} />
                </div>

                <div>
                    <div className={`font-semibold`}>Question Type</div>
                    <textarea value={question} onChange={handleQuestionChange} rows={4} className={`w-full mt-2 resize-none outline-none p-2 border-2 border-text rounded-sm`} id="question" placeholder="Enter your question"></textarea>
                    <div className={`${questionErrMessage === "" ? "hidden" : ""} absolute text-xs text-red-500 mt-1`}>{questionErrMessage}</div>
                </div>

                <div>
                    { type === "multiple-answer-multiple-choice"? <MultipleAnswerMultipleChoice /> : null }
                    { type === "single-answer-multiple-choice"? <SingleAnswerMultipleChoice /> : null }
                    { type === "single-word-answer"? <SingleWordAnswer /> : null }
                    { type === "true-or-false"? <TrueOrFalse /> : null }
                </div>
                <ActionButton action={saveQuestion} text={"Save"} icon={"ri-save-fill"} isOnLoad={isOnLoad}/>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    )
}

export default CreateQuestion