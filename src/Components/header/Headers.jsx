
import React from 'react'
import { Layout } from "antd";

import styled from 'styled-components'
// import Icon from "@ant-design/icons/lib/components/Icon";
import { FacebookOutlined } from "@ant-design/icons"
import { TwitterCircleFilled } from "@ant-design/icons"
import { GooglePlusCircleFilled } from "@ant-design/icons"
import { ChromeOutlined } from "@ant-design/icons"
import { WifiOutlined } from "@ant-design/icons"
import { LinkedinOutlined } from "@ant-design/icons"
import { MailOutlined } from "@ant-design/icons"
import { PhoneOutlined } from "@ant-design/icons"

import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}
const { Header } = Layout;

const ContentHeader = styled(Header)`
background: #FF0390;
color: white;
height: 20
`;
const Container = {
    display: 'flex', 
    justifyContent: "space-around",
    verticalALign: "middle"
};
const containerIcons = {
    display: 'flex',
    justifyContent: "space-around",
}
const facebook = {
    color: "white",
    padding: 15,
    fontSize: 15,
    borderColor: "none"
};
const iconsbas= {
    display: 'flex'
};
const iconsleft= {
    padding: 10
};
const inputselect = {
    opacity: 0,
};
const inputselecttext = {
    opacity: 1,
    width: 100
};
const textfr = {
    padding: 10
}


export default function Headers() {
    return (

        < ContentHeader>
            <div style={Container}>
                <div style={containerIcons}>
                    <p>Suivez-nous sur:</p>
                    <div style={{ padding: 13 }}>
                        <a href="#"> < FacebookOutlined style={facebook} /></a>
                        <a href="#"><TwitterCircleFilled style={facebook} /></a>
                        <a href="#"> <GooglePlusCircleFilled style={facebook} /></a>
                        <a href="#"><ChromeOutlined style={facebook} /></a>
                        <a href="#"><WifiOutlined style={facebook} /></a>
                        <a href="#"><LinkedinOutlined style={facebook} /></a>
                    </div>
                </div>
                <div style={iconsbas}>
                    <div style={iconsleft}>
                        <a href="#"><MailOutlined style={facebook}/></a>
                        <span>E-mail: keuryeurmande@gmail.com</span>
                    </div>
                    <div style={iconsleft}>
                        <a href="#"><PhoneOutlined style={facebook} /></a>
                        <span>Telephone: +221 77 777 77 77</span>
                    </div>
                    <div >fr</div>
                    <div>
                        <Select style={inputselect} onChange={handleChange}>
                            <div style={textfr}>fr</div>
                            <Option value="Anglais" style={inputselecttext}>Ang</Option>
                            <Option value="Spagnol" style={inputselecttext}>Spl</Option>
                        </Select>
                    </div>
                </div>

            </div>
        </ContentHeader>
    )
}
