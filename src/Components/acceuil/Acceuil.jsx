import React from 'react'
import { Layout } from "antd"
import styled from 'styled-components'
import Image from "../../assets/backgoundAcceuil.png"
import { Carousel } from 'antd';
import Boutton from '../reutilisable/Boutton';

const { Content } = Layout;

const ContentAcceuil = styled(Content)`
background-image: url(${Image});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
height: 80vh;
color: white;
textAlign: "center";

`;

const aide = {
    textAlign: "flex-start",
    width: "57%",
    paddingTop: 100,
    paddingLeft: 150
};

const boutton = {
    display: "flex",
}


export default function Acceuil() {

    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
      };
    
    return (
        <div>


            <Carousel afterChange={onChange}>
                <ContentAcceuil>
                    <div style={aide}>
                    <h1 >NOUS POUVONS AIDER QUELQU'UN</h1>
                    <p>L'orphelinat "Keur Yeurmandé" est un orphelinat que nous avons eu le privilège
                        de découvrir lors d'une activité de bénévolat organisée par les Bakelistes.
                        Aujourd'hui, en tant que Bakeli School of Technology, une école de formation dans
                        le domaine du numérique, nous nous engageons à apporter notre soutien à cet
                        orphelinat en favorisant sa digitalisation, notamment dans le traitement de leurs
                        images numériques et la gestion de leurs demandes de soutien.
                        Cette note conceptuelle a été élaborée dans le but de concrétiser cette vision et
                        d'assister l'orphelinat dans la création d'un site internet dédié à sa cause.</p>
                        <div style={boutton}>
                            < Boutton  text={"Faire un don maintenant"} />
                            < Boutton text={"Apprendre encore"} />
                        </div>
                    </div>
                </ContentAcceuil>
                <ContentAcceuil>
                    <div style={aide}>
                    <h1 >NOUS POUVONS AIDER QUELQU'UN</h1>
                    <p>L'orphelinat "Keur Yeurmandé" est un orphelinat que nous avons eu le privilège
                        de découvrir lors d'une activité de bénévolat organisée par les Bakelistes.
                        Aujourd'hui, en tant que Bakeli School of Technology, une école de formation dans
                        le domaine du numérique, nous nous engageons à apporter notre soutien à cet
                        orphelinat en favorisant sa digitalisation, notamment dans le traitement de leurs
                        images numériques et la gestion de leurs demandes de soutien.
                        Cette note conceptuelle a été élaborée dans le but de concrétiser cette vision et
                        d'assister l'orphelinat dans la création d'un site internet dédié à sa cause.</p>
                        <div style={boutton}>
                            < Boutton  text={"Faire un don maintenant"} />
                            < Boutton text={"Apprendre encore"} />
                        </div>
                    </div>
                </ContentAcceuil>
                <ContentAcceuil>
                    <div style={aide}>
                    <h1 >NOUS POUVONS AIDER QUELQU'UN</h1>
                    <p>L'orphelinat "Keur Yeurmandé" est un orphelinat que nous avons eu le privilège
                        de découvrir lors d'une activité de bénévolat organisée par les Bakelistes.
                        Aujourd'hui, en tant que Bakeli School of Technology, une école de formation dans
                        le domaine du numérique, nous nous engageons à apporter notre soutien à cet
                        orphelinat en favorisant sa digitalisation, notamment dans le traitement de leurs
                        images numériques et la gestion de leurs demandes de soutien.
                        Cette note conceptuelle a été élaborée dans le but de concrétiser cette vision et
                        d'assister l'orphelinat dans la création d'un site internet dédié à sa cause.</p>
                        <div style={boutton}>
                            < Boutton  text={"Faire un don maintenant"} />
                            < Boutton text={"Apprendre encore"} />
                        </div>
                    </div>
                </ContentAcceuil>
                <ContentAcceuil>
                    <div style={aide}>
                    <h1 >NOUS POUVONS AIDER QUELQU'UN</h1>
                    <p>L'orphelinat "Keur Yeurmandé" est un orphelinat que nous avons eu le privilège
                        de découvrir lors d'une activité de bénévolat organisée par les Bakelistes.
                        Aujourd'hui, en tant que Bakeli School of Technology, une école de formation dans
                        le domaine du numérique, nous nous engageons à apporter notre soutien à cet
                        orphelinat en favorisant sa digitalisation, notamment dans le traitement de leurs
                        images numériques et la gestion de leurs demandes de soutien.
                        Cette note conceptuelle a été élaborée dans le but de concrétiser cette vision et
                        d'assister l'orphelinat dans la création d'un site internet dédié à sa cause.</p>
                        <div style={boutton}>
                            < Boutton  text={"Faire un don maintenant"} />
                            < Boutton text={"Apprendre encore"} />
                        </div>
                    </div>
                </ContentAcceuil>
            </Carousel>
        </div>
    )
}