import React from 'react'
import { Layout } from "antd"
import styled from 'styled-components'

const {AcceuilStyle} = Layout;

const AcceuilContainer = styled(AcceuilStyle)`
background-image: url("../assets/logo.png")
`;

export default function Acceuil() {
    return (
        <AcceuilContainer>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cupiditate modi, accusantium repudiandae velit dignissimos ullam est molestiae necessitatibus a id commodi sapiente non corporis, dolor dicta. Iure, numquam amet.</p>
        </AcceuilContainer>)
}