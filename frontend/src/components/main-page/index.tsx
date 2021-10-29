import React from 'react'
import ChoiceTest from '../choice-test'
import MainPageHeader from '../main-page-header'
import './main-page.css'

const MainPage = () => {
    return (
        <div className="container">
            <MainPageHeader/>
            <ChoiceTest/>
        </div>
    )
}

export default MainPage
