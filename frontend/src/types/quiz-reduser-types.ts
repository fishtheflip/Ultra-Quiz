 export interface S {
    [key: string]: any
}


export interface InitialStateValue extends S {
    currentPageR: string | null,
    currentSubjectR: string,
    correctAnswerR: number,
    currentQuestionR:  number
}

export interface ActionValue{
    type: string,
    payload? : any
}