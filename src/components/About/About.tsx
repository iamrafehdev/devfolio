import {Container} from "./styles";

import profileImage from "../../assets/profile-image.jpg"
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import flutterIcon from "../../assets/flutter-icon1.svg";
import laravelIcon from "../../assets/laravel-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";


export function About() {
    return (
        <Container id="about">
            <div className="about-text">
                <ScrollAnimation animateIn="fadeInLeft">
                    <h2>About me</h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
                    <p>I am an experienced Flutter (Android & IOS) Developer with almost two years of Mobile & Web App
                        Development experience.</p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}
                                 style={{marginTop: "2rem", marginBottom: "2rem"}}>

                    <p>I have worked on many enterprise-level projects ranging from development
                        to product maintenance, new App structures, building new features, performing core updates, and
                        code restructuring.</p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>

                    <p>Moreover, I also have experience in creating REST API's.</p>
                </ScrollAnimation>

                {/*<ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>*/}
                {/*    <h3>Here are my main skills:</h3>*/}
                {/*</ScrollAnimation>*/}
                <div className="hard-skills">

                    <div className="hability">
                        <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
                            <img src={flutterIcon} alt="Flutter"/>
                        </ScrollAnimation>
                    </div>
                    <div className="hability">
                        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
                            <img src={laravelIcon} alt="Laravel"/>
                        </ScrollAnimation>
                    </div>
                    <div className="hability">
                        <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
                            <img src={nodeIcon} alt="Node"/>
                        </ScrollAnimation>
                    </div>
                    <div className="hability">
                        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
                            <img src={reactIcon} alt="React"/>
                        </ScrollAnimation>
                    </div>

                    <div className="hability">
                        <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
                            <img src={jsIcon} alt="JavaScript"/>
                        </ScrollAnimation>
                    </div>

                    <div className="hability">
                        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
                            <img src={htmlIcon} alt="Html"/>
                        </ScrollAnimation>
                    </div>

                    <div className="hability">
                        <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
                            <img src={cssIcon} alt="Css"/>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
            <div className="about-image">
                <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
                    <img src="https://img.freepik.com/free-vector/tiny-people-testing-quality-assurance-software-isolated-flat-vector-illustration-cartoon-character-fixing-bugs-hardware-device-application-test-it-service-concept_74855-10172.jpg?t=st=1646733806~exp=1646734406~hmac=dd2cb76e759cf67c6da04ea8ce2f34ac4a3b10a5958aa144b0519899d4f15f17" alt="About me" />
                </ScrollAnimation>
            </div>
        </Container>
    )
}
