import React from 'react'
import { Layout } from "antd"
import styled from 'styled-components'
import Image from "../../assets/background.png"

const {Content} = Layout;

const ContentAcceuil = styled(Content)`
background-image: url(${Image});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
height: 80vh;
`;

export default function Acceuil() {
    return (
        <ContentAcceuil>
        </ContentAcceuil>)
}