import {Container} from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import playstoreIcon from "../../assets/googleplay-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio() {
    return (
        <Container id="portfolio">
            <h2>My Portfolio</h2>

            <div className="projects">

                <ScrollAnimation animateIn="flipInX">
                    <div className="project">
                        <header>
                            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"
                                 fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round"
                                 stroke-linejoin="round"><title>Folder</title>
                                <path
                                    d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <div className="project-links">
                                <a href="https://github.com/iamrafehdev/laravel-lumen-REST-API-jwt-auth" target="_blank"
                                   rel="noreferrer">
                                    <img src={githubIcon} alt="GitHub"/>
                                </a>
                            </div>
                        </header>
                        <div className="body">
                            <h3>Lumen API with (JWT)</h3>
                            <p>API CRUD with Json Web Token in Lumen Microframework by Laravel.
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>PHP</li>
                                <li>Laravel</li>
                            </ul>
                        </footer>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="flipInX">
                    <div className="project">
                        <header>
                            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"
                                 fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round"
                                 stroke-linejoin="round"><title>Folder</title>
                                <path
                                    d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <div className="project-links">
                                <a href="https://play.google.com/store/apps/details?id=uk.co.noteablehr.note_it_nip_it"
                                   target="_blank"
                                   rel="noreferrer">
                                    <img src={playstoreIcon} alt="Playstore"/>
                                </a>
                            </div>
                        </header>
                        <div className="body">
                            <h3>Note it Nip it</h3>
                            <p>HR Application for catch bulling/harassment incidents.
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>Dart</li>
                                <li>Flutter</li>
                                <li>Android</li>
                                <li>IOS</li>
                            </ul>
                        </footer>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="flipInX">
                    <div className="project">
                        <header>
                            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"
                                 fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round"
                                 stroke-linejoin="round"><title>Folder</title>
                                <path
                                    d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <div className="project-links">
                                <a href="https://play.google.com/store/apps/details?id=com.complyexchange.ix"
                                   target="_blank"
                                   rel="noreferrer">
                                    <img src={playstoreIcon} alt="Playstore"/>
                                </a>
                            </div>
                        </header>
                        <div className="body">
                            <h3>Comply IX</h3>
                            <p>Personal wallet for TAX payer for his/her tax forms.</p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>Dart</li>
                                <li>Flutter</li>
                                <li>Android</li>
                                <li>IOS</li>
                            </ul>
                        </footer>
                    </div>
                </ScrollAnimation>


                <ScrollAnimation animateIn="flipInX">
                    <div className="project">
                        <header>
                            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"
                                 fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round"
                                 stroke-linejoin="round"><title>Folder</title>
                                <path
                                    d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <div className="project-links">
                                <a href="https://play.google.com/store/apps/details?id=live.joblink.joblinkapp"
                                   target="_blank"
                                   rel="noreferrer">
                                    <img src={playstoreIcon} alt="Playstore"/>
                                </a>
                            </div>
                        </header>
                        <div className="body">
                            <h3>Job Link</h3>
                            <p>Job & Resume search application for Job Seekers/Advertisers.</p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>Dart</li>
                                <li>Flutter</li>
                                <li>Android</li>
                                <li>IOS</li>
                            </ul>
                        </footer>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="flipInX">
                    <div className="project">
                        <header>
                            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"
                                 fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round"
                                 stroke-linejoin="round"><title>Folder</title>
                                <path
                                    d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <div className="project-links">
                                <a href="https://play.google.com/store/apps/details?id=com.aditdrivingschool.adit_driving_school"
                                   target="_blank"
                                   rel="noreferrer">
                                    <img src={playstoreIcon} alt="Playstore"/>
                                </a>
                            </div>
                        </header>
                        <div className="body">
                            <h3>ADIT Driving School</h3>
                            <p>Driving school application for Teachers/Students.</p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>Dart</li>
                                <li>Flutter</li>
                                <li>Android</li>
                                <li>IOS</li>
                            </ul>
                        </footer>
                    </div>
                </ScrollAnimation>


            </div>
        </Container>
    );
}
