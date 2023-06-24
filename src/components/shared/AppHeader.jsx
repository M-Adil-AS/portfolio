import { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import HireMeModal from '../HireMeModal';
import logoLight from '../../images/logo-light-img.png';
import logoDark from '../../images/logo-dark-img.png';
import { motion } from 'framer-motion';
import Button from '../reusable/Button';
import { Toaster, toast } from 'react-hot-toast';

const AppHeader = ({activeTheme, setTheme}) => {
	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}

	function showHireMeModal(isSubmitted) {
		if (!showModal) {
			setShowModal(true);
			document
				.getElementsByTagName('html')[0]
				.classList.add('overflow-y-hidden');
		} else {
			document
				.getElementsByTagName('html')[0]
				.classList.remove('overflow-y-hidden');
			if (isSubmitted) {
				toast.success('Application submitted!', {
					duration: 4000,
				})
				setTimeout(() => {
					setShowModal(false);
				}, 1000);
			}
			else {
				setShowModal(false)
			}
		}
	}

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className="sm:container sm:mx-auto"
		>
			<Toaster
				position="top-center"
				reverseOrder={false}
			/>
			<div className="z-10 max-w-screen-lg xl:max-w-screen-xl block md:flex justify-between items-center py-6">
				{/* Header menu links and small screen hamburger menu */}
				<div className="flex justify-between items-center px-4 sm:px-0">
					<div>
						<Link to="/">
							{activeTheme === 'dark' ? (
								<img
									src={logoDark}
									className="w-36 logo-img"
									alt="Dark Logo"
								/>
							) : (
								<img
									src={logoLight}
									className="w-36 logo-img"
									alt="Dark Logo"
								/>
							)}
						</Link>
					</div>

					<div className='flex'>
						{/* Theme switcher small screen */}
						<div
							onClick={() => setTheme(activeTheme)}
							aria-label="Theme Switcher"
							style={{ padding: '0.55rem' }}
							className="block small-screen-darkmode-icon ml-0 bg-primary-light dark:bg-ternary-dark shadow-sm rounded-xl cursor-pointer mr-2"
						>
							{activeTheme === 'dark' ? (
								<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
							) : (
								<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
							)}
						</div>

						{/* Small screen hamburger menu */}
						<div className={'small-screen-hamburger-menu'}>
							<button
								onClick={toggleMenu}
								type="button"
								className="focus:outline-none"
								aria-label="Hamburger Menu"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
								>
									{showMenu ? (
										<FiX className="text-3xl" />
									) : (
										<FiMenu className="text-3xl" />
									)}
								</svg>
							</button>
						</div>
					</div>
				</div>

				{/* Header links small screen */}
				<div
					className={
						showMenu
							? 'flex flex-col m-0 md:ml-4 mt-5 sm:mt-3 md:mt-3 large-screen-open-menu p-5 md:p-0 justify-center items-start shadow-lg md:shadow-none'
							: 'hidden'
					}
				>
					<Link
						to="/projects"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Projects"
					>
						Projects
					</Link>
					<Link
						to="/about"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 md:border-t-0 border-primary-light dark:border-secondary-dark"
						aria-label="About Me"
					>
						About Me
					</Link>
					<Link
						to="/contact"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 md:border-t-0 border-primary-light dark:border-secondary-dark"
						aria-label="Contact"
					>
						Contact
					</Link>
					<div className="border-t-2 pt-3 sm:pt-0 md:border-t-0 border-primary-light dark:border-secondary-dark hiremeContainer">
						<span
							onClick={showHireMeModal}
							className="font-general-medium sm:ml-4 md:ml-0 md:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24 hiremeSpan"
							aria-label="Hire Me Button"
						>
							<Button title="Hire Me" />
						</span>
					</div>
				</div>

				{/* Header links large screen */}
				<div className={`font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 md:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none`}>
					<Link
						to="/projects"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Projects"
					>
						Projects
					</Link>
					<Link
						to="/about"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="About Me"
					>
						About Me
					</Link>
					<Link
						to="/contact"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Contact"
					>
						Contact
					</Link>
				</div>

				{/* Header right section buttons */}
				<div className="hidden md:flex justify-between items-center flex-col md:flex-row">
					<div className="hidden md:flex">
						<span
							onClick={showHireMeModal}
							className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
							aria-label="Hire Me Button"
						>
							<Button title="Hire Me" />
						</span>
					</div>

					{/* Theme switcher large screen */}
					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
						) : (
							<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
						)}
					</div>
				</div>
			</div>
			{/* Hire me modal */}
			<div>
				{showModal ? (
					<HireMeModal
						onClose={showHireMeModal}
						onRequest={showHireMeModal}
					/>
				) : null}
				{showModal ? showHireMeModal : null}
			</div>
		</motion.nav>
	);
};

export default AppHeader;
