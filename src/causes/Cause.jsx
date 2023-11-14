import React from 'react';
import { Card } from 'antd';
import imageCart1 from "../assets/imagecart1.png"
import imageCart2 from "../assets/imagecart2.png"
import imageCart3 from "../assets/imagecart3.png"
import imager from "../assets/imager.png"


const container = {
    justifyContent: "center",
    textAlign: "center",
}

const { Meta } = Card;

const cartes = {
    display: "flex",
    justifyContent: "center",
    margin: 20
};

const textCauses = {
    color: "#FF0390",
    marginTop: 100
}


export default function Cause() {
    return (
        <div style={container}>
            <h1>NOS <span style={textCauses}>CAUSES</span></h1>
            <img alt="example" src={imager} />
            <p>Notre orphelinat offre de l'aide et de l'espoir aux enfants qui en ont besoin.</p>
            <div style={cartes}>
                <Card
                    hoverable
                    style={{
                        width: 300,
                    }}
                    cover={<img alt="example" src={imageCart1} />}
                >
                    <Meta title="enfannts doivent recevoir une éducation" description="Lorem ipsum dolor sit amet, onsectetur adipiscing contre ectetur nulla. Sed à ullamcorper risus" />
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 300,
                        marginRight: 30,
                        marginLeft: 30

                    }}
                    cover={<img alt="example" src={imageCart3} />}
                >
                    <Meta title="Apportez de l'électricité 
et de la lumière" description="Lorem ipsum dolor sit amet, onsectetur adipiscing contre ectetur nulla. Sed à ullamcorper risus" />
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 300,
                    }}
                    cover={<img alt="example" src={imageCart2} />}
                >
                    <Meta title="Objets porteurs d'eau" description="Lorem ipsum dolor sit amet, onsectetur adipiscing contre ectetur nulla. Sed à ullamcorper risus" />
                </Card>
            </div>
        </div>
    )
}




