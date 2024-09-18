// import React from 'react';

interface projectInfo{
    category?:string,
    picture:string,
    title:string,
    tech:string,
    link:string,

}


function ProjectCard(props:projectInfo) {

    return (
        <div className={`${props.category} col-lg-3 col-md-6 col-sm-12`}>
        <div className="project-hover card">
            <img src={`${props.picture}`} className="img-fluid object-fit-cover"
                alt={`${props.title}`} />
            <div className="p-3">
                <h5 title={`${props.title}`} className="text-primary">
                    { props.title }
                </h5>
                <p title={`${props.tech}`}>{props.tech}</p>
                <button className="btn btn-primary fw-bold py-1 px-3"><a
                    href={`${props.link}`}
                    className="nav-link text-white">Live View</a></button>
            </div>
        </div>
    </div>
    )
}

export default ProjectCard