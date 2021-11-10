import React from 'react';
import ParticleBg from "particles-bg";
import {AiFillDownCircle, FaGithub} from "react-icons/all";
import {Fade} from 'react-awesome-reveal'
import {Button, Typography} from "antd";

const {Paragraph, Title} = Typography

function Home({data}) {

    if(!data) return null
    const {home} = data

    return (
        <header id="home" className="section" style={{height: `${window.innerHeight}px`}}>
            <ParticleBg type="circle" bg={true} />
            <div className="step" />
            <Fade bottom style={{height: '100%'}}>
                <div className="row" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                    <Title style={{color: '#fff', textShadow: 'rgb(126 126 126) 0px 2px', fontSize: '64px'}}>{home.name}</Title>
                    <Paragraph>
                        <Title level={4} style={{color: '#ddd', textAlign: 'center', lineHeight: '2.5rem', fontWeight: 'normal', fontFamily: 'Georgia, sans-serif'}}>
                            {home.description.split('\n').map((text, i) =>
                                 <span key={i}>{text.includes('Nordic') ?
                                     <><a style={{}} href={home.refsite} target="_blank">Nordic-Giant Project</a> {text.replace('Nordic-Giant Project', '')}</> : text}<br />
                                 </span>
                            )}
                        </Title>
                    </Paragraph>
                    <p>
                        <Button className="button" href={home.github} target="_blank" ref={buttonRef => {
                            if(buttonRef) buttonRef.style.setProperty('padding-top', '24px', 'important')
                        }}
                                style={{display: 'flex', alignItems: 'center'}} >
                            <FaGithub style={{marginRight: '15px'}}/>
                            <b>Github</b>
                        </Button>
                    </p>
                </div>
            </Fade>
            <p className="scrolldown" >
                <a className="smoothscroll" href="#about" >
                    <AiFillDownCircle style={{fontSize: '3rem'}} />
                </a>
            </p>
        </header>
    );
}

export default Home;