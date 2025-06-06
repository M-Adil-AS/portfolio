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
import Perceptron2 from '../images/Perceptron2.png';
import Perceptron3 from '../images/Perceptron3.png';
import Perceptron4 from '../images/Perceptron4.png';
import FYP2 from '../images/FYP2.png';
import FYP3 from '../images/FYP3.png';
import FYP4 from '../images/FYP4.png';
import interVU2 from '../images/interVU2.png';
import interVU3 from '../images/interVU3.png';
import interVU4 from '../images/interVU4.png';
import ETL2 from '../images/ETL2.png';
import ETL3 from '../images/ETL3.png';
import ETL4 from '../images/ETL4.png';
import SnakesLadders2 from '../images/SnakesLadders2.png';
import SnakesLadders3 from '../images/SnakesLadders3.png';
import SnakesLadders4 from '../images/SnakesLadders4.png';
import Xenzea2 from '../images/Xenzea2.png';
import Xenzea3 from '../images/Xenzea3.png';
import Xenzea4 from '../images/Xenzea4.png';
import SolarSystem2 from '../images/SolarSystem2.png';
import SolarSystem3 from '../images/SolarSystem3.png';
import SolarSystem4 from '../images/SolarSystem4.png';
import Minimax2 from '../images/Minimax2.png';
import Minimax3 from '../images/Minimax3.png';
import Minimax4 from '../images/Minimax4.png';
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
			demoUrl: "https://drive.google.com/file/d/1klF4rYgar6jXCH0wyQdRtzDPzpXtS6iz/view?usp=drive_link",
			Technologies: [{title: 'Tools & Technologies', techs: ['Express.js', 'Node.js', 'MongoDB', 'Socket.io', 'EJS', 'CSS', 'Bootstrap', 'JavaScript', 'Axios']}],
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
		ProjectHeader: {title: 'Keyboard Piano', publishDate: 'Jan 08, 2021', tags: 'Miscellaneous'},
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

	{
		id:[127,128],
		ProjectHeader: {title: 'Perceptron Learning', publishDate: 'June 22, 2020', tags: 'AI - Problem Solving'},
		ProjectImages: [
			{id: 1, title: 'Perceptron Learning', img: Perceptron2},
			{id: 2, title: 'Perceptron Learning', img: Perceptron3},
			{id: 3, title: 'Perceptron Learning', img: Perceptron4},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To implement Perceptron Learning Algorithm and visualize using graph',
			CodeUrlHeading: "Code",
			codeUrl: "https://github.com/M-Adil-AS/Perceptron-Learning",
			demoUrlHeading: "Demo",
			demoUrl: "https://m-adil-as.github.io/Perceptron-Learning",
			Technologies: [{title: 'Tools & Technologies', techs: ['HTML', 'CSS', 'JavaScript', 'Chart.JS']}],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{id: 1, details: 'Assign a weight to each input dimension. Go through the data points multiple times and adjust the weights value by considering the difference between actual value and estimate value (hypothesis function).'},
				{id: 2, details: "We constantly try to figure out whether we need to shift a weight value in order to better create some weight vector that is more accurately able to try to estimate what the output should be."}
			]
		}
	},

	{
		id:[129,130],
		ProjectHeader: {title: 'Computer Vision assisted Drive Thru Web Store with On chain Transactions', publishDate: 'Aug 16, 2023', tags: 'Web Application - AI'},
		ProjectImages: [
			{id: 1, title: 'Computer Vision assisted Drive Thru Web Store with On chain Transactions', img: FYP2},
			{id: 2, title: 'Computer Vision assisted Drive Thru Web Store with On chain Transactions', img: FYP3},
			{id: 3, title: 'Computer Vision assisted Drive Thru Web Store with On chain Transactions', img: FYP4},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'NED University of Engineering and Technology',
				},
				{
					id: 2,
					title: 'Website',
					details: 'https://www.neduet.edu.pk/',
				}
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To find and develop a solution which reduces the waiting time of drive thru store customers, enhances staff efficiency and secures transaction data in decentralized storage.',
			CodeUrlHeading: "Code",
			codeUrl: "https://github.com/M-Adil-AS/Computer-Vision-assisted-Drive-Thru-Web-Store-with-On-chain-Transactions",
			demoUrlHeading: "Demo",
			demoUrl: "https://youtu.be/EJOKy73AlrI",
			Technologies: [{title: 'Tools & Technologies', techs: ['Node JS', 'Mongo DB', 'EJS', 'Express JS', 'Flask', 'Bootstrap', 'CSS', 'JS', 'Ngrok', 'Axios', 'Plotly', 'IP Camera', 'Carmen Mobile App', 'Ethereum', 'Meta Mask', 'Ethers', 'Tether', 'PayPal', 'Statsmodel']}],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{id: 1, details: 'Problem: In today’s world, people are busier than ever and the conventional model of drive-thru in which orders are placed using a microphone and picked up at the window, has become obsolete. The main problem with this model is that during peak hours, the long line of cars waiting to drive through cause traffic disruptions, delays, and disorder. Furthermore, many problems like delayed payments, high fees and frozen accounts surround most of centralized transaction platforms like PayPal. These online platforms have a single point of failure and also, the transaction data is mutable and not completely secure.'},
				{id: 2, details: "Solution: To reduce the waiting time of customers and to increase employee productivity, our project utilizes Automatic Number Plate Recognition technology that can be used to notify the store staff of an incoming customer beforehand. To overcome problems like data insecurity and high fees, our system uses on-chain transactions involving decentralized storage of data which allows for secure and tamper-proof record-keeping of transactions."},
				{id: 3, details: "Step one: Customers place the order online and pay in crypto through a metawallet such as metamask."},
				{id: 4, details: "Step two: After the transaction has been verified, a task to assemble the order is created in the database. This task is assigned to an assembler employee. Assemblers pack all the order items together and mark the task as completed."},
				{id: 5, details: "Step three: Once the order has been assembled, customers are informed to pick up their order. ANPR camera is installed at a distance of a few minutes from pick-up point. The camera detects the car’s license plate and ANPR data is generated that can be automatically connected to the relevant order ID stored in the database. Upon this trigger, another task to deliver the order is created and assigned to a carrier employee."},
				{id: 6, details: "Step four: Carrier identifies the customer's vehicle by reading ANPR data within the web application and loads the shopping bags in the car’s trunk. Finally, the customer is required to confirm the delivery."},
				{id: 7, details: "Application Features: Employee Registration by Admin. Admin can update the employee’s role to suit the changing needs of the business. Admin has access to view the current status of employees, their attendance, the tasks assigned to each of them and the duration they took to complete those tasks. In case of an unsuccessful ANPR recognition, customers can manually notify the store staff on the app. An efficient task management system which is based on first-come, first-served principle. Automatic updates via Server Sent Events eliminate manual refresh to load new tasks. Work-load is balanced on all employees by the system. Furthermore, Admin can transfer tasks of an employee to other employees to maintain continuity of business in case of unplanned events. Attendance sheet that can be used by Admin to calculate the employee’s pay based on work hours given by them. Report Charts for Admin. Forecasting Sales using Time Series algorithms. Inventory Management. Recommending Products to Customers. Notifications generated for Admin."}
			]
		}
	},

	{
		id:[131],
		ProjectHeader: {title: 'interVU', publishDate: 'July 15, 2023', tags: 'Web Application'},
		ProjectImages: [
			{id: 1, title: 'interVU', img: interVU2},
			{id: 2, title: 'interVU', img: interVU3},
			{id: 3, title: 'interVU', img: interVU4},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To build a web application which allows users to keep track of all of their job interviews in one place',
			CodeUrlHeading: "Code",
			codeUrl: "https://github.com/M-Adil-AS/InterVU-backend",
			demoUrlHeading: "Demo",
			demoUrl: "https://drive.google.com/file/d/1Or25iGQEBUF-OxT-zClzDiA6-eHNL1-y/view?usp=sharing",
			Technologies: [{title: 'Tools & Technologies', techs: ['Node JS', 'Express JS', 'React JS', 'Next JS', 'Mongo DB', 'CSS', 'Tailwind UI', 'HTML', 'Chart JS']}],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{id: 1, details: 'interVU is a cutting-edge web application designed to simplify and enhance your job interview experience. With interVU, you can effortlessly managae and organize all your job interviews in one centralized platform.'},
				{id: 2, details: "The frontend is built on Next JS v13 (App Router). Proper Navigation (Handling Invalid Authentication - Routing Middleware) is applied on the frontend."},
				{id: 3, details: "Proper authentication (HTTP only Cookie - JWT), authorization (demo user), middlewares, error-handling mechanism (async wrapper - HTTP Status Codes - Custom Error Classes), and a few security features (XSS protection, HTTP headers, CORS, rateLimiter) are put into practice in backend of the application."}
			]
		}
	},

	{
		id:[132],
		ProjectHeader: {title: 'ETL', publishDate: 'Aug 26, 2023', tags: 'Web Application'},
		ProjectImages: [
			{id: 1, title: 'ETL', img: ETL2},
			{id: 2, title: 'ETL', img: ETL3},
			{id: 3, title: 'ETL', img: ETL4},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To implement ETL pipeline using Node JS streams and MongoDB',
			CodeUrlHeading: "Code",
			codeUrl: "https://github.com/M-Adil-AS/ETL-Project",
			demoUrlHeading: "Demo",
			demoUrl: "https://drive.google.com/file/d/1q7BXTg1h_q6PIKDpyAEFbiCJZLskrkMt/view?usp=sharing",
			Technologies: [{title: 'Tools & Technologies', techs: ['Node JS', 'Express JS', 'Mongo DB', 'CSS', 'Bootstrap', 'EJS', 'JSONStream', 'csv-parser', 'Axios', 'JavaScript']}],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{id: 1, details: "This project demonstrates an ETL pipeline implemented using Node.JS Streams to ensure a memory-efficient data processing flow, particularly when dealing with large datasets. The pipeline's main goal is to gather data from diverse sources, transform it into a consistent format, and then load it into a MongoDB collection."},
				{id: 2, details: "Step 1: Data is extracted from four distinct sources, including two APIs, a JSON file, and a CSV file. JSONStream and csv-parser libraries are employed to parse and transform JSON and CSV data."},
				{id: 3, details: "Step 2: The extracted data streams are then transformed using a custom transform stream. The data transformation logic is applied to each chunk of data as it flows through the stream."},
				{id: 4, details: "Step 3: In the loading phase, the transformed data is directly loaded into a MongoDB collection using the initializeUnorderedBulkOp method."},
				{id: 5, details: "Furthermore, to allow the visitors to view the data stored in the MongoDB database, an API endpoint streams data chunks to the frontend, enabling the browser to process and present large datasets with improved responsiveness."}
			]
		}
	},

	{
		id:[133,134],
		ProjectHeader: {title: 'Snakes and Ladders', publishDate: 'Dec 03, 2023', tags: 'Game Dev - Problem Solving'},
		ProjectImages: [
			{id: 1, title: 'Snakes and Ladders', img: SnakesLadders2},
			{id: 2, title: 'Snakes and Ladders', img: SnakesLadders3},
			{id: 3, title: 'Snakes and Ladders', img: SnakesLadders4},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To build Snakes and Ladders Browser Game',
			CodeUrlHeading: "Code",
			codeUrl: "https://github.com/M-Adil-AS/Snakes-and-Ladders",
			demoUrlHeading: "Demo",
			demoUrl: "https://m-adil-as.github.io/Snakes-and-Ladders",
			Technologies: [{title: 'Tools & Technologies', techs: ['HTML', 'CSS', 'JavaScript']}],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{id: 1, details: 'One hundred squares full of traps and tricks. Roll the dice and try your luck! Ladders will take you up but Snakes will take you down!'},
			],
			Instructions: [
				{id: 1, details: "Enter the no. of players."},
				{id: 2, details: "Press 'S' to roll the dice."}
			],
		}
	},

	{
		id:[135,136],
		ProjectHeader: {title: 'Snake Xenzea', publishDate: 'Dec 03, 2020', tags: 'Game Dev - Problem Solving'},
		ProjectImages: [
			{id: 1, title: 'Snake Xenzea', img: Xenzea2},
			{id: 2, title: 'Snake Xenzea', img: Xenzea3},
			{id: 3, title: 'Snake Xenzea', img: Xenzea4},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To build Snake Xenzea Browser Game',
			CodeUrlHeading: "Code",
			codeUrl: "https://github.com/M-Adil-AS/Snake-Xenzea",
			demoUrlHeading: "Demo",
			demoUrl: "https://m-adil-as.github.io/Snake-Xenzea",
			Technologies: [{title: 'Tools & Technologies', techs: ['HTML', 'CSS', 'JavaScript']}],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{id: 1, details: 'The player must keep the snake from colliding with itself, which gets harder as the snake lengthens by eating food.'},
			],
			Instructions: [
				{id: 1, details: "Adjust the browser screen zoom % as the game is not responsive"},
				{id: 2, details: "Use Arrow keys to move the snake"}
			],
		}
	},

	{
		id:[137],
		ProjectHeader: {title: 'Solar System', publishDate: 'Oct 10, 2021', tags: 'Problem Solving'},
		ProjectImages: [
			{id: 1, title: 'Solar System', img: SolarSystem2},
			{id: 2, title: 'Solar System', img: SolarSystem3},
			{id: 3, title: 'Solar System', img: SolarSystem4},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To simulate Solar System',
			CodeUrlHeading: "Code",
			codeUrl: "https://github.com/M-Adil-AS/Solar-System",
			demoUrlHeading: "Demo",
			demoUrl: "https://m-adil-as.github.io/Solar-System",
			Technologies: [{title: 'Tools & Technologies', techs: ['HTML', 'CSS', 'JavaScript']}],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{id: 1, details: 'This simulation represents a simplified model of the solar system.'},
				{id: 2, details: "It combines physics concepts such as circular motion, angular velocity, and trigonometry to create a visually appealing representation of celestial bodies in motion."}
			],
			Instructions: [
				{id: 1, details: "Press Key: (1-5) to switch the background image."}
			],
		}
	},

	{
		id:[138, 139, 140],
		ProjectHeader: {title: 'Tic Tac Toe', publishDate: 'Dec 10, 2023', tags: 'AI - Game Dev - Problem Solving'},
		ProjectImages: [
			{id: 1, title: 'Tic Tac Toe', img: Minimax2},
			{id: 2, title: 'Tic Tac Toe', img: Minimax3},
			{id: 3, title: 'Tic Tac Toe', img: Minimax4},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To build Tic Tac Toe game and implement Minimax Algorithm to enable Computer to play against Human',
			CodeUrlHeading: "Code",
			codeUrl: "https://github.com/M-Adil-AS/Tic-Tac-Toe",
			demoUrlHeading: "Demo",
			demoUrl: "https://m-adil-as.github.io/Tic-Tac-Toe",
			Technologies: [{title: 'Tools & Technologies', techs: ['HTML', 'CSS', 'JavaScript']}],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{id: 1, details: 'This game not only provides a classic two-player mode but also offers a challenging single-player experience against AI opponent.'},
				{id: 2, details: "Using the Minimax algorithm, the AI opponent ensures a formidable adversary, making every move strategically to either secure a victory or force a draw."}
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