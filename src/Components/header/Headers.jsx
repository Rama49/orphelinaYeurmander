
import React from 'react'
import { Layout } from "antd";

import styled from 'styled-components'
import Icon from "@ant-design/icons/lib/components/Icon";
import { FacebookOutlined } from "@ant-design/icons"
const { Header } = Layout;

const ContentHeader = styled(Header)`
background: #FF0390;
color: white;
`;

export default function Headers() {
    return (
       
            < ContentHeader >
                <div>
                    <div>
                        <p>Suivez-nous</p>
                        <Icon type="FacebookOutlined" />
                        <FacebookOutlined />
                    </div>
                </div>
            </ContentHeader>
    )
}
