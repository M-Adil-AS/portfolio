// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Crosswords2 from '../images/Crosswords 2.png';
import Crosswords3 from '../images/Crosswords 3.png';
import Crosswords4 from '../images/Crosswords 4.png';
import Doodle2 from '../images/Doodle2.png';
import Doodle3 from '../images/Doodle3.png';
import Doodle4 from '../images/Doodle4.png';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';
import { projectsData } from './projects';

const processData = () => {
	return singleProjectRawData.map(rawProject => {
		rawProject['ProjectInfo'].SocialSharingHeading = 'Share This'
		rawProject['ProjectInfo'].SocialSharing = [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: 'https://twitter.com/',
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://instagram.com/',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://linkedin.com/',
			},
			{
				id: 5,
				name: 'Youtube',
				icon: <FiYoutube />,
				url: 'https://www.youtube.com/',
			},
		]

		let category = (projectsData.find(project => project.id === rawProject.id)).category

		rawProject['RelatedProject'] = {
			title: 'Related Projects',
			Projects: projectsData.filter(project => project.category === category && project.id != rawProject.id)
		}

		return rawProject
	})
}

let singleProjectRawData = [
	{
		id:100,
		ProjectHeader: {title: 'Crosswords', publishDate: 'Dec 28, 2021', tags: 'Game Dev - Problem Solving'},
		ProjectImages: [
			{id: 1, title: 'Crosswords', img: Crosswords2},
			{id: 2, title: 'Crosswords', img: Crosswords3},
			{id: 3, title: 'Crosswords', img: Crosswords4},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To generate a dynamic crosswords puzzle using a time efficient method',
			CodeUrlHeading: "Code",
			codeUrl: "https://github.com/M-Adil-AS/Crosswords",
			demoUrlHeading: "Demo",
			demoUrl: "https://m-adil-as.github.io/Crosswords/",
			Technologies: [{title: 'Tools & Technologies', techs: ['HTML', 'CSS', 'JavaScript']}],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{id: 1, details: 'This project was inspired by the Android game Wordscapes. Wordscapes have hundreds of levels but those levels are hardcoded.'},
				{id: 2, details: 'In this game, we get a random combination of 6 alphabets to make words from in limited time. Instead of being a hardcoded puzzle, the program generates a dynamic puzzle everytime using words from dictionary in a very short period of time (3 seconds average).'},
			],
		}
	},

	{
		id:101,
		ProjectHeader: {title: 'Crosswords', publishDate: 'Dec 28, 2021', tags: 'Game Dev - Problem Solving'},
		ProjectImages: [
			{id: 1, title: 'Crosswords', img: Crosswords2},
			{id: 2, title: 'Crosswords', img: Crosswords3},
			{id: 3, title: 'Crosswords', img: Crosswords4},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To generate a dynamic crosswords puzzle using a time efficient method',
			CodeUrlHeading: "Code",
			codeUrl: "https://github.com/M-Adil-AS/Crosswords",
			demoUrlHeading: "Demo",
			demoUrl: "https://m-adil-as.github.io/Crosswords/",
			Technologies: [{title: 'Tools & Technologies', techs: ['HTML', 'CSS', 'JavaScript']}],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{id: 1, details: 'This project was inspired by the Android game Wordscapes. Wordscapes have hundreds of levels but those levels are hardcoded.'},
				{id: 2, details: 'In this game, we get a random combination of 6 alphabets to make words from in limited time. Instead of being a hardcoded puzzle, the program generates a dynamic puzzle everytime using words from dictionary in a very short period of time (3 seconds average).'},
			],
		}
	},

	{
		id:102,
		ProjectHeader: {title: 'Doodle Jump', publishDate: 'Sept 20, 2022', tags: 'Game Dev - Problem Solving'},
		ProjectImages: [
			{id: 1, title: 'Doodle Jump', img: Doodle2},
			{id: 2, title: 'Doodle Jump', img: Doodle3},
			{id: 3, title: 'Doodle Jump', img: Doodle4},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To build a Doodle Jump game which gets harder to play over time',
			CodeUrlHeading: "Code",
			codeUrl: "https://github.com/M-Adil-AS/Doodle-Jump",
			demoUrlHeading: "Demo",
			demoUrl: "https://m-adil-as.github.io/Doodle-Jump/",
			Technologies: [{title: 'Tools & Technologies', techs: ['HTML', 'CSS', 'JavaScript']}],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{id: 1, details: 'This game is built using HTML5 Canvas Element and Object Oriented Programming in JavaScript.'},
				{id: 2, details: 'It makes use of concepts like infinite scrolling of game objects and background. The game gets more difficult to play with the increase in score value.'},
			],
		}
	},

	{
		id:103,
		ProjectHeader: {title: 'Doodle Jump', publishDate: 'Sept 20, 2022', tags: 'Game Dev - Problem Solving'},
		ProjectImages: [
			{id: 1, title: 'Doodle Jump', img: Doodle2},
			{id: 2, title: 'Doodle Jump', img: Doodle3},
			{id: 3, title: 'Doodle Jump', img: Doodle4},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To build a Doodle Jump game which gets harder to play over time',
			CodeUrlHeading: "Code",
			codeUrl: "https://github.com/M-Adil-AS/Doodle-Jump",
			demoUrlHeading: "Demo",
			demoUrl: "https://m-adil-as.github.io/Doodle-Jump/",
			Technologies: [{title: 'Tools & Technologies', techs: ['HTML', 'CSS', 'JavaScript']}],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{id: 1, details: 'This game is built using HTML5 Canvas Element and Object Oriented Programming in JavaScript.'},
				{id: 2, details: 'It makes use of concepts like infinite scrolling of game objects and background. The game gets more difficult to play with the increase in score value.'},
			],
		}
	},































	// {
	// 	id:2,
	// 	ProjectHeader: {
	// 		title: 'Phoenix Digital Agency',
	// 		publishDate: 'Jul 26, 2021',
	// 		tags: 'UI / Frontend',
	// 	},
	// 	ProjectImages: [
	// 		{
	// 			id: 1,
	// 			title: 'Kabul Project Management UI',
	// 			img: Image1,
	// 		},
	// 		{
	// 			id: 2,
	// 			title: 'Kabul Project Management UI',
	// 			img: Image2,
	// 		},
	// 		{
	// 			id: 3,
	// 			title: 'Kabul Project Management UI',
	// 			img: Image3,
	// 		},
	// 	],
	// 	ProjectInfo: {
	// 		ClientHeading: 'About Client',
	// 		CompanyInfo: [
	// 			{
	// 				id: 1,
	// 				title: 'Name',
	// 				details: 'Company Ltd Company Ltd',
	// 			},
	// 			{
	// 				id: 2,
	// 				title: 'Services',
	// 				details: 'UI Design & Frontend Development UI Design & Frontend Development UI Design & Frontend Development',
	// 			},
	// 			{
	// 				id: 3,
	// 				title: 'Website',
	// 				details: 'https://UIDesignUIDesignUIDesignUIDesignUIDesignUIDesign.com',
	// 			},
	// 			{
	// 				id: 4,
	// 				title: 'Phone',
	// 				details: '555 8888 888',
	// 			},
	// 		],
	// 		ObjectivesHeading: 'Objective',
	// 		ObjectivesDetails:
	// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
	// 		CodeUrlHeading: "Code",
	// 		codeUrl: "https://www.google.com/codeurl",
	// 		demoUrlHeading: "Demo",
	// 		demoUrl: "https://www.google.com/demourl",
	// 		Technologies: [
	// 			{
	// 				title: 'Tools & Technologies',
	// 				techs: [
	// 					'HTML',
	// 					'CSS',
	// 					'JavaScript',
	// 					'Vue.js',
	// 					'TailwindCSS',
	// 					'AdobeXD',
	// 				],
	// 			},
	// 		],
	// 		ProjectDetailsHeading: 'Description',
	// 		ProjectDetails: [
	// 			{
	// 				id: 1,
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 			{
	// 				id: 2,
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: 3,
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: 4,
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 		],
	// 	}
	// },

































	// {
	// 	id:3,
	// 	ProjectHeader: {
	// 		title: 'Project Management UI',
	// 		publishDate: 'Jul 26, 2021',
	// 		tags: 'UI / Frontend',
	// 	},
	// 	ProjectImages: [
	// 		{
	// 			id: 1,
	// 			title: 'Kabul Project Management UI',
	// 			img: Image1,
	// 		},
	// 		{
	// 			id: 2,
	// 			title: 'Kabul Project Management UI',
	// 			img: Image2,
	// 		},
	// 		{
	// 			id: 3,
	// 			title: 'Kabul Project Management UI',
	// 			img: Image3,
	// 		},
	// 	],
	// 	ProjectInfo: {
	// 		ClientHeading: 'About Client',
	// 		CompanyInfo: [
	// 			{
	// 				id: 1,
	// 				title: 'Name',
	// 				details: 'Company Ltd',
	// 			},
	// 			{
	// 				id: 2,
	// 				title: 'Services',
	// 				details: 'UI Design & Frontend Development',
	// 			},
	// 			{
	// 				id: 3,
	// 				title: 'Website',
	// 				details: 'https://company.com',
	// 			},
	// 			{
	// 				id: 4,
	// 				title: 'Phone',
	// 				details: '555 8888 888',
	// 			},
	// 		],
	// 		ObjectivesHeading: 'Objective',
	// 		ObjectivesDetails:
	// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
	// 		CodeUrlHeading: "Code",
	// 		codeUrl: "https://www.google.com/codeurl",
	// 		demoUrlHeading: "Demo",
	// 		demoUrl: "https://www.google.com/demourl",
	// 		Technologies: [
	// 			{
	// 				title: 'Tools & Technologies',
	// 				techs: [
	// 					'HTML',
	// 					'CSS',
	// 					'JavaScript',
	// 					'Vue.js',
	// 					'TailwindCSS',
	// 					'AdobeXD',
	// 				],
	// 			},
	// 		],
	// 		ProjectDetailsHeading: 'Description',
	// 		ProjectDetails: [
	// 			{
	// 				id: 1,
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 			{
	// 				id: 2,
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: 3,
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: 4,
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 		],
	// 	}
	// },











	// {
	// 	id:4,
	// 	ProjectHeader: {
	// 		title: 'Cloud Storage Platform',
	// 		publishDate: 'Jul 26, 2021',
	// 		tags: 'UI / Frontend',
	// 	},
	// 	ProjectImages: [
	// 		{
	// 			id: 1,
	// 			title: 'Kabul Project Management UI',
	// 			img: Image1,
	// 		},
	// 		{
	// 			id: 2,
	// 			title: 'Kabul Project Management UI',
	// 			img: Image2,
	// 		},
	// 		{
	// 			id: 3,
	// 			title: 'Kabul Project Management UI',
	// 			img: Image3,
	// 		},
	// 	],
	// 	ProjectInfo: {
	// 		ClientHeading: 'About Client',
	// 		CompanyInfo: [
	// 			{
	// 				id: 1,
	// 				title: 'Name',
	// 				details: 'Company Ltd',
	// 			},
	// 			{
	// 				id: 2,
	// 				title: 'Services',
	// 				details: 'UI Design & Frontend Development',
	// 			},
	// 			{
	// 				id: 3,
	// 				title: 'Website',
	// 				details: 'https://company.com',
	// 			},
	// 			{
	// 				id: 4,
	// 				title: 'Phone',
	// 				details: '555 8888 888',
	// 			},
	// 		],
	// 		ObjectivesHeading: 'Objective',
	// 		ObjectivesDetails:
	// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
	// 		CodeUrlHeading: "Code",
	// 		codeUrl: "https://www.google.com/codeurl",
	// 		demoUrlHeading: "Demo",
	// 		demoUrl: "https://www.google.com/demourl",
	// 		Technologies: [
	// 			{
	// 				title: 'Tools & Technologies',
	// 				techs: [
	// 					'HTML',
	// 					'CSS',
	// 					'JavaScript',
	// 					'Vue.js',
	// 					'TailwindCSS',
	// 					'AdobeXD',
	// 				],
	// 			},
	// 		],
	// 		ProjectDetailsHeading: 'Description',
	// 		ProjectDetails: [
	// 			{
	// 				id: 1,
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 			{
	// 				id: 2,
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: 3,
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: 4,
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 		],
	// 	}
	// },









	// {
	// 	id:5,
	// 	ProjectHeader: {
	// 		title: 'React Social App',
	// 		publishDate: 'Jul 26, 2021',
	// 		tags: 'UI / Frontend',
	// 	},
	// 	ProjectImages: [
	// 		{
	// 			id: 1,
	// 			title: 'Kabul Project Management UI',
	// 			img: Image1,
	// 		},
	// 		{
	// 			id: 2,
	// 			title: 'Kabul Project Management UI',
	// 			img: Image2,
	// 		},
	// 		{
	// 			id: 3,
	// 			title: 'Kabul Project Management UI',
	// 			img: Image3,
	// 		},
	// 	],
	// 	ProjectInfo: {
	// 		ClientHeading: 'About Client',
	// 		CompanyInfo: [
	// 			{
	// 				id: 1,
	// 				title: 'Name',
	// 				details: 'Company Ltd',
	// 			},
	// 			{
	// 				id: 2,
	// 				title: 'Services',
	// 				details: 'UI Design & Frontend Development',
	// 			},
	// 			{
	// 				id: 3,
	// 				title: 'Website',
	// 				details: 'https://company.com',
	// 			},
	// 			{
	// 				id: 4,
	// 				title: 'Phone',
	// 				details: '555 8888 888',
	// 			},
	// 		],
	// 		ObjectivesHeading: 'Objective',
	// 		ObjectivesDetails:
	// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
	// 		CodeUrlHeading: "Code",
	// 		codeUrl: "https://www.google.com/codeurl",
	// 		demoUrlHeading: "Demo",
	// 		demoUrl: "https://www.google.com/demourl",
	// 		Technologies: [
	// 			{
	// 				title: 'Tools & Technologies',
	// 				techs: [
	// 					'HTML',
	// 					'CSS',
	// 					'JavaScript',
	// 					'Vue.js',
	// 					'TailwindCSS',
	// 					'AdobeXD',
	// 				],
	// 			},
	// 		],
	// 		ProjectDetailsHeading: 'Description',
	// 		ProjectDetails: [
	// 			{
	// 				id: 1,
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 			{
	// 				id: 2,
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: 3,
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: 4,
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 		],
	// 	}
	// },











	// {
	// 	id:6,
	// 	ProjectHeader: {
	// 		title: 'Apple Design System',
	// 		publishDate: 'Jul 26, 2021',
	// 		tags: 'UI / Frontend',
	// 	},
	// 	ProjectImages: [
	// 		{
	// 			id: 1,
	// 			title: 'Kabul Project Management UI',
	// 			img: Image1,
	// 		},
	// 		{
	// 			id: 2,
	// 			title: 'Kabul Project Management UI',
	// 			img: Image2,
	// 		},
	// 		{
	// 			id: 3,
	// 			title: 'Kabul Project Management UI',
	// 			img: Image3,
	// 		},
	// 	],
	// 	ProjectInfo: {
	// 		ClientHeading: 'About Client',
	// 		CompanyInfo: [
	// 			{
	// 				id: 1,
	// 				title: 'Name',
	// 				details: 'Company Ltd',
	// 			},
	// 			{
	// 				id: 2,
	// 				title: 'Services',
	// 				details: 'UI Design & Frontend Development',
	// 			},
	// 			{
	// 				id: 3,
	// 				title: 'Website',
	// 				details: 'https://company.com',
	// 			},
	// 			{
	// 				id: 4,
	// 				title: 'Phone',
	// 				details: '555 8888 888',
	// 			},
	// 		],
	// 		ObjectivesHeading: 'Objective',
	// 		ObjectivesDetails:
	// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
	// 		CodeUrlHeading: "Code",
	// 		codeUrl: "https://www.google.com/codeurl",
	// 		demoUrlHeading: "Demo",
	// 		demoUrl: "https://www.google.com/demourl",
	// 		Technologies: [
	// 			{
	// 				title: 'Tools & Technologies',
	// 				techs: [
	// 					'HTML',
	// 					'CSS',
	// 					'JavaScript',
	// 					'Vue.js',
	// 					'TailwindCSS',
	// 					'AdobeXD',
	// 				],
	// 			},
	// 		],
	// 		ProjectDetailsHeading: 'Description',
	// 		ProjectDetails: [
	// 			{
	// 				id: 1,
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 			{
	// 				id: 2,
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: 3,
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: 4,
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 		],
	// 	}
	// },




	// {
	// 	id:7,
	// 	ProjectHeader: {
	// 		title: 'example ABC',
	// 		publishDate: 'Jul 26, 2021',
	// 		tags: 'UI / Frontend',
	// 	},
	// 	ProjectImages: [
	// 		{
	// 			id: 1,
	// 			title: 'Kabul Project Management UI',
	// 			img: Image1,
	// 		},
	// 		{
	// 			id: 2,
	// 			title: 'Kabul Project Management UI',
	// 			img: Image2,
	// 		},
	// 		{
	// 			id: 3,
	// 			title: 'Kabul Project Management UI',
	// 			img: Image3,
	// 		},
	// 	],
	// 	ProjectInfo: {
	// 		ClientHeading: 'About Client',
	// 		CompanyInfo: [
	// 			{
	// 				id: 1,
	// 				title: 'Name',
	// 				details: 'Company Ltd',
	// 			},
	// 			{
	// 				id: 2,
	// 				title: 'Services',
	// 				details: 'UI Design & Frontend Development',
	// 			},
	// 			{
	// 				id: 3,
	// 				title: 'Website',
	// 				details: 'https://company.com',
	// 			},
	// 			{
	// 				id: 4,
	// 				title: 'Phone',
	// 				details: '555 8888 888',
	// 			},
	// 		],
	// 		ObjectivesHeading: 'Objective',
	// 		ObjectivesDetails:
	// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
	// 		CodeUrlHeading: "Code",
	// 		codeUrl: "https://www.google.com/codeurl",
	// 		demoUrlHeading: "Demo",
	// 		demoUrl: "https://www.google.com/demourl",
	// 		Technologies: [
	// 			{
	// 				title: 'Tools & Technologies',
	// 				techs: [
	// 					'HTML',
	// 					'CSS',
	// 					'JavaScript',
	// 					'Vue.js',
	// 					'TailwindCSS',
	// 					'AdobeXD',
	// 				],
	// 			},
	// 		],
	// 		ProjectDetailsHeading: 'Description',
	// 		ProjectDetails: [
	// 			{
	// 				id: 1,
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 			{
	// 				id: 2,
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: 3,
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: 4,
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 		],
	// 	}
	// }
]

export const singleProjectData = processData()