import { skillsData } from "../../data/skillsData";

const SkillsList = () => {
  return (
    <div className="py-5 sm:py-10 mt-5 sm:mt-10">
      {skillsData.map((group, index) => (
        <div key={index}>
          <h2 className="font-semibold text-xl mb-3 text-primary-dark dark:text-secondary-light">
            {group.category}
          </h2>

          <div className="skills-container mb-6">
            {group.skills.map((skill, i) => (
              <span
                key={i}
                className="
                  skill-pill
                  px-4 py-2 text-sm
                  bg-secondary-light
                  dark:bg-ternary-dark
                  text-primary-dark
                  dark:text-secondary-light
                  rounded-full
                  border
                  border-gray-200
                  dark:border-primary-dark
                  hover:bg-indigo-500
                  dark:hover:bg-indigo-600
                  hover:text-white
                  hover:border-indigo-500
                  dark:hover:border-indigo-600
                  hover:shadow-lg
                  hover:scale-105
                  transition-all
                  duration-300
                  cursor-pointer
                  text-center md:text-left
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsList;
