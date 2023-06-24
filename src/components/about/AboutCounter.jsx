import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
	useCountUp({ ref: 'experienceCounter', end: 5, duration: 2 });
	useCountUp({ ref: 'githubStarsCounter', end: 4, duration: 2 });
	useCountUp({ ref: 'feedbackCounter', end: 12, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 50, duration: 2 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center flexOverride">
				<CounterItem
					title="Years of Coding"
					counter={<span id="experienceCounter" />}
					measurement=""
				/>

				<CounterItem
					title="Months of Experience"
					counter={<span id="githubStarsCounter" />}
					measurement=""
				/>

				<CounterItem
					title="Awards & Certificates"
					counter={<span id="feedbackCounter" />}
					measurement=""
				/>

				<CounterItem
					title="Worked on Projects"
					counter={<span id="projectsCounter" />}
					measurement="+"
				/>
			</div>
		</div>
	);
};

export default AboutCounter;
