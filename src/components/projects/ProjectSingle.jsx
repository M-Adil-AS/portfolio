import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import slugify from 'react-slugify';
import githubIcon from '../../images/githubIcon.png' 
import demoIcon from '../../images/demoIcon.png' 

const ProjectSingle = ({ title, category, image, demoURL, codeURL }) => {
	const gotoURL = (e, url) => {
		e.preventDefault()
		window.open(url=='github' ? codeURL : demoURL)
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<Link to={`/projects/single-project/${slugify(title)}`} aria-label="Single Project">
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div className="iconsContainer">
						<a href={codeURL} aria-label="Github" className="githubIconLink" target='_blank' rel="noreferrer" onClick={(e) => gotoURL(e, 'github')}>
							<img src={githubIcon} className="githubIcon" style={{background:'linear-gradient(to right, rgb(141, 141, 145), rgb(0, 0, 0))'}} alt='githubIcon'/>
						</a>
						<a href={demoURL} aria-label="Demo" className="demoIconLink" target='_blank' rel="noreferrer" onClick={(e) => gotoURL(e, 'demo')}>
							<img src={demoIcon} className="demoIcon" style={{background:'linear-gradient(to right, rgb(141, 141, 145), rgb(0, 0, 0))'}} alt='demoIcon'/>
						</a>
						<img
							src={image}
							className="rounded-t-xl border-none"
							alt="Single Project"
						/>
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2 truncate">
							{title}
						</p>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{category}
						</span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;
