import React from 'react';
import {Button, Col, Form, Input, Row, Typography} from "antd";
import {Fade} from "react-awesome-reveal";
import {MdOutlineMail} from "react-icons/all";

const {Title} = Typography

function Contact() {

    const onFinish = () => {
        alert('submit')
    }

    return (
        <section id="contact" className="section" style={{backgroundColor: 'rgb(4,48,75)'}}>
            <div className="step"/>
            <Fade direction="down">
                <div className="row" style={{marginTop: '0', marginBottom: '0', marginLeft: 'auto', marginRight: 'auto'}}>
                    <Row>
                        <Col span={6} xs={24} md={6} style={{textAlign: 'center'}}>
                            <h2 style={{
                                color: '#fff',
                                fontSize: '3rem'
                            }}><MdOutlineMail/></h2>
                        </Col>
                        <Col span={18} xs={24} md={18}/>
                    </Row>
                    <Row>
                        <Col span={24} style={{textAlign: 'center', paddingBottom: '2rem'}}>
                            <Form onFinish={onFinish}>
                                <Row gutter={[24, 0]} style={{marginBottom: '1.5rem'}}>
                                    <Col span={6} xs={8} md={6}>
                                        <Title level={4} type="warning">Name</Title>
                                    </Col>
                                    <Col span={18} xs={16} md={18}>
                                        <Form.Item name="name">
                                            <Input size="large" className=""/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={[24, 0]} style={{marginBottom: '1.5rem'}}>
                                    <Col span={6} xs={8} md={6}>
                                        <Title level={4} type="warning">Email</Title>
                                    </Col>
                                    <Col span={18} xs={16} md={18}>
                                        <Form.Item name="email">
                                            <Input size="large"/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={[24, 0]} style={{marginBottom: '1.5rem'}}>
                                    <Col span={6} xs={24} md={6}>
                                        <Title level={4} type="warning">Subject</Title>
                                    </Col>
                                    <Col span={18} xs={24} md={18}>
                                        <Form.Item name="subject">
                                            <Input size="large"/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={[24, 0]}>
                                    <Col span={6} xs={24} md={6}>
                                        <Title level={4} type="warning">Message</Title>
                                    </Col>
                                    <Col span={18} xs={24} md={18}>
                                        <Form.Item name="message">
                                            <Input.TextArea
                                                size="large"
                                                autoSize={{minRows: 5, maxRows: 5}}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={24}>
                                    <Col span={6}/>
                                    <Col span={18} xs={24} md={18}>
                                        <Form.Item>
                                            <Button htmlType="submit" className="button">
                                                <b>SUBMIT</b>
                                            </Button>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Fade>
        </section>
    );
}

export default Contact;