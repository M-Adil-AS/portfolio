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
import Tetris2 from '../images/Tetris2.png';
import Tetris3 from '../images/Tetris3.png';
import Tetris4 from '../images/Tetris4.png';
import _2048_2 from '../images/_2048_2.png';
import _2048_3 from '../images/_2048_3.png';
import _2048_4 from '../images/_2048_4.png';
import Memory2 from '../images/Memory2.png';
import Memory3 from '../images/Memory3.png';
import Memory4 from '../images/Memory4.png';
import Maze2 from '../images/Maze2.png';
import Maze3 from '../images/Maze3.png';
import Maze4 from '../images/Maze4.png';
import Pacman2 from '../images/Pacman2.png';
import Pacman3 from '../images/Pacman3.png';
import Pacman4 from '../images/Pacman4.png';
import Flappy2 from '../images/Flappy2.png';
import Flappy3 from '../images/Flappy3.png';
import Flappy4 from '../images/Flappy4.png';
import Piano2 from '../images/Piano2.png';
import Piano3 from '../images/Piano3.png';
import Piano4 from '../images/Piano4.png';
import Crack2 from '../images/Crack2.png';
import Crack3 from '../images/Crack3.png';
import Crack4 from '../images/Crack4.png';
import Ping2 from '../images/Ping2.png';
import Ping3 from '../images/Ping3.png';
import Ping4 from '../images/Ping4.png';
import EPuzzle2 from '../images/8Puzzle2.png';
import EPuzzle3 from '../images/8Puzzle3.png';
import EPuzzle4 from '../images/8Puzzle4.png';
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
			Instructions: [
				{id: 1, details: 'Press Spacebar to submit word'},
				{id: 2, details: 'Press Backspace to remove a letter'},
				{id: 3, details: 'Press Enter to skip to next round'},
				{id: 4, details: 'Press Esc to surrender'}
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
			Instructions: [
				{id: 1, details: 'ArrowUp to shoot, ArrowLeft and ArrowRight to move'}
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
			Instructions: [
				{id: 1, details: 'Enter the value of K'},
				{id: 2, details: "Press key 'Enter' to start the algorithm"},
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

	{
		id:[109,110],
		ProjectHeader: {title: 'Tetris', publishDate: 'Oct 10, 2021', tags: 'Game Dev - Problem Solving'},
		ProjectImages: [
			{id: 1, title: 'Tetris', img: Tetris2},
			{id: 2, title: 'Tetris', img: Tetris3},
			{id: 3, title: 'Tetris', img: Tetris4},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To build Tetris Browser Game having all main features',
			CodeUrlHeading: "Code",
			codeUrl: "https://github.com/M-Adil-AS/Tetris",
			demoUrlHeading: "Demo",
			demoUrl: "https://m-adil-as.github.io/Tetris",
			Technologies: [{title: 'Tools & Technologies', techs: ['HTML', 'CSS', 'JavaScript']}],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{id: 1, details: 'A Browser 2D Game built using JavaScript.'},
				{id: 2, details: 'Tetris is a classic puzzle video game that challenges players to manipulate falling blocks called Tetriminos to create complete horizontal lines. The goal is to clear as many lines as possible to earn points and prevent the stack of blocks from reaching the top of the playing field.'},
			],
			Instructions: [
				{id: 1, details: 'Press ArrowLeft & ArrowRight to move block'},
				{id: 2, details: 'Press ArrowDown to speed up'},
				{id: 3, details: 'Press Spacebar to hard drop'},
				{id: 4, details: 'Press ArrowUp to rotate block'}
			],
		}
	},

	{
		id:[111,112],
		ProjectHeader: {title: '2048', publishDate: 'Aug 28, 2022', tags: 'Game Dev - Problem Solving'},
		ProjectImages: [
			{id: 1, title: '2048', img: _2048_2},
			{id: 2, title: '2048', img: _2048_3},
			{id: 3, title: '2048', img: _2048_4},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To build 2048 Browser Game',
			CodeUrlHeading: "Code",
			codeUrl: "https://github.com/M-Adil-AS/2048",
			demoUrlHeading: "Demo",
			demoUrl: "https://m-adil-as.github.io/2048",
			Technologies: [{title: 'Tools & Technologies', techs: ['HTML', 'CSS', 'JavaScript']}],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{id: 1, details: 'A Browser 2D Game built using JavaScript.'},
				{id: 2, details: '2048 is a popular puzzle game where players slide numbered tiles on a grid to combine them and reach the ultimate goal of creating a tile with a value of 2048. Each move combines adjacent tiles of the same number, doubling their value. The challenge lies in strategically planning the moves to create larger tiles and prevent the grid from filling up.'},
			],
			Instructions: [
				{id: 1, details: 'Arrow Keys to play the game'}
			],
		}
	},

	{
		id:[113,114],
		ProjectHeader: {title: 'Memory Cards', publishDate: 'June 28, 2020', tags: 'Game Dev - Problem Solving'},
		ProjectImages: [
			{id: 1, title: 'Memory Cards', img: Memory2},
			{id: 2, title: 'Memory Cards', img: Memory3},
			{id: 3, title: 'Memory Cards', img: Memory4},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To build Memory Cards Browser Game',
			CodeUrlHeading: "Code",
			codeUrl: "https://github.com/M-Adil-AS/Memory-Card",
			demoUrlHeading: "Demo",
			demoUrl: "https://m-adil-as.github.io/Memory-Card",
			Technologies: [{title: 'Tools & Technologies', techs: ['HTML', 'CSS', 'JavaScript']}],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{id: 1, details: 'A Browser 2D Game built using JavaScript.'},
				{id: 2, details: "The game consists of a deck of cards with pairs of images or symbols hidden on the back. Players take turns flipping two cards at a time, trying to find matching pairs. If the cards don't match, they are flipped back over, and the player's task is to remember their positions for future turns."},
				{id: 3, details: "The objective of the Memory Card Game is to successfully match all the pairs in the shortest amount of time."}
			]
		}
	},

	{
		id:[115,116],
		ProjectHeader: {title: 'Maze Problem', publishDate: 'June 4, 2020', tags: 'AI - Problem Solving'},
		ProjectImages: [
			{id: 1, title: 'Maze Problem', img: Maze2},
			{id: 2, title: 'Maze Problem', img: Maze3},
			{id: 3, title: 'Maze Problem', img: Maze4},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To solve Maze Problem using AI Search Algorithms',
			CodeUrlHeading: "Code",
			codeUrl: "https://github.com/M-Adil-AS/AI-Search",
			demoUrlHeading: "Demo",
			demoUrl: "https://m-adil-as.github.io/AI-Search",
			Technologies: [{title: 'Tools & Technologies', techs: ['HTML', 'CSS', 'JavaScript']}],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{id: 1, details: 'Implementation of A*, DFS, BFS, GBFS search algorithms using JavaScript.'},
				{id: 2, details: "This project helps to understand how these algorithms work and how do they compare to each other. The program applies these algorithms to find solution of different mazes."},
				{id: 3, details: "'I' represents the initial state/node whereas 'G' represents the goal state/node."}
			],
			Instructions: [
				{id: 1, details: 'Enter Maze No: 1 OR 2 OR 3'},
				{id: 2, details: 'Show Solution OR Explored Nodes (S OR E)'},
				{id: 3, details: 'Enter Algorithm No: 1. A*, 2. BFS, 3. DFS, 4.GBFS'}
			],
		}
	},

	{
		id:[117,118],
		ProjectHeader: {title: 'Pacman', publishDate: 'April 4, 2022', tags: 'Game Dev - Problem Solving'},
		ProjectImages: [
			{id: 1, title: 'Pacman', img: Pacman2},
			{id: 2, title: 'Pacman', img: Pacman3},
			{id: 3, title: 'Pacman', img: Pacman4},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To build Pacman Game having all core functionalities',
			CodeUrlHeading: "Code",
			codeUrl: "https://github.com/M-Adil-AS/Pacman",
			demoUrlHeading: "Demo",
			demoUrl: "https://m-adil-as.github.io/Pacman",
			Technologies: [{title: 'Tools & Technologies', techs: ['HTML', 'CSS', 'JavaScript']}],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{id: 1, details: 'A clone of Pacman Game using JavaScript.'},
				{id: 2, details: "Each ghost in the game has a unique behaviour determined by its AI."},
				{id: 3, details: "Each ghost behaves differently in each of the four modes: Chase, Scatter, Fear, Eaten"}
			]
		}
	},

	{
		id:[119,120],
		ProjectHeader: {title: 'Flappy Bird', publishDate: 'July 24, 2021', tags: 'Game Dev - Problem Solving'},
		ProjectImages: [
			{id: 1, title: 'Flappy Bird', img: Flappy2},
			{id: 2, title: 'Flappy Bird', img: Flappy3},
			{id: 3, title: 'Flappy Bird', img: Flappy4},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To build Flappy Bird Browser Game',
			CodeUrlHeading: "Code",
			codeUrl: "https://github.com/M-Adil-AS/Flappy-Bird",
			demoUrlHeading: "Demo",
			demoUrl: "https://m-adil-as.github.io/Flappy-Bird",
			Technologies: [{title: 'Tools & Technologies', techs: ['HTML', 'CSS', 'JavaScript']}],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{id: 1, details: 'Flappy Bird Game built using JavaScript'},
				{id: 2, details: "It makes use of concepts like infinite scrolling of game objects and background."},
				{id: 3, details: "The player controls a small bird that constantly moves forward in a horizontal direction. The game environment consists of pipes arranged vertically with gaps in between. The pipes appear at regular intervals, and the bird must pass through the gaps to score points. If the bird touches the pipes or the ground, the game ends."}
			],
			Instructions: [
				{id: 1, details: 'The game is not responsive. Adjust the browser screen zoom % so that SCORE is displayed in the middle of the screen.'},
				{id: 2, details: "Press 'Spacebar' to start the game and to jump..."}
			],
		}
	},

	{
		id:[121],
		ProjectHeader: {title: 'Keyboard Piano', publishDate: 'Jan 08, 2021', tags: 'Problem Solving'},
		ProjectImages: [
			{id: 1, title: 'Keyboard Piano', img: Piano2},
			{id: 2, title: 'Keyboard Piano', img: Piano3},
			{id: 3, title: 'Keyboard Piano', img: Piano4},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'Develop a Keyboard Piano program that provides a virtual musical experience',
			CodeUrlHeading: "Code",
			codeUrl: "https://github.com/M-Adil-AS/Keyboard-Piano",
			demoUrlHeading: "Demo",
			demoUrl: "https://m-adil-as.github.io/Keyboard-Piano",
			Technologies: [{title: 'Tools & Technologies', techs: ['HTML', 'CSS', 'JavaScript', 'Tone JS']}],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{id: 1, details: 'The program allows users to play and create music using their computer keyboard.'},
				{id: 2, details: "It aims to simulate a genuine piano-playing experience while promoting creativity and musical exploration."}
			],
			Instructions: [
				{id: 1, details: 'White Notes (From Tab Key to Backslash Key)'},
				{id: 2, details: "Black Notes (From Exclamation Key to Backspace Key)"}
			],
		}
	},

	{
		id:[122],
		ProjectHeader: {title: 'Crack the Code', publishDate: 'April 27, 2020', tags: 'Problem Solving'},
		ProjectImages: [
			{id: 1, title: 'Crack the Code', img: Crack2},
			{id: 2, title: 'Crack the Code', img: Crack3},
			{id: 3, title: 'Crack the Code', img: Crack4},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To find the Code which satisfies the given five conditions',
			CodeUrlHeading: "Code",
			codeUrl: "https://github.com/M-Adil-AS/Crack-the-Code",
			demoUrlHeading: "Demo",
			demoUrl: "https://m-adil-as.github.io/Crack-the-Code",
			Technologies: [{title: 'Tools & Technologies', techs: ['HTML', 'CSS', 'JavaScript']}],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{id: 1, details: 'A personal project inspired by a famous puzzle. Instead of hardcoded values, we can input dynamic values and the algorithm is able to solve the riddle.'}
			]
		}
	},

	{
		id:[123,124],
		ProjectHeader: {title: 'Ping Pong', publishDate: 'Sept 11, 2021', tags: 'Game Dev - Problem Solving'},
		ProjectImages: [
			{id: 1, title: 'Ping Pong', img: Ping2},
			{id: 2, title: 'Ping Pong', img: Ping3},
			{id: 3, title: 'Ping Pong', img: Ping4},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To build Ping Pong Game in which player plays against AI',
			CodeUrlHeading: "Code",
			codeUrl: "https://github.com/M-Adil-AS/Ping-Pong",
			demoUrlHeading: "Demo",
			demoUrl: "https://m-adil-as.github.io/Ping-Pong",
			Technologies: [{title: 'Tools & Technologies', techs: ['HTML', 'CSS', 'JavaScript']}],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{id: 1, details: 'A 2D ping pong video game with AI as the opponent brings the classic table tennis sport to the digital gaming world.'},
				{id: 2, details: "Players can enjoy the fast-paced gameplay, trying to anticipate the ball's trajectory and use precise timing to make skillful shots."}
			],
			Instructions: [
				{id: 1, details: "Move Paddle by pressing and holding down keys 'W' and 'S'"}
			],
		}
	},

	{
		id:[125,126],
		ProjectHeader: {title: '8 Puzzle', publishDate: 'April 25, 2022', tags: 'AI - Problem Solving'},
		ProjectImages: [
			{id: 1, title: '8 Puzzle', img: EPuzzle2},
			{id: 2, title: '8 Puzzle', img: EPuzzle3},
			{id: 3, title: '8 Puzzle', img: EPuzzle4},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To solve 8 puzzle problem optimally using A* algorithm',
			CodeUrlHeading: "Code",
			codeUrl: "https://github.com/M-Adil-AS/8-Puzzle",
			demoUrlHeading: "Demo",
			demoUrl: "https://m-adil-as.github.io/8-Puzzle",
			Technologies: [{title: 'Tools & Technologies', techs: ['HTML', 'CSS', 'JavaScript']}],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{id: 1, details: 'The 8-puzzle problem is a classic sliding puzzle that is based on rearranging a 3x3 grid of numbered tiles by sliding them into an empty space. The objective is to reach the goal state from a given initial configuration, using the fewest possible moves.'},
				{id: 2, details: "In this project, A* search algorithm is used to solve this problem. A* algorithm intelligently explores possible moves by considering both the cost of reaching a certain state and an admissible heuristic that estimates the remaining distance to the goal state."}
			],
			Instructions: [
				{id: 1, details: "Click on the browser screen to start the algorithm."},
				{id: 2, details: "If Alert Message pops up, it means that the initial state is not solvable. Click OK to refresh and start with a new random initial state."}
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