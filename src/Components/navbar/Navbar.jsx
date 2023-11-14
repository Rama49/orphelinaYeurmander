import React from 'react'
import { Menu } from "antd"
import Imag from "../../assets/logo.png"
import { Select } from 'antd';
const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

const logo = {
    width: 50
}
const navbar={
    justifyContent: "center",
    alignItems: "center",
    padding: 0
}

export default function Navbar() {

    return (

        <div>
          
            <Menu
                mode='horizontal'
                style={navbar}
               
                items={[ 
                    { label: < img src={Imag} alt='Imag' style={logo}/>, key: "logo", },
                    { label: <Select defaultValue="QUI SOMMES NOUS?" onChange={handleChange}>
                   
                    <Option value="Qui sommes nous?" >Qui sommes nous?</Option>
                    <Option value="Qui sommes nous?" >Qui sommes nous?</Option>
                </Select>, key: "Qui sommes nous?" },
                    { label: "Qui sommes nous?", key: "Qui sommes nous?" },
                    { label: "Programmes", key: "Programmes" },
                    { label: <Select defaultValue="Qui sommes nous?" onChange={handleChange}>
                   
                    <Option value="Demandes" >Demandes</Option>
                    <Option value="Demandes" >Demandes</Option>
                </Select>, key: "Demandes" },
                    { label: "Galerie", key: "Galerie" },
                    { label: "Contactez-nous", key: "Contactez-nous" },
                    { label: "Faire un don", key: "Faire un don" },
                ]}
            /></div>

    )
}
