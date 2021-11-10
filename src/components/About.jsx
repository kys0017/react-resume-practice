import React, {useRef} from 'react';
import {Fade} from "react-awesome-reveal";
import {Avatar, Col, Image, Row} from "antd";

function About({data}) {

    if (!data) return null
    const {home} = data

    return (
        <section id="about" className="section" style={{backgroundColor: '#12b886'}}>
            <div className="step"/>
            <Fade direction="up" duration={1000}>
                <Row gutter={[0, 16]} className="row"
                     >
                    <Col span={6} xs={24} md={6} style={{textAlign: 'center'}}>
                        <Avatar size={128} src={<Image alt="resume image" src={`images/${home.image}`}/>}/>
                    </Col>
                    <Col span={12} xs={24} md={12} style={{color: '#fff'}}>
                        <h2 style={{color: '#fff'}}>About Me</h2>
                        <p><em>{home.job}</em></p>
                        <p>{home.bio.split('\n').map((text, i) => <span key={i}>{text} <br/></span>)}</p>
                        <p><span style={{fontFamily: 'opensans-reqular, sans-serif'}}>{home.email}</span></p>
                    </Col>
                    <Col span={6} xs={24} md={6} style={{textAlign: 'center'}}>
                    </Col>
                </Row>
            </Fade>
        </section>
    );
}

export default About;