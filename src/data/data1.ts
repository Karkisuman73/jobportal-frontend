interface TypeData {
  companyname: string;
  position: string;
  level: string;
  type: string;
  time: string;
  view: string;
  id: number;
  aboutCompany: string;
  responsibilities: string;
  requiredSkills: string;
  roleDescription: string[];
}

export const data1: TypeData[] = [
  {
    companyname: "TechNova",
    position: "Frontend Developer",
    level: "Junior",
    type: "On-site",
    time: "Full-time",
    view: "Work with modern JavaScript frameworks to build responsive UIs.\nCollaborate with designers and backend developers to enhance UX.",
    id: 1,
    aboutCompany: "sit",
    responsibilities: "nisl nunc nisl duis bibendum felis sed",
    requiredSkills: "lobortis ligula sit amet eleifend pede",
    roleDescription:[
      "suspendisse ornare consequat lectus",
    ]
  },
  {
    companyname: "HealthSync",
    position: "Backend Engineer",
    level: "Mid",
    type: "Remote",
    id: 2,
    aboutCompany: "vel dapibus",
    responsibilities: "proin at turpis a",
    requiredSkills: "consequat",
    roleDescription:[ "mattis nibh ligula nec sem duis",
      "mattis nibh ligula nec sem duis",
    ],
    time: "Full-time",
    view: "Develop and maintain APIs and databases.\nEnsure high performance and responsiveness of backend services.",
  },
  {
    companyname: "EcoSolutions",
    position: "UI/UX Designer",
    level: "Junior",
    type: "On-site",
    time: "Part-time",
    view: "Create intuitive and visually appealing user interfaces.\nWork closely with developers to implement design solutions.",
    id: 3,
    aboutCompany: "mauris non",
    responsibilities: "posuere cubilia curae donec pharetra magna",
    requiredSkills: "dapibus augue vel accumsan tellus nisi eu",
    roleDescription:[ "et ultrices posuere cubilia curae",
      "et ultrices posuere cubilia curae",
    ]
  },
  {
    companyname: "DataNest",
    position: "Data Analyst",
    level: "Mid",
    type: "On-site",
    time: "Full-time",
    view: "Analyze large datasets to extract meaningful insights.\nSupport decision-making with data-driven recommendations.",
    id: 4,
    aboutCompany: "curae donec pharetra magna",
    responsibilities: "magna at nunc commodo placerat praesent blandit",
    requiredSkills: "eleifend quam a odio in",
    roleDescription: [
      "idpretium iaculis",
    ]
  },
  {
    companyname: "CloudCore",
    position: "DevOps Engineer",
    level: "Senior",
    type: "Remote",
    time: "Full-time",
    view: "Manage cloud infrastructure and CI/CD pipelines.\nEnsure system reliability and automation efficiency.",
    id: 5,
    aboutCompany: "parturient montes nascetur ridiculus mus vivamus",
    responsibilities: "integer non velit donec diam",
    requiredSkills: "mauris morbi",
    roleDescription:[ "enim leo rhoncus sed vestibulum sit",
      "enim leo rhoncus sed vestibulum sit",
    ]
  },
  {
    companyname: "Finverse",
    position: "Software Engineer",
    level: "Mid",
    type: "On-site",
    time: "Full-time",
    view: "Design and develop scalable software applications.\nParticipate in code reviews and agile development cycles.",
    id: 6,
    aboutCompany: "ultrices erat tortor sollicitudin mi sit amet",
    responsibilities: "magna bibendum imperdiet",
    requiredSkills: "quam pede lobortis ligula sit amet",
    roleDescription: ["massa donec",
      "massa donec",
    ]
  },
  {
    companyname: "EduCraft",
    position: "Mobile App Developer",
    level: "Junior",
    type: "Remote",
    time: "Part-time",
    view: "Develop mobile applications using Flutter and Dart.\nFix bugs and contribute to feature enhancements regularly.",
    id: 7,
    aboutCompany: "dui proin leo odio",
    responsibilities: "non",
    requiredSkills: "tristique fusce congue diam id ornare imperdiet",
    roleDescription: ["in",
      "in",
    ]
  },
];
