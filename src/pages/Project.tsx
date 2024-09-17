// import { useState } from "react";

import { Link } from "react-router-dom"

function Project() {
   return(
    <>
      {/* background web  */}
      <div className="background fixed-top" style={{zIndex:"-10",opacity:"0.5"}}>
        <img src="./image/background/background_3.png" className="img-fluid" alt="background"/>
    </div>
    {/*  background web  */}

    
    <div className="project">
        <div className="project-title">

            <h2 className="text-center m-2 py-2">
                <span className="border-start px-5 border-primary fw-bold border-end border-3">Recent Work
                    Project</span>
            </h2>

            <h3 className="btn text-white btn-primary m-3">
                <Link to="/" className="nav-link">
                    <i className="fa-solid me-2 fa-arrow-left"></i>
                    Back
                 </Link>    
            </h3>



            <div className="d-flex gap-1 justify-content-center align-items-center flex-wrap m-0 p-0">
                <div className=" btn-all active btn border-0 ">
                    ALL
                </div>

                <div className=" btn-bootstrap btn border-0 ">
                    BOOTSTRAP
                </div>

                <div className=" btn-wordpress btn border-0 ">
                    WORDPRESS
                </div>

                <div className=" btn-others btn border-0 ">
                    OTHERS
                </div>


            </div>

        </div>

            <div className="project-content p-5" data-aos="zoom-in">
                <div className="project-photo row g-3">

                    <div className="bootstrap col-lg-3 col-md-6 col-sm-12">
                        <div className="project-hover card">
                            <img src="image/happiness-project.jpg" className="img-fluid object-fit-cover"
                                alt="gallery-image"/>
                            <div className="p-3">
                                <h5>Happiness-website design-project</h5>
                                <p title="HTML | CSS| SCSS | BOOTSTRAP | JAVASCRIPT | JQUERY | PLUGINS">
                                    HTML | CSS| SCSS | BOOTSTRAP | JAVASCRIPT | JQUERY | PLUGINS </p>
                                <button className="btn btn-primary fw-bold py-1 px-3"><a
                                        href="https://iftekher2108.github.io/happiness-template/"
                                        className="nav-link text-white">Live View</a></button>

                            </div>

                        </div>

                    </div>

                    <div className="bootstrap col-lg-3 col-md-6 col-sm-12">
                        <div className="project-hover card">
                            <img src="image/restuarent-Project.jpg" className="img-fluid object-fit-cover"
                                alt="gallery-image"/>
                            <div className="p-3">
                                <h5>Restuarent website design-project</h5>
                                <p title="HTML | CSS| SCSS | BOOTSTRAP | JAVASCRIPT | JQUERY | PLUGINS">
                                    HTML | CSS| SCSS | BOOTSTRAP | JAVASCRIPT | JQUERY | PLUGINS </p>
                                <button className="btn btn-primary fw-bold py-1 px-3"><a
                                        href="https://iftekher2108.github.io/restaurent-templete/"
                                        className="nav-link text-white">Live View</a></button>

                            </div>
                        </div>
                    </div>

                    <div className="bootstrap col-lg-3 col-md-6 col-sm-12">
                        <div className="project-hover card">
                            <img src="image/pet-consultency-Project-Presentation.jpg" className="img-fluid object-fit-cover"
                                alt="gallery-image"/>

                            <div className="p-3">
                                <h5>Pet Consultency website design-project</h5>
                                <p title="HTML | CSS| SCSS | BOOTSTRAP | JAVASCRIPT | JQUERY | PLUGINS">
                                    HTML | CSS| SCSS | BOOTSTRAP | JAVASCRIPT | JQUERY | PLUGINS </p>
                                <button className="btn btn-primary fw-bold py-1 px-3"><a
                                        href="https://iftekher2108.github.io/pet-consultency-templete/"
                                        className="nav-link text-white">Live View</a></button>
                            </div>

                        </div>

                    </div>

                    <div className="bootstrap col-lg-3 col-md-6 col-sm-12">
                        <div className="project-hover card">
                            <img src="image/home-solution-Project-Presentation.jpg" className="img-fluid object-fit-cover"
                                alt="gallery-image"/>
                            <div className="p-3">
                                <h5>Home solution website design-project</h5>
                                <p title="HTML | CSS| SCSS | BOOTSTRAP | JAVASCRIPT | JQUERY | PLUGINS">
                                    HTML | CSS| SCSS | BOOTSTRAP | JAVASCRIPT | JQUERY | PLUGINS </p>
                                <button className="btn btn-primary fw-bold py-1 px-3"><a
                                        href="https://iftekher2108.github.io/home-solution-template/"
                                        className="nav-link text-white">Live View</a></button>

                            </div>

                        </div>

                    </div>

                    <div className="bootstrap col-lg-3 col-md-6 col-sm-12">
                        <div className="project-hover card">
                            <img src="./image/tata-web-clone.png" className="img-fluid object-fit-cover"
                                alt="gallery-image"/>
                            <div className="p-3">
                                <h5 title="TATA Website Clone" className="text-primary">TATA Website Clone</h5>
                                <p title="HTML | CSS| SCSS | BOOTSTRAP | JAVASCRIPT | JQUERY | PLUGINS ">
                                    HTML | CSS| SCSS | BOOTSTRAP | JAVASCRIPT | JQUERY | PLUGINS </p>
                                <button className="btn btn-primary fw-bold py-1 px-3"><a
                                        href="https://iftekher2108.github.io/tata-web/" className="nav-link text-white">Live
                                        View</a></button>
                            </div>

                        </div>

                    </div>

                    {/* US whole sale web  */}
                    <div className="bootstrap col-lg-3 col-md-6 col-sm-12">
                        <div className="project-hover card">
                            <img src="./image/us-whole-sale.png" className="img-fluid object-fit-cover" alt="gallery-image"/>
                            <div className="p-3">
                                <h5 title="US whole sale Website" className="text-primary">US Whole sale Website</h5>
                                <p title="HTML | CSS| SCSS | BOOTSTRAP | JAVASCRIPT | JQUERY | PLUGINS ">
                                    HTML | CSS| SCSS | BOOTSTRAP | JAVASCRIPT | JQUERY | PLUGINS </p>
                                <button className="btn btn-primary fw-bold py-1 px-3"><a
                                        href="https://iftekher2108.github.io/uk-whole-sale/"
                                        className="nav-link text-white">Live
                                        View</a></button>
                            </div>

                        </div>

                    </div>

                    <div className="wordpress col-lg-3 col-md-6 col-sm-12">
                        <div className="project-hover card">
                            <img src="image/mug-tshirt-ecomarce-Project-Presentation.jpg"
                                className="img-fluid object-fit-cover" alt="gallery-image"/>
                            <div className="p-3">
                                <h5>Coder Foundation Clone website</h5>
                                <p>WORDPRESS | E-COMARCE | DYNAMIC WEBSITE </p>
                                <button className="btn btn-primary fw-bold py-1 px-3"><a
                                        href="http://iftekhermahmud.ezyro.com/" className="nav-link text-white">Live
                                        View</a></button>

                            </div>

                        </div>

                    </div>

                    <div className="others col-lg-3 col-md-6 col-sm-12">
                        <div className="project-hover card">
                            <img src="image/calculator-Project-Presentation.png" className="img-fluid object-fit-cover "
                                alt="gallery-image"/>
                            <div className="p-3">
                                <h5>Calculator Software Project</h5>
                                <p title="HTML5 | CSS3 | JAVASCRIPT"> HTML5 | CSS3 | JAVASCRIPT </p>
                                <button className="btn btn-primary fw-bold py-1 px-3"><a
                                        href="https://iftekher2108.github.io/calculator-project/"
                                        className="nav-link text-white">Live View</a></button>
                            </div>

                        </div>

                    </div>

                    <div className="others col-lg-3 col-md-6 col-sm-12">
                        <div className="project-hover card">
                            <img src="./image/currency-converter.jpg" className="img-fluid object-fit-cover" alt="gallery-image"/>
                            <div className="p-3">
                                <h5 title="US whole sale Website" className="text-primary">Currency Converter Project</h5>
                                <p title="HTML | CSS| SCSS | BOOTSTRAP | JAVASCRIPT | JQUERY | PLUGINS ">
                                    HTML | CSS| BOOTSTRAP | JAVASCRIPT | Axios | JQUERY | PLUGINS </p>
                                <button className="btn btn-primary fw-bold py-1 px-3"><a
                                        href="https://iftekher2108.github.io/currency-converter/"
                                        className="nav-link text-white">Live
                                        View</a></button>
                            </div>

                        </div>

                    </div>

                    <div className="others col-lg-3 col-md-6 col-sm-12">
                        <div className="project-hover card">
                            <img src="image/select-todo-list.png" className="img-fluid object-fit-cover "
                                alt="gallery-image"/>
                            <div className="p-3">
                                <h5>Select Todo List Project</h5>
                                <p title="HTML5 | CSS3 | JAVASCRIPT | JQUERY "> HTML5 | CSS3 | JAVASCRIPT | JQUERY </p>
                                <button className="btn btn-primary fw-bold py-1 px-3"><a
                                        href="https://iftekher2108.github.io/todo-app-select/"
                                        className="nav-link text-white">Live View</a></button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

    </div>

    </>
   ) 
}

export default Project