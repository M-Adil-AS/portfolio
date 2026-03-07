import SkillsList from "../components/skills/SkillsList";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto"
    >
      <SkillsList />
    </motion.div>
  );
};

export default Skills;
