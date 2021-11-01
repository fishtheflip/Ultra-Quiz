import React from 'react'
import ChoiceTest from '../choice-test'
import MainPageHeader from '../main-page-header'
import './main-page.css'

type MainPageProps = {
    setSubject: (item : string) => void,
    getDataFromBack: (item : string)=> void
}

const MainPage = ({setSubject, getDataFromBack}:MainPageProps) => {
    return (
        <div className="container">
            <MainPageHeader/>
            <ChoiceTest setSubject={setSubject} getDataFromBack={getDataFromBack}/>
        </div>
    )
}

export default MainPage
