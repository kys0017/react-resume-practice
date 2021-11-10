import React from 'react';
import {Avatar, Col, Divider, Row, Space, Tag} from "antd";
import {Slide} from "react-awesome-reveal";
import {Typography} from "antd";

const {Title, Text} = Typography

function Resume({data}) {

    if(!data) return null
    const {resume} = data

    const education = resume.education.map(edu => (
        <div key={edu.school}>
            <Title level={4}>{edu.school}</Title>
            <p>
                <em>{edu.degree}</em> &nbsp; <span>&bull;</span> {edu.graduated}
            </p>
            <p><Text style={{color: '#6E7881'}}>{edu.description}</Text></p>
        </div>
    ))

    const work = resume.work.map(wk => (
        <div key={wk.company} style={{marginBottom: '30px'}}>
            <Title level={4}>{wk.company}</Title>
            <p>
                <em>{wk.title}</em> &nbsp; <span>&bull;</span> {wk.years}
            </p>
            <Space size={[8, 8]} wrap style={{marginBottom: '20px'}}>
                {
                    wk.skills.map((skill, i) =>
                        <Tag key={i} className="skilltag" >
                            <Space>
                                <Avatar src={`./icons/${skill}.svg`} style={{backgroundColor: 'transparent'}} size={20} shape="square"/>
                                <em >{skill}</em>
                            </Space>
                        </Tag>
                    )
                }
            </Space>
            <p>{wk.description.split('\n').map((text, i) => <Text key={i} style={{color: '#6E7881'}}>{text}<br /></Text>)}</p>
        </div>
    ))

    const skills = resume.skills.map((skill, i) => (
            <Tag key={skill.name} className="skilltag" >
                <Space>
                    <Avatar src={`./icons/${skill.name}.svg`} style={{backgroundColor: 'transparent'}} size={20} shape="square"/>
                    <em >{skill.name}</em>
                </Space>
            </Tag>
        )
    )

    return (
        <section id="resume" className="section" >
            <div className="step"/>
            <Slide direction="left" duration={1000}>
                <Row className="row" gutter={[16, 16]} style={{marginTop: '0', marginBottom: '0', marginLeft: 'auto', marginRight: 'auto'}}>
                    <Col span={6} xs={24} md={6} style={{textAlign: 'center', paddingBottom: '2rem'}}>
                        <h2 style={{
                            display: 'inline',
                            borderBottom: '3px solid #539b83',
                            textTransform: 'uppercase',
                            paddingBottom: '0.5rem'
                        }}>Education</h2>
                    </Col>
                    <Col span={18} xs={24} md={18} >
                        {education}
                    </Col>
                </Row>
            </Slide>
            <Divider />
            <Slide direction="right" duration={1000}>
                <Row className="row" gutter={[16, 16]} style={{marginTop: '0', marginBottom: '0', marginLeft: 'auto', marginRight: 'auto'}}>
                    <Col span={6} xs={24} md={6} style={{textAlign: 'center',paddingBottom: '2rem'}}>
                        <h2 style={{
                            display: 'inline',
                            borderBottom: '3px solid #539b83',
                            textTransform: 'uppercase',
                            paddingBottom: '0.5rem'
                        }}>Work</h2>
                    </Col>
                    <Col span={18} xs={24} md={18} >
                        <span>{work}</span>
                    </Col>
                </Row>
            </Slide>
            <Divider />
            <Slide direction="left" duration={500}>
                <Row className="row" gutter={[16, 16]} style={{marginTop: '0', marginBottom: '0', marginLeft: 'auto', marginRight: 'auto'}}>
                    <Col span={6} xs={24} md={6} style={{textAlign: 'center', paddingBottom: '2rem'}}>
                        <h2 style={{
                            display: 'inline',
                            borderBottom: '3px solid #539b83',
                            textTransform: 'uppercase',
                            paddingBottom: '0.5rem'
                        }}>Skills</h2>
                    </Col>
                    <Col span={18} xs={24} md={18} >
                        <Space size={[16, 16]} wrap>{skills}</Space>
                    </Col>
                </Row>
            </Slide>
        </section>
    );
}

export default Resume;