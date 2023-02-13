import React from 'react'
import { Helmet } from 'react-helmet'
import Contacts from '../../components/container/contacts'
import Landing from '../../components/container/landing'
import Navbar from '../../components/container/navbar'
import Projects from '../../components/container/projects'
import About from '../../components/core-ui/about/about'
import Education from '../../components/core-ui/education/education'
import Experience from '../../components/core-ui/experience/experience'
import Skills from '../../components/core-ui/skills/skills'
import { headerData } from '../../data/headerData'
// import Certificate from '../../components/core-ui/certificate/certificate'

function HomePage() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>
            <Navbar />
            <Landing />
            <About />
            <Experience />
            <Skills />
            {/* <Certificate /> */}
            <Projects />
            <Education />
            <Contacts />
        </div>
    )
}

export default HomePage
