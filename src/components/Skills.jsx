
// interface SkillCategory {
//   category: string;
//   skills: string[];
// }

const skillsData = [
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vue.js", "Angular", "Tailwind CSS", "SASS"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "PHP", "Laravel", "REST APIs", "GraphQL"]
  },
  {
    category: "Database",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "AWS", "Vercel", "Netlify", "Webpack", "Vite"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-10 flex items-center bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">My Skills</h2>
        <p className="text-color-black text-lg mb-12 max-w-2xl">
          I have experience with a variety of technologies and tools, allowing me to choose the right solution for each project.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((skillCategory, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">{skillCategory.category}</h3>
              <div className="flex flex-wrap gap-4 ">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
