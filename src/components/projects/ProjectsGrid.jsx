import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectsFilter from './ProjectsFilter';
import { useLocation } from 'react-router-dom';
import { singleProjectData } from '../../data/singleProjectData';

const ProjectsGrid = () => {
	const {
		projects,
		searchProject,
		setSearchProject,
		searchProjectsByTitle,
		selectProject,
		setSelectProject,
		selectProjectsByCategory,
	} = useContext(ProjectsContext);
	const location = useLocation()

	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Projects portfolio
				</p>
			</div>

			<div className="mt-10 sm:mt-16">
				<h3
					className="font-general-regular 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-xl
                        mb-3
                        "
				>
					Search projects by title or filter by category
				</h3>
				<div
					className="
                        searchbox-select
						flex
						text-center
                        justify-between
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        "
				>
					<div className="flex sm:justify-between justify-center gap-2">
						<span
							className="
                                hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
						>
							<FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
						</span>
						<input
							onChange={(e) => {
								setSearchProject(e.target.value);
							}}
							// style={{ width: "20rem" }}
							className="font-general-medium 
							search-project-input
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                            border-gray-200
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
                                "
							id="name"
							name="name"
							type="search"
							required=""
							placeholder="Search Projects"
							aria-label="Name"
						/>
					</div>
					<br />
					<ProjectsFilter setSelectProject={setSelectProject} />
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
				{selectProject && searchProject
					? selectProjectsByCategory.filter(pc => searchProjectsByTitle.some(pt => pc.id === pt.id)).map((project, key) => {
						if (location.pathname === "/" && key < 6)
							return <ProjectSingle
								demoURL={(singleProjectData.find(p => p.id.includes(project.id))).ProjectInfo.demoUrl}
								codeURL={(singleProjectData.find(p => p.id.includes(project.id))).ProjectInfo.codeUrl}
								title={project.title}
								category={project.category}
								image={project.img}
								key={project.id}
							/>
						else if (location.pathname === "/projects")
							return <ProjectSingle
								demoURL={(singleProjectData.find(p => p.id.includes(project.id))).ProjectInfo.demoUrl}
								codeURL={(singleProjectData.find(p => p.id.includes(project.id))).ProjectInfo.codeUrl}
								title={project.title}
								category={project.category}
								image={project.img}
								key={project.id}
							/>
					})
					: selectProject
						? selectProjectsByCategory.map((project, key) => {
							if (location.pathname === "/" && key < 6)
								return <ProjectSingle
									demoURL={(singleProjectData.find(p => p.id.includes(project.id))).ProjectInfo.demoUrl}
									codeURL={(singleProjectData.find(p => p.id.includes(project.id))).ProjectInfo.codeUrl}
									title={project.title}
									category={project.category}
									image={project.img}
									key={project.id}
								/>
							else if (location.pathname === "/projects")
								return <ProjectSingle
									demoURL={(singleProjectData.find(p => p.id.includes(project.id))).ProjectInfo.demoUrl}
									codeURL={(singleProjectData.find(p => p.id.includes(project.id))).ProjectInfo.codeUrl}
									title={project.title}
									category={project.category}
									image={project.img}
									key={project.id}
								/>
						})
						: searchProject
							? (searchProjectsByTitle.filter((obj, index, self) => self.findIndex((o) => o.title === obj.title) === index)).map((project, key) => {
								if (location.pathname === "/" && key < 6)
									return <ProjectSingle
										demoURL={(singleProjectData.find(p => p.id.includes(project.id))).ProjectInfo.demoUrl}
										codeURL={(singleProjectData.find(p => p.id.includes(project.id))).ProjectInfo.codeUrl}
										title={project.title}
										category={project.category}
										image={project.img}
										key={project.id}
									/>
								else if (location.pathname === "/projects")
									return <ProjectSingle
										demoURL={(singleProjectData.find(p => p.id.includes(project.id))).ProjectInfo.demoUrl}
										codeURL={(singleProjectData.find(p => p.id.includes(project.id))).ProjectInfo.codeUrl}
										title={project.title}
										category={project.category}
										image={project.img}
										key={project.id}
									/>
							})
							: (projects.filter((obj, index, self) => self.findIndex((o) => o.title === obj.title) === index)).map((project, key) => {
								if (location.pathname === "/" && key < 6)
									return <ProjectSingle
										demoURL={(singleProjectData.find(p => p.id.includes(project.id))).ProjectInfo.demoUrl}
										codeURL={(singleProjectData.find(p => p.id.includes(project.id))).ProjectInfo.codeUrl}
										title={project.title}
										category={project.category}
										image={project.img}
										key={project.id}
									/>
								else if (location.pathname === "/projects")
									return <ProjectSingle
										demoURL={(singleProjectData.find(p => p.id.includes(project.id))).ProjectInfo.demoUrl}
										codeURL={(singleProjectData.find(p => p.id.includes(project.id))).ProjectInfo.codeUrl}
										title={project.title}
										category={project.category}
										image={project.img}
										key={project.id}
									/>
							})
				}
				
			</div>
		</section>
	);
};

export default ProjectsGrid;
