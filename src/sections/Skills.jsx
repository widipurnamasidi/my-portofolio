import Tag from "../components/Tag";

const skills = [
  "JavaScript (ES6+)",
  "React.js",
  "Node.js",
  "C/C++",
  "MongoDB",
  "SQL",
  "HTML & CSS",
  "Git & Github",
  "RESTful APIs",
];

const Skills = () => {
  return (
    <section className="bg-white text-left rounded-xl p-2 md:p-5 shadow-md mt-6">
      <h2 className="text-lg md:text-2xl text-secondary-foreground mb-3 font-semibold">
        Skills
      </h2>
      <ul className="flex flex-wrap leading-10">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="mr-2
          "
          >
            <Tag name={skill} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
