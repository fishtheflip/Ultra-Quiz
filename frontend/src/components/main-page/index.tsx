import React from 'react'
import ChoiceTest from '../choice-test'
import MainPageHeader from '../main-page-header'
import './main-page.css'

type MainPageProps = {
    setSubject: (item : string) => void
}

const MainPage = ({setSubject}:MainPageProps) => {
    return (
        <div className="container">
            <MainPageHeader/>
            <ChoiceTest setSubject={setSubject}/>
        </div>
    )
}

export default MainPage
