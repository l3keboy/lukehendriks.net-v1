import React from 'react'
import { useNavigate  } from 'react-router-dom'

const ProjectPreviewBox = (props) => {
    const navigate = useNavigate();
    return (
        <div id="project-preview" className="w-60 shadow-2xl mb-2 md:w-88 lg:mx-1">
            <div id="project-preview-container" className="relative">
                <div id="project-preview-cotainer-img" className="w-60 md:w-88">
                    <img src={props.image} alt={props.alt}></img>
                </div>
                <div id="project-preview-cotainer-description" className="py-4">
                    <p className="font-gotham-rounded-medium text-h3-small md:text-h3-large text-center">{props.name}</p>
                    <p className="font-gotham-rounded-light text-h4-small md:text-h3-large text-center">{props.description} | <span className="text-light_accent">{props.language}</span></p>
                </div>
                <div id="project-preview-overlay" className="text-center items-center bg-light_primary absolute flex flex-col justify-center h-52 md:h-76 top-0 left-0 opacity-0 hover:opacity-100 w-60 md:w-88 transition duration-300 ease-in-out">
                    <p className="font-gotham-rounded-medium text-h3-small w-52 md:text-h3-large md:w-72">{props.name}</p>
                    <p className="font-gotham-rounded-light text-h4-small w-52 mt-1 md:text-h4-large md:w-72">{props.description_extra}<span className="text-light_accent">{props.language}</span>.</p>
                    <button id="projects-read-more" onClick={()=> navigate('/projecten')} className="hover:bg-light_accent hover:text-light_primary text-light_secondary self-center border-light_accent text-body-small mt-4 md:text-body-large border-4 rounded-xl px-4 py-1">Lees meer</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectPreviewBox
