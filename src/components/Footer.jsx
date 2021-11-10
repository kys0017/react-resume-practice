import React from 'react';
import {AiFillUpCircle} from "react-icons/all";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Avatar, Space} from "antd";

function Footer({data, onClick}) {

    if(!data) return null
    const {home} = data

    const social = home.social.map(network => (
        <a href={network.url} key={network.name} target="_blank">
            <Avatar icon={<FontAwesomeIcon icon={["fab", `${network.name}`]} />}/>
        </a>
    ))

    return (
        <footer style={{padding: '0px 50px', backgroundColor: '#888'}}>
            <div className="row" style={{minHeight: `120px`, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20px' }}>
                <Space size="large">{social}</Space>
            </div>

            <div id="go-top">
                <a className="smoothscroll" title="Back to Top" href="#home" onClick={onClick}>
                    <AiFillUpCircle  />
                </a>
            </div>
        </footer>
    );
}

export default Footer;