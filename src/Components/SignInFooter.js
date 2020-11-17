import React, { useEffect, useState } from 'react'
import light from '../Assets/light.svg'
import arrow from '../Assets/arrow.svg'
import arrowWhite from '../Assets/arrow-white.svg'
import dark from '../Assets/dark.svg'

function SignInFooter() {
    const theme = localStorage.getItem('theme')
    const [themeState, setThemeState] = useState(theme ? theme : 'light')

    useEffect(() => {
        if(theme) {
            document.documentElement.setAttribute('data-theme', theme)
        }
        else {
            localStorage.setItem('theme', 'light')
            document.documentElement.setAttribute('data-theme', 'light')
        }
    }, [])

    const handleToggle = () => {
        // theme === 'light' ? setThemeColor('dark') : setThemeColor('light')
        document.documentElement.getAttribute('data-theme') !== 'dark' ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', 'light')
        theme === 'light' ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light')
        themeState === 'light' ? setThemeState('dark') : setThemeState('light')
    }
    const handleChange = (e) => {
        console.log(e.target.value)
        document.documentElement.setAttribute('lang', e.target.value)
    }
    return (
        <div className="sign-in-footer" >
            <div className="right" >
                <img src={themeState === 'light' ? light : dark} alt="brightness-logo" className="brightness-logo" onClick={handleToggle} />
                <div className="custom-select" >
                    <select name="languages" id="select-language" className="select-language" onChange={handleChange}>
                        <option lang="en" value="en">English</option>
                        <option lang="de" value="de">Deutsch</option>
                        <option lang="fr" value="fr">Français</option>
                        <option lang="it" value="it">Italiano</option>
                    </select>
                    <img src={themeState === 'light' ? arrow : arrowWhite} className="select-arrow" alt="arrow-logo" />
                </div>
            
            </div>
            <div className="left" >
                <a href="/" >Help</a>
                <a href="/" >Privacy</a>
                <a href="/" >Terms</a>
            </div>
        </div>
    )
}

export default SignInFooter
