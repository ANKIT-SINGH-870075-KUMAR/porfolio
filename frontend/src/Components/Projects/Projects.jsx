import { Button, Typography } from '@mui/material';
import React from 'react';
import './Projects.css';
import { AiOutlineProject } from 'react-icons/ai';
import { Delete } from '@mui/icons-material';
import { FaRegSmileWink } from 'react-icons/fa';
import { deleteProject, getUser } from '../../actions/user';
import { useDispatch } from 'react-redux';

//projectcard component 
export const ProjectCard = ({
    id,
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin = false,
}) => {
    const dispatch = useDispatch();
    const deleteHandler = async (id) => {
        await dispatch(deleteProject(id));
        dispatch(getUser());
    };
    //projectcard component - only admin requried
    return (
        <>
            <a href={url} className="projectCard" target="black">
                <div>
                    <img src={projectImage} alt="project" />
                    <Typography variant='h5'>{projectTitle}</Typography>
                </div>
                <div>
                    <Typography variant='h4'>About Project</Typography>
                    <Typography>{description}</Typography>
                    <Typography variant='h6'>Tech Stack: {technologies}</Typography>
                </div>
            </a>
            {isAdmin && (
                <Button style={{ color: "rgba(40,40,40,0.7)" }} onClick={() => deleteHandler(id)}>
                    <Delete />
                </Button>
            )}
        </>
    );
};

//project component - no admin requried
const Projects = ({ projects = [] }) => {

    return (
        <div className='projects'>
            <Typography variant='h3'>Projects <AiOutlineProject /> </Typography>
            <div className="projectsWrapper">
                {/* projectcard component - no admin requried */}
                {projects.map((item) => (
                    <ProjectCard
                        id={item._id}
                        key={item._id}
                        url={item.url}
                        projectImage={item.image.url}
                        projectTitle={item.title}
                        description={item.description}
                        technologies={item.techStack}
                    />
                ))}
            </div>

            <Typography variant='h3' style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
                All The Projects Shown Are Made By me <FaRegSmileWink />
            </Typography>
        </div>
    );
};

export default Projects;
