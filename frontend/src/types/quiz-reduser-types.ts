export interface InitialStateValue {
    currentPageR: string | null,
    currentSubjectR: string,
    correctAnswerR: number,
    currentQuestionR: number
}

export interface ActionValue{
    type: string,
    payload? : any
}