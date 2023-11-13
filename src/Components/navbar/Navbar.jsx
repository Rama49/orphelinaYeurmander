import React from 'react'
import { Menu, Layout} from "antd"
import styled from 'styled-components'

const {Container} = Layout;

const NavContainer = styled(Container)`
background: #FF0390;
`;

export default function Navbar() {
    return (
        <NavContainer>
             <Menu
        mode='horizontal'
           items={[
            {label: "Acceuil",  key: "Acceuil"},
            {label: "Qui sommes nous?",  key: "Qui sommes nous?"},
            {label: "Programmes",  key: "Programmes"},
            {label: "Demandes",  key: "Demandes"},
            {label: "Galerie",  key: "Galerie"},
            {label: "Contactez-nous",  key: "Contactez-nous"},
            {label: "Faire un don",  key: "Faire un don"},
        ]}
        />
        </NavContainer>
    )
}
