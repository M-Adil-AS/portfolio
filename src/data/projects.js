// Import images
import Doodle1 from '../images/Doodle1.png';
import Crosswords1 from '../images/Crosswords 1.png'
import Connectify1 from '../images/Connectify1.png';
import Clustering1 from '../images/Clustering1.png'
import KNN1 from '../images/KNN1.png'
import Tetris1 from '../images/Tetris1.png'
import _2048_1 from '../images/_2048_1.png'
import Memory1 from '../images/Memory1.png'
import Maze1 from '../images/Maze1.png'
import Pacman1 from '../images/Pacman1.png'
import Flappy1 from '../images/Flappy1.png'
import Piano1 from '../images/Piano1.png'
import Crack1 from '../images/Crack1.png'
import Ping1 from '../images/Ping1.png'
import EPuzzle1 from '../images/8Puzzle1.png'
import Perceptron1 from '../images/Perceptron1.png'
import FYP1 from '../images/FYP1.png'
import interVU1 from '../images/interVU1.png'
import ETL1 from '../images/ETL1.png'
import SnakesLadders1 from '../images/SnakesLadders1.png'
import Xenzea1 from '../images/Xenzea1.png'
import SolarSystem1 from '../images/SolarSystem1.png'
import Minimax1 from '../images/Minimax1.png'

const customSort = (a, b) => {
	const customOrder = [129, 130, 131, 104, 132, 100, 101, 115, 116, 102, 103, 105, 106, 117, 118, 125, 126, 119, 120, 127, 128, 109, 110, 107, 108, 111, 112, 
		138, 139, 140, 133, 134, 113, 114, 123, 124, 137, 135, 136, 121, 122
	]; 
	const indexA = customOrder.indexOf(a.id);
	const indexB = customOrder.indexOf(b.id);
  
	if (indexA === -1) {
	  return 1; 
	}
	
	if (indexB === -1) {
	  return -1; 
	}
  
	return indexA - indexB; 
};

let projectsDataUnsorted = [
	{
		id: 100,
		title: 'Crosswords',
		category: 'Game Development',
		img: Crosswords1,
	},
	{
		id: 101,
		title: 'Crosswords',
		category: 'Problem Solving',
		img: Crosswords1,
	},
	{
		id: 102,
		title: 'Doodle Jump',
		category: 'Game Development',
		img: Doodle1,
	},
	{
		id: 103,
		title: 'Doodle Jump',
		category: 'Problem Solving',
		img: Doodle1,
	},
	{
		id: 104,
		title: 'Connectify',
		category: 'Web Application',
		img: Connectify1,
	},
	{
		id: 105,
		title: 'K Means Clustering',
		category: 'Artificial Intelligence',
		img: Clustering1,
	},
	{
		id: 106,
		title: 'K Means Clustering',
		category: 'Problem Solving',
		img: Clustering1,
	},
	{
		id: 107,
		title: 'K Nearest Neighbor',
		category: 'Artificial Intelligence',
		img: KNN1,
	},
	{
		id: 108,
		title: 'K Nearest Neighbor',
		category: 'Problem Solving',
		img: KNN1,
	},
	{
		id: 109,
		title: 'Tetris',
		category: 'Game Development',
		img: Tetris1,
	},
	{
		id: 110,
		title: 'Tetris',
		category: 'Problem Solving',
		img: Tetris1,
	},
	{
		id: 111,
		title: '2048',
		category: 'Game Development',
		img: _2048_1,
	},
	{
		id: 112,
		title: '2048',
		category: 'Problem Solving',
		img: _2048_1,
	},
	{
		id: 113,
		title: 'Memory Cards',
		category: 'Game Development',
		img: Memory1,
	},
	{
		id: 114,
		title: 'Memory Cards',
		category: 'Problem Solving',
		img: Memory1,
	},
	{
		id: 115,
		title: 'Maze Problem',
		category: 'Artificial Intelligence',
		img: Maze1,
	},
	{
		id: 116,
		title: 'Maze Problem',
		category: 'Problem Solving',
		img: Maze1,
	},
	{
		id: 117,
		title: 'Pacman',
		category: 'Game Development',
		img: Pacman1,
	},
	{
		id: 118,
		title: 'Pacman',
		category: 'Problem Solving',
		img: Pacman1,
	},
	{
		id: 119,
		title: 'Flappy Bird',
		category: 'Game Development',
		img: Flappy1,
	},
	{
		id: 120,
		title: 'Flappy Bird',
		category: 'Problem Solving',
		img: Flappy1,
	},
	{
		id: 121,
		title: 'Keyboard Piano',
		category: 'Miscellaneous',
		img: Piano1,
	},
	{
		id: 122,
		title: 'Crack the Code',
		category: 'Problem Solving',
		img: Crack1,
	},
	{
		id: 123,
		title: 'Ping Pong',
		category: 'Game Development',
		img: Ping1,
	},
	{
		id: 124,
		title: 'Ping Pong',
		category: 'Problem Solving',
		img: Ping1,
	},
	{
		id: 125,
		title: '8 Puzzle',
		category: 'Artificial Intelligence',
		img: EPuzzle1,
	},
	{
		id: 126,
		title: '8 Puzzle',
		category: 'Problem Solving',
		img: EPuzzle1,
	},
	{
		id: 127,
		title: 'Perceptron Learning',
		category: 'Artificial Intelligence',
		img: Perceptron1,
	},
	{
		id: 128,
		title: 'Perceptron Learning',
		category: 'Problem Solving',
		img: Perceptron1,
	},
	{
		id: 129,
		title: 'Computer Vision assisted Drive Thru Web Store with On chain Transactions',
		category: 'Web Application',
		img: FYP1,
	},
	{
		id: 130,
		title: 'Computer Vision assisted Drive Thru Web Store with On chain Transactions',
		category: 'Artificial Intelligence',
		img: FYP1,
	},
	{
		id: 131,
		title: 'interVU',
		category: 'Web Application',
		img: interVU1,
	},
	{
		id: 132,
		title: 'ETL',
		category: 'Web Application',
		img: ETL1,
	},
	{
		id: 133,
		title: 'Snakes and Ladders',
		category: 'Game Development',
		img: SnakesLadders1,
	},
	{
		id: 134,
		title: 'Snakes and Ladders',
		category: 'Problem Solving',
		img: SnakesLadders1,
	},
	{
		id: 135,
		title: 'Snake Xenzea',
		category: 'Game Development',
		img: Xenzea1,
	},
	{
		id: 136,
		title: 'Snake Xenzea',
		category: 'Problem Solving',
		img: Xenzea1,
	},
	{
		id: 137,
		title: 'Solar System',
		category: 'Problem Solving',
		img: SolarSystem1,
	},
	{
		id: 138,
		title: 'Tic Tac Toe',
		category: 'Artificial Intelligence',
		img: Minimax1,
	},
	{
		id: 139,
		title: 'Tic Tac Toe',
		category: 'Game Development',
		img: Minimax1,
	},
	{
		id: 140,
		title: 'Tic Tac Toe',
		category: 'Problem Solving',
		img: Minimax1,
	},


	// {
	// 	id: 2,
	// 	title: 'Pharmacy POS',
	// 	category: 'Desktop Application',
	// 	img: MobileImage2,
	// },
	// {
	// 	id: 3,
	// 	title: 'Phoenix Digital Agency',
	// 	category: 'Web3 Application',
	// 	img: UIImage1,
	// },
	// {
	// 	id: 4,
	// 	title: 'Cloud Storage Platform',
	// 	category: 'Web3 Application',
	// 	img: UIImage2,
	// },
	// {
	// 	id: 5,
	// 	title: 'React Social App',
	// 	category: 'Web3 Application',
	// 	img: MobileImage1,
	// },
	// {
	// 	id: 6,
	// 	title: 'Apple Design System',
	// 	category: 'Web3 Application',
	// 	img: WebImage1,
	// },
	// {
	// 	id: 7,
	// 	title: 'example ABC',
	// 	category: 'Web3 Application',
	// 	img: UIImage1,
	// },
	// {
	// 	id: 8,
	// 	title: 'example DEF',
	// 	category: 'Mobile Application',
	// 	img: UIImage2,
	// },
];

export const projectsData = projectsDataUnsorted.sort(customSort);