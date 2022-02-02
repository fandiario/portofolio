import React, {useState, useEffect} from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faPhone, 
    faEnvelope,
    faBars,
} from '@fortawesome/free-solid-svg-icons'

import {
    faGithub
} from '@fortawesome/free-brands-svg-icons'

import {
    Carousel,
    Dropdown,
    Modal
} from "react-bootstrap"

import AOS from "aos"

import profile from "../../supports/assets/images/Fandi Ario S (3x4) - 1.jpg"
import resume from "../../supports/assets/documents/CV_Fandi Ario Setiawan.pdf"

import projectA_1 from "../../supports/assets/images/ss/capt-1.JPG"
import projectA_2 from "../../supports/assets/images/ss/capt-2.JPG"
import projectA_3 from "../../supports/assets/images/ss/capt-3.JPG"
import projectA_4 from "../../supports/assets/images/ss/capt-4.JPG"
import projectA_5 from "../../supports/assets/images/ss/capt-5.JPG"
import projectA_6 from "../../supports/assets/images/ss/capt-6.JPG"
import projectA_7 from "../../supports/assets/images/ss/capt-7.JPG"
import projectA_8 from "../../supports/assets/images/ss/capt-8.JPG"
import projectA_9 from "../../supports/assets/images/ss/capt-9.JPG"
import projectA_10 from "../../supports/assets/images/ss/capt-10.JPG"
import projectA_11 from "../../supports/assets/images/ss/capt-11.JPG"
import projectA_12 from "../../supports/assets/images/ss/capt-12.JPG"
import projectA_13 from "../../supports/assets/images/ss/capt-13.JPG"

import projectB_1 from "../../supports/assets/images/ss/capt-14.jpg"
import projectB_2 from "../../supports/assets/images/ss/capt-15.jpg"
import projectB_3 from "../../supports/assets/images/ss/capt-16.jpg"
import projectB_4 from "../../supports/assets/images/ss/capt-17.jpg"
import projectB_5 from "../../supports/assets/images/ss/capt-18.jpg"
import projectB_6 from "../../supports/assets/images/ss/capt-19.jpg"
import projectB_7 from "../../supports/assets/images/ss/capt-20.jpg"
import projectB_8 from "../../supports/assets/images/ss/capt-21.jpg"

import projectC_1 from "../../supports/assets/images/ss/capt-22.jpg"
import projectC_2 from "../../supports/assets/images/ss/capt-23.jpg"

import projectD_1 from "../../supports/assets/images/ss/capt-24.jpg"
import projectD_2 from "../../supports/assets/images/ss/capt-25.jpg"
import projectD_3 from "../../supports/assets/images/ss/capt-26.jpg"

const Home = () => {

    const [showModal, setShowModal] = useState (false)
    const [slideModal, setSlideModal] = useState (null)
    const [nameModal, setNameModal] = useState (null)
    const [descModal, setDescModal] = useState (null)
    const [urlModal, setUrlModal] = useState (null)

    const projectA = [
        projectA_1,
        projectA_2,
        projectA_3,
        projectA_4,
        projectA_5,
        projectA_6,
        projectA_7,
        projectA_8,
        projectA_9,
        projectA_10,
        projectA_11,
        projectA_12,
        projectA_13,
    ]
    const nameProjectA = "Digital Talent Kominfo"
    const descProjectA = `Government project for Digital Talent Scholarship Indonesia (Digitalent) by Kementerian Komunikasi dan Informatika Republik Indonesia or Kominfo (Indonesian's Ministry of Communication and Information). Take part in publication module and admin dashboard of publication module. Also take part in partnership module.`
    const urlProjectA = `https://digitalent.kominfo.go.id/`

    const projectB = [
        projectB_1,
        projectB_2,
        projectB_3,
        projectB_4,
        projectB_5,
        projectB_6,
        projectB_7,
        projectB_8
    ]
    const nameProjectB = "GetItDone"
    const descProjectB = `A simple to-do list project to organize and assigned task for your team. Same concept with trello.com. Able to assign and organize multiple project for each user. Each task is assigned to different categories. It also possible to set your own category and make your own category.`
    const urlProjectB = `https://getitdone-client.web.app/`

    const projectC = [
        projectC_1,
        projectC_2,
    ]
    const nameProjectC = "SuperChat"
    const descProjectC = `A simple interactive chat without registering any id or email. User can type in their username and enter a room. User can type in the room’s title to join another user in the same room. User can also see who’s typing at the moment and receive reply immediately.`
    const urlProjectC = `https://superchat-app.herokuapp.com/`

    const projectD = [
        projectD_1,
        projectD_2,
        projectD_3
    ]
    const nameProjectD = "Pharmacy Store"
    const descProjectD = `A simple e-commerce web to simulate product catalogue and transaction check out with register and login user.`
    const urlProjectD = `kelompok2.purwadhikafs2.com`

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    const onShowModal = (slide, name, desc, url) => {
        setShowModal (true)
        setSlideModal(slide)
        setNameModal(name)
        setDescModal(desc)
        setUrlModal(url)
    }

    const onHideModal = () => {
        setShowModal(false)
        setSlideModal(null)
        setNameModal(null)
        setDescModal(null)
        setUrlModal(null)
    }

    return (
        <div>
            {/* navbar */}
            <div className="bg-primary d-none d-lg-flex flex-row justify-content-between text-white py-3 px-2">
                <div 
                    className="font-weight-bold px-3 border-bold-white"
                >
                   Welcome !
                </div>

                <div className="d-flex flex-row">
                    <a href="#about-me" className="text-decoration-none">
                        <div className="mx-1 font-weight-bold text-white">
                            About Me
                        </div>
                    </a>
                    
                    <a href="#education" className="text-decoration-none">
                        <div className="mx-1 font-weight-bold text-white">
                            Education
                        </div>
                    </a>
                    
                    <a href="#experience" className="text-decoration-none">
                        <div className="mx-1 font-weight-bold text-white">
                            Experiences
                        </div>
                    </a>
                   
                   <a href="#project" className="text-decoration-none">
                        <div className="mx-1 font-weight-bold text-white">
                            Projects
                        </div>
                   </a>
                    
                    <a href="#contact" className="text-decoration-none">
                        <div className="mx-1 font-weight-bold text-white">
                            Contact
                        </div>
                    </a>
                </div>
            </div>
            {/* End of Navbar */}

            {/* Navbar Mobile */}
            <div className="bg-primary d-flex flex-row justify-content-between text-white py-3 px-2 d-md-none">
                <Dropdown>
                    <Dropdown.Toggle>
                        <FontAwesomeIcon icon={faBars}/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <a href="#about-me" className="text-decoration-none">
                                <div className="mx-1 font-weight-bold text-dark">
                                    About Me
                                </div>
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a href="#education" className="text-decoration-none">
                                <div className="mx-1 font-weight-bold text-dark">
                                    Education
                                </div>
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a href="#experience" className="text-decoration-none">
                                <div className="mx-1 font-weight-bold text-dark">
                                    Experiences
                                </div>
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a href="#project" className="text-decoration-none">
                                <div className="mx-1 font-weight-bold text-dark">
                                    Projects
                                </div>
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a href="#contact" className="text-decoration-none">
                                <div className="mx-1 font-weight-bold text-dark">
                                    Contact
                                </div>
                            </a>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            {/* Jumbotron */}
            <div className="bg-primary d-flex justify-content-center align-content-center">
                <div 
                    className="border-bold-white text-white px-3 my-25"
                    data-aos="fade-up"
                >
                    <h1>
                        Hi, I'm Fandi
                    </h1>
                </div>
            </div>
            {/* End of Jumbotron */}

            {/* Picture */}
            <div 
                className="d-flex justify-content-center mt-n15"
                data-aos="fade-up"
            >
                <img
                    src={profile}
                    className="rounded-circle profile-style img-fluid border border-bold-white shadow"
                    alt="profile-pic"
                />
            </div>
            {/* End of Picture */}

            {/* Head */}
            <div 
                className="d-flex justify-content-center align-content-center mt-3"
                data-aos="fade-up"
            >
                <div className="text-center">
                    <h3>
                        Fandi Ario Setiawan
                    </h3>
                    <h5>
                        Front End Developer
                    </h5>
                    <div>
                    
                </div>
                    <hr/>
                </div>
                
            </div>
            {/* End of Head */}

            {/* About Me */}
            <div 
                className="my-5 mx-3"
                data-aos="fade-up"
            >
                <div className="text-center" id="about-me">
                    <h5>
                        About Me
                    </h5>
                </div>
                <div className="border-bold-black d-flex flex-md-row flex-column p-3 align-content-between shadow">
                    <div className="col-12 text-justify mt-2">
                        I have several experiences at mechanical project and factory job. Understanding in time scheduling in project and project monitoring. 
                        Interested in web coding and programming with javascript. Proficient with MySQL, React.js, Rest API ,HTML, CSS and familiar with React Redux. Able to perform with GIT and Scrum project.
                    </div>
                </div>
            </div>
            {/* End of about me */}

            {/* Education */}
            <div 
                className="mb-5 mx-3"
                data-aos="fade-up"
            >
                <div className="text-center"  id="education">
                    <h5>
                        Education and Certifications
                    </h5>
                </div>
                <div className=" d-flex flex-md-row flex-column p-3 align-content-between shadow">
                    <div className="col-12 col-md-6 py-3">
                        <h5 className="mb-2">
                            Education
                        </h5>
                        <div className="mb-3">
                            <div className="font-weight-bold text-primary">
                                January - July 2021
                            </div>
                            <div className="font-weight-bold">
                                Full Stack Developer - Purwadhika Digital School
                            </div>
                            <div>
                                Graduate from Purwadhika Digital School as A Full Stack Developer.
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="font-weight-bold text-primary">
                                2010 - 2014
                            </div>
                            <div className="font-weight-bold">
                                Undergraduate of Mech. Engineering Universitas Indonesia 
                            </div>
                            <div>
                                Graduate from Mechanical Engineering Faculty Of Universitas Indonesia with GPA 3.02
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="font-weight-bold text-primary">
                                2007 - 2010
                            </div>
                            <div className="font-weight-bold">
                                Graduate from SMAN 2 Kota Tangerang Selatan
                            </div>
                            <div>
                                Graduate from SMAN 2 Kota Tangerang Selatan With science major.
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 bg-primary text-white text-justify py-3">
                        <h5 className="mb-2 mx-3">
                            Certifications
                        </h5>
                        <div className="mb-3 mx-3">
                            <div className="font-weight-bold">
                                July 2021
                            </div>
                            <div className="font-weight-bold">
                                Purwadhika Digital School Fullstack Web Developer Course 
                            </div>
                        </div>
                        <div className="mb-3 mx-3">
                            <div className="font-weight-bold">
                                September 2014
                            </div>
                            <div className="font-weight-bold">
                                Undergraduate of Mech. Engineering Universitas Indonesia
                            </div>
                        </div>
                        <div className="mb-3 mx-3">
                            <div className="font-weight-bold">
                                September 2014
                            </div>
                            <div className="font-weight-bold">
                                TOEFL Score of 547 from LBI Universitas Indonesia
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end of Education */}

            {/* Experience */}
            <div 
                className="mb-5 mx-3"
                data-aos="fade-up"
            >
                <div className="text-center"  id="experience">
                    <h5>
                        Skills and Experiences
                    </h5>
                </div>

                <div className="border-bold-black d-flex flex-md-row flex-column p-3 align-content-between shadow">
                    
                    <div className="col-12 col-md-3 bg-primary text-white text-justify py-3">
                        <h5 className="mb-3 mx-3">
                            Skills
                        </h5>
                        <div className="mb-3 mx-3">
                            <div className="font-weight-bold">
                                React.js
                            </div>
                        </div>
                        <div className="mb-3 mx-3">
                            <div className="font-weight-bold">
                                Next.js
                            </div>
                        </div>
                        <div className="mb-3 mx-3">
                            <div className="font-weight-bold">
                                React-Redux
                            </div>
                        </div>
                        <div className="mb-3 mx-3">
                            <div className="font-weight-bold">
                                HTML
                            </div>
                        </div>
                        <div className="mb-3 mx-3">
                            <div className="font-weight-bold">
                                CSS
                            </div>
                        </div>
                        <div className="mb-3 mx-3">
                            <div className="font-weight-bold">
                                GIT
                            </div>
                        </div>
                        <div className="mb-3 mx-3">
                            <div className="font-weight-bold">
                                MySQL
                            </div>
                        </div>
                        <div className="mb-3 mx-3">
                            <div className="font-weight-bold">
                                Javascript
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-9 py-3">
                        <h5 className="mb-2 mx-3">
                            Experiences
                        </h5>
                        <div className="mb-3 mx-3">
                            <div className="font-weight-bold text-primary">
                                August 2021 - Dec 2021
                            </div>
                            <div className="font-weight-bold">
                                Front End Developer
                            </div>
                            <div>
                                Front End Developer for Kominfo Digitalent Project. Front End Library using NEXT JS with Bootstrap. Working with GitLab and familiar with Scrum Project.
                            </div>
                        </div>
                        <div className="mb-3 mx-3">
                            <div className="font-weight-bold text-primary">
                                November 2019 - May 2020
                            </div>
                            <div className="font-weight-bold">
                                Staff New Part Dev. Engineering Division, PT. Garuda Metalindo 
                            </div>
                            <div>
                                On probation staff of Engineering Division of PT. Garuda Metalindo. Communicating with representation of automotive plant factory. Project scheduling and administration for planning a new part development. 
                            </div>
                        </div>
                        <div className="mb-3 mx-3">
                            <div className="font-weight-bold text-primary">
                                November 2018 - October 2019
                            </div>
                            <div className="font-weight-bold">
                                Sales Engineer, PT Jaya Teknik Indonesia
                            </div>
                            <div>
                                Able to communicate with project owner and head engineer about part requirement and procurement. Project bidding and administration to procure machinery part for a construction project.
                            </div>
                        </div>
                        <div className="mb-3 mx-3">
                            <div className="font-weight-bold text-primary">
                                2016 - 2018
                            </div>
                            <div className="font-weight-bold">
                                Mill Quality Assistant, PT Bumitama Gunajaya Agro
                            </div>
                            <div>
                                Supervising quality of process and product from palm mill plant in Central Kalimantan. Examine raw material quality until finished product and delivery in barge ship. 
                            </div>
                        </div>
                        <div className="mb-3 mx-3">
                            <div className="font-weight-bold text-primary">
                                May - November 2015 
                            </div>
                            <div className="font-weight-bold">
                                Junior Mechanical Engineer, PT. Adhi Karya Persero Tbk.
                            </div>
                            <div>
                                On probation junior mechanical engineer on engineering divison of PT Adhi Karya Persero Tbk Regional - 1. Project scheduling and administration for bidding construction project
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* End of experience */}

            {/* Project */}
            <div 
                className="mb-5 mx-3"
                data-aos="fade-up"
            >
                <div className="text-center" id="project">
                    <h5>
                        Projects
                    </h5>
                </div>
                <div className="d-flex flex-wrap flex-row mt-5 justify-content-between align-items-start">
                    <div 
                        className="col-12 col-md-3 mt-3 d-flex justify-content-center flex-column p-3 clickable-element"
                        onClick={() => onShowModal(projectA, nameProjectA, descProjectA, urlProjectA)}
                    >
                        <div className="p-2 border-bold-black rounded shadow d-flex justify-content-center">
                            <Carousel
                                controls={false}
                                indicators={false}
                            >
                                {
                                    projectA.map ((el, i) => {
                                        return (
                                            <Carousel.Item key={i}>
                                                <img 
                                                    src={el} 
                                                    alt="slide-project"
                                                    className="img-fluid carousel-image-size" 
                                                />
                                            </Carousel.Item> 
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                        <div className="font-weight-bold mt-3 bg-primary text-white p-2 rounded-top">
                            Project : {nameProjectA}
                        </div>
                        <div className="bg-primary p-2 rounded-bottom shadow">
                            <a 
                                href={urlProjectA}
                                className="text-decoration-none text-white"
                            >
                                {urlProjectA}
                            </a>
                        </div>
                    </div>

                    <div 
                        className="col-12 col-md-3 mt-3 d-flex justify-content-center flex-column p-3 clickable-element"
                        onClick={() => onShowModal(projectB, nameProjectB, descProjectB, urlProjectB)}
                    >
                        <div className="p-2 border-bold-black rounded shadow d-flex justify-content-center">
                            <Carousel
                                controls={false}
                                indicators={false}
                            >
                                {
                                    projectB.map ((el, i) => {
                                        return (
                                            <Carousel.Item key={i}>
                                                <img 
                                                    src={el} 
                                                    alt="slide-project"
                                                    className="img-fluid carousel-image-size" 
                                                />
                                            </Carousel.Item> 
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                        <div className="font-weight-bold mt-3 bg-primary text-white p-2 rounded-top">
                            Project : {nameProjectB}
                        </div>
                        <div className="bg-primary p-2 rounded-bottom shadow">
                            <a 
                                href={urlProjectB}
                                className="text-decoration-none text-white"
                            >
                                {urlProjectB}
                            </a>
                        </div>
                    </div>

                    <div 
                        className="col-12 col-md-3 mt-3 d-flex justify-content-center flex-column p-3 clickable-element"
                        onClick={() => onShowModal(projectC, nameProjectC, descProjectC, urlProjectC)}
                    >
                        <div className="p-2 border-bold-black rounded shadow d-flex justify-content-center">
                            <Carousel
                                controls={false}
                                indicators={false}
                            >
                                {
                                    projectC.map ((el, i) => {
                                        return (
                                            <Carousel.Item key={i}>
                                                <img 
                                                    src={el} 
                                                    alt="slide-project"
                                                    className="img-fluid carousel-image-size" 
                                                />
                                            </Carousel.Item> 
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                        <div className="font-weight-bold mt-3 bg-primary text-white p-2 rounded-top">
                            Project : {nameProjectC}
                        </div>
                        <div className="bg-primary p-2 rounded-bottom shadow">
                            <a 
                                href={urlProjectC}
                                className="text-decoration-none text-white"
                            >
                                {urlProjectC}
                            </a>
                        </div>
                    </div>

                    <div 
                        className="col-12 col-md-3 mt-3 d-flex justify-content-center flex-column p-3 clickable-element"
                        onClick={() => onShowModal(projectD, nameProjectD, descProjectD, urlProjectD)}
                    >
                        <div className="p-2 border-bold-black rounded shadow d-flex justify-content-center">
                            <Carousel
                                controls={false}
                                indicators={false}
                            >
                                {
                                    projectD.map ((el, i) => {
                                        return (
                                            <Carousel.Item key={i}>
                                                <img 
                                                    src={el} 
                                                    alt="slide-project"
                                                    className="img-fluid carousel-image-size" 
                                                />
                                            </Carousel.Item> 
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                        <div className="font-weight-bold mt-3 bg-primary text-white p-2 rounded-top">
                            Project : {nameProjectD}
                        </div>
                        <div className="bg-primary p-2 rounded-bottom shadow">
                            <a 
                                href={urlProjectD}
                                className="text-decoration-none text-white"
                            >
                                {urlProjectD}
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>  
            {/* End of Project */}

            {/* Modal */}
            <Modal
                show={showModal}
                onHide={onHideModal}
            >
                <Modal.Header
                    className="bg-primary"
                >
                    <h5 className="text-white">
                        {nameModal}
                    </h5>
                </Modal.Header>
                <Modal.Body>
                    {
                        slideModal ?
                            <div>
                                <Carousel
                                    indicators={false}
                                    nextLabel={false}
                                    prevLabel={false}
                                    variant="dark"
                                >
                                    {
                                        slideModal.map ((el, i) => {
                                            return (
                                                <Carousel.Item key={i}>
                                                    <img 
                                                        src={el} 
                                                        alt="slide-project"
                                                        className="img-fluid px-5" 
                                                    />
                                                </Carousel.Item> 
                                            )
                                        })
                                    }
                                </Carousel>
                            </div>
                        :
                            <div>
                                No data
                            </div>
                    }
                    
                    <div>
                        {
                            nameModal ?
                                <div>
                                    <div className="my-3 txt-justify">
                                        {descModal}
                                    </div>
                                    <a href={urlModal}>
                                        {urlModal}
                                    </a>
                                </div>
                            :
                                <div>
                                    No data
                                </div>
                        }

                    </div>
                </Modal.Body>
            </Modal>
            {/* End of Modal */}

            {/* Button Resume */}
            <div 
                className="my-5 d-flex justify-content-center"
                data-aos="fade-up"
            >
                <button
                    className="btn btn-primary rounded-pill btn-lg"
                >
                    <a 
                        href={resume}
                        target='_blank'
                        className="text-decoration-none text-white"
                    >
                        My Resume
                    </a>
                    
                </button>
            </div>
            {/* End of Button Resume */}

            {/* Contact */}
            <div 
                className="bg-primary text-white"
            >
                <div className="text-center pt-3" id="contact">
                    <h5>
                        Contact Me
                    </h5>
                    <div className="text-justify py-3">
                        Feel free to contact me and check my social account.
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row">
                    <div 
                        className="col-12 col-md-5 d-flex flex-column justify-content-start justify-content-md-end"
                    >
                        <div 
                            className="d-flex flex-row mb-3 ms-3 justify-content-center"
                        >
                            <div className="col-1 col-md-7 d-flex justify-content-md-end mt-1">
                                <FontAwesomeIcon 
                                    icon={faPhone}
                                    className="me-3"
                                />
                            </div>
                            <div className="col-7 col-md-4">
                                0812-1271-5750
                            </div>
                        </div>
                
                        <div 
                            className="d-flex flex-row mb-3 ms-3 justify-content-center"
                        >
                            <div className="col-1 col-md-7 d-flex justify-content-md-end mt-1">
                                <FontAwesomeIcon 
                                    icon={faEnvelope}
                                    className="me-3"
                                />
                            </div>
                            <div className="col-7 col-md-4">
                                fandi.ario10@gmail.com
                            </div>
                        </div>
                    </div>
                    <div 
                        className="col-12 col-md-5 d-flex flex-column justify-content-start justify-content-md-end"
                    >
                        <div 
                            className="d-flex flex-row mb-3 ms-3 justify-content-center "
                        >
                            <div className="col-1 col-md-7 d-flex justify-content-md-end mt-1">
                                <FontAwesomeIcon 
                                    icon={faGithub}
                                    className="me-3"
                                />
                            </div>
                            <div className="col-7 col-md-4">
                                <a 
                                    href="https://github.com/fandiario"
                                    className="text-white text-decoration-none"
                                >
                                    fandiario
                                </a>
                            </div>
                        </div>
                
                    </div>
                </div>
                
                
            </div>
            {/* End of Contact */}
            
        </div>
    )
}

export default Home