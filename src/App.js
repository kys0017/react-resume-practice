import './App.css'
import {Layout, Menu} from "antd";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import React, {useCallback, useEffect, useRef, useState} from "react";
import Footer from "./components/Footer";
import axios from "axios";
import { library } from '@fortawesome/fontawesome-svg-core'
import {fab} from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const {Header, Content} = Layout

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function App() {

    const sectionRef = useRef();
    const stepRef = useRef();
    const currentItem = useRef(null);
    const ioRef = useRef(null);
    const ioIndexRef = useRef(0)
    const [selectedKey, setSelectedKey] = useState('home');
    const [data, setData] = useState(null);

    const getObserver = useCallback(() => {
            if (!ioRef.current) {
                ioRef.current = new IntersectionObserver((entries) => {
                    ioIndexRef.current = entries[0].target.dataset.index
                });
            }
            return ioRef.current
        },
        [ioRef],
    );

    const onClick = (e) => {
        const href = e.target.href || '#home'
        const key = href.substring(href.indexOf('#')+1)
        setSelectedKey(key);
    }

    const scrollHandler = () => {
        let boundingRect;

        if (!sectionRef.current) {
            sectionRef.current = document.querySelectorAll('.section');
            sectionRef.current.forEach((content, i) => (content.dataset.index = i))
        }
        if (!stepRef.current) {
            stepRef.current = document.querySelectorAll('.step')
            stepRef.current.forEach((step, i) => {
                getObserver().observe(step, {
                    threshold: 1.0
                })
                step.dataset.index = i
            })
        }

        for (let i = ioIndexRef.current - 1; i < ioIndexRef.current + 2; i++) {
            if (!stepRef.current[i]) continue;
            boundingRect = stepRef.current[i].getBoundingClientRect();

            if ((boundingRect.top > 0) && (boundingRect.top < window.innerHeight * 0.5)) {
                currentItem.current = sectionRef.current[stepRef.current[i].dataset.index];
                setSelectedKey(currentItem.current.id )
            }
        }
    }

    const timeout = () => setTimeout(() => window.scrollTo(0,0), 500)

    const getJsonData = async () => {
        const {data} = await axios.get('./resumeData.json')
        setData(data)
    }

    useEffect(() => {
        timeout()
        getJsonData()

        window.addEventListener('scroll', scrollHandler)

        return () => {
            window.removeEventListener('scroll', scrollHandler)
            getObserver().disconnect()
        }
    }, []);

    return (
      <div >
          <Layout style={{background: 'none'}} >
            <Header className="layout-header" >
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} selectedKeys={[`${selectedKey}`]}  style={{justifyContent: 'center', fontWeight: 'bold'}}>
                  <Menu.Item key="home"><a href="#home" onClick={onClick} >Home</a></Menu.Item>
                  <Menu.Item key="about"><a href="#about" onClick={onClick} >About</a></Menu.Item>
                  <Menu.Item key="resume"><a href="#resume" onClick={onClick} >Resume</a></Menu.Item>
                  <Menu.Item key="contact"><a href="#contact" onClick={onClick} >Contact</a></Menu.Item>
              </Menu>
            </Header>
            <Content className="layout-content" style={{ padding: '0' }}>
                <Home data={data}/>
                <About data={data}/>
                <Resume data={data}/>
                <Contact data={data}/>
                <Footer data={data} onClick={onClick} />
            </Content>
          </Layout>
      </div>
  );
}

export default App;
