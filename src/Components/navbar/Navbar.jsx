import React from 'react'
import { Menu} from "antd"
import Imag from "../../assets/logo.png"

export default function Navbar() {
   
    return (
        
             <Menu
        mode='horizontal'
        style={{
            justifyContent: "center",
            alignItems: "center",
          }}
           items={[
            < img src={Imag} />,
            {label: "Acceuil",  key: "Acceuil"},
            {label: "Qui sommes nous?",  key: "Qui sommes nous?"},
            {label: "Programmes",  key: "Programmes"},
            {label: "Demandes",  key: "Demandes"},
            {label: "Galerie",  key: "Galerie"},
            {label: "Contactez-nous",  key: "Contactez-nous"},
            {label: "Faire un don",  key: "Faire un don"},
        ]}
        />
    )
}
