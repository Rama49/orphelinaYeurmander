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
const navbar = {
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
                    { label: < img src={Imag} alt='Imag' style={logo} />, key: "logo", },
                    { label: "Acceuil", key: "Acceuil" },

                    {
                        label: <Select defaultValue="Qui sommes nous?" onChange={handleChange}>

                            <Option 
                                value="QUI SOMMES NOUS?" >QUI SOMMES NOUS?</Option>
                        </Select>, key: "Acceuil"
                    },
                    { label: "Programmes", key: "Programmes" },
                    { label: "Demandes", key: "Demandes" },
                    { label: "Galerie", key: "Galerie" },
                    { label: "Contactez-nous", key: "Contactez-nous" },
                    { label: "Faire un don", key: "Faire un don" },
                ]}
            /></div>

    )
}
