// Import images
import Crosswords2 from '../images/Crosswords 2.png';
import Crosswords3 from '../images/Crosswords 3.png';
import Crosswords4 from '../images/Crosswords 4.png';
import Doodle2 from '../images/Doodle2.png';
import Doodle3 from '../images/Doodle3.png';
import Doodle4 from '../images/Doodle4.png';
import Connectify2 from '../images/Connectify2.png';
import Connectify3 from '../images/Connectify3.png';
import Connectify4 from '../images/Connectify4.png';
import Clustering2 from '../images/Clustering2.png';
import Clustering3 from '../images/Clustering3.png';
import Clustering4 from '../images/Clustering4.png';
import KNN2 from '../images/KNN2.png';
import KNN3 from '../images/KNN3.png';
import KNN4 from '../images/KNN4.png';
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

		let categories = (projectsData.filter(project => rawProject.id.includes(project.id))).map(project => project.category)

		let relatedProjects = projectsData.filter(project => categories.includes(project.category) && !rawProject.id.includes(project.id))
		relatedProjects = relatedProjects.filter((value, index, self) => {
			return self.findIndex(v => v.title === value.title) === index;
		})

		relatedProjects.forEach(rp => {
			let count = (projectsData.filter(p => p.title==rp.title && categories.includes(p.category))).length
			rp.count = count
		})

		relatedProjects.sort((a,b) => b.count - a.count)
		
		rawProject['RelatedProject'] = {
			title: 'Related Projects',
			Projects: relatedProjects
		}

		return rawProject
	})
}

let singleProjectRawData = [
	{
		id:[100,101],
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
		id:[102,103],
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
		id:[104],
		ProjectHeader: {title: 'Connectify', publishDate: 'Dec 30, 2019', tags: 'Web Application'},
		ProjectImages: [
			{id: 1, title: 'Connectify', img: Connectify2},
			{id: 2, title: 'Connectify', img: Connectify3},
			{id: 3, title: 'Connectify', img: Connectify4},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To build a social app with chatting feature',
			CodeUrlHeading: "Code",
			codeUrl: "https://github.com/M-Adil-AS/Connectify",
			demoUrlHeading: "Demo",
			demoUrl: "https://connectify-production.up.railway.app/",
			Technologies: [{title: 'Tools & Technologies', techs: ['Express.js', 'Node.js', 'Socket.io', 'EJS', 'CSS', 'Bootstrap', 'JavaScript']}],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{id: 1, details: 'A social networking application, incorporating features commonly found in social media platforms.'},
				{id: 2, details: 'The social app project involves implementing user authentication and authorization, allowing users to register, log in, and manage their profiles. It includes features like creating and editing user posts, following other users, and implementing a news feed to display the latest posts from followed users. Additionally, Socket.io is integrated to enable real-time instant messaging or notifications between users.'},
			],
		}
	},

	{
		id:[105,106],
		ProjectHeader: {title: 'K Means Clustering', publishDate: 'June 25, 2020', tags: 'AI - Problem Solving'},
		ProjectImages: [
			{id: 1, title: 'K Means Clustering', img: Clustering2},
			{id: 2, title: 'K Means Clustering', img: Clustering3},
			{id: 3, title: 'K Means Clustering', img: Clustering4},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To implement K-Means Clustering Algorithm and visualize using graph',
			CodeUrlHeading: "Code",
			codeUrl: "https://github.com/M-Adil-AS/K-Means-Cluster",
			demoUrlHeading: "Demo",
			demoUrl: "https://m-adil-as.github.io/K-Means-Cluster/",
			Technologies: [{title: 'Tools & Technologies', techs: ['HTML', 'CSS', 'JavaScript', 'Chart.JS']}],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{id: 1, details: 'An unsupervised machine learning classification algorithm implemented in JavaScript.'},
				{id: 2, details: 'Chart.js is used to visualize how K-Means algorithm works. In this project, data points have two features RGB and WGB which relate to the medical data of patients. After the algorithm has finished executing, patients are divided into different groups based on clusters.'},
			],
		}
	},

	{
		id:[107,108],
		ProjectHeader: {title: 'K Nearest Neighbor', publishDate: 'June 19, 2020', tags: 'AI - Problem Solving'},
		ProjectImages: [
			{id: 1, title: 'K Nearest Neighbor', img: KNN2},
			{id: 2, title: 'K Nearest Neighbor', img: KNN3},
			{id: 3, title: 'K Nearest Neighbor', img: KNN4},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To implement K-Nearest Neighbor Algorithm and visualize using graph',
			CodeUrlHeading: "Code",
			codeUrl: "https://github.com/M-Adil-AS/K-Nearest-Neighbor",
			demoUrlHeading: "Demo",
			demoUrl: "https://m-adil-as.github.io/K-Nearest-Neighbor",
			Technologies: [{title: 'Tools & Technologies', techs: ['HTML', 'CSS', 'JavaScript', 'Chart.JS']}],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{id: 1, details: 'A supervised machine learning classification algorithm implemented in JavaScript.'},
				{id: 2, details: 'Chart.js is used to visualize how K-Nearest Neighbor algorithm works. In this project, data points have two features Humidity and Pressure which relate to the history of weather. The algorithm makes a prediction whether it will rain or not based on the input test data.'},
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