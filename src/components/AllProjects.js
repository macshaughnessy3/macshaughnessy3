import React from 'react';
import PropTypes from 'prop-types';
import Project from "./Project";
import "./styles/allprojects.scss";

const INFO={projects: [
    {
        title: "JPEG Compression",
        description:
            "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
        logo: "https://www.logo.wine/a/logo/Xilinx/Xilinx-Logo.wine.svg",
        size: "xilinx",
        linkText: "View Project",
        link: "https://github.com/macshaughnessy3/JPEG_compression",
    },

    {
        title: "Hackintosh",
        description:
            "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
        logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/c/c.svg",
        size:"",
        linkText: "View Project",
        link: "https://github.com/macshaughnessy3/hackintosh",
    },

    {
        title: "PAWS",
        description:
            "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
        logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/swift/swift.svg",
        size:"",
        linkText: "View Project",
        link: "https://github.com/macshaughnessy3/PAWS",
    },
    // {
    //     title: "Project 4",
    //     description:
    //         "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
    //     logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
    //     linkText: "View Project",
    //     link: "https://github.com",
    // },

    // {
    //     title: "Project 5",
    //     description:
    //         "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
    //     logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
    //     linkText: "View Project",
    //     link: "https://github.com",
    // },
]};

const AllProjects = () => {
	return (
		<div className="ibox2">
			{INFO.projects.map((project, index) => (
				<div className="center" key={index}>
					<Project
						logo={project.logo}
                        size={project.size}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;

Project.defaultProps = {name: 'macshaughnessy3'}
Project.propTypes = { name: PropTypes.string.isRequired}