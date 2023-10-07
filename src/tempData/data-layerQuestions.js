export const questions = [
  {
    id: 100,
    question: "What interests you the most?",
    options: [
      {
        id: 101,
        answer: "Building user interfaces and web applications",
        recommendation: "",
        suggestedCourses: [],
        goTo: 200,
      },
      {
        id: 102,
        answer: "Analyzing and working with data",
        recommendation: "",
        suggestedCourses: [],
        goTo: 300,
      },
      {
        id: 103,
        answer: "Managing and optimizing databases",
        recommendation: "Database Administrator",
        suggestedCourses: ["Database Management", "SQL", "Data Security"],
        goto: 0,
      },
      {
        id: 104,
        answer: "Automating software development and deployment",
        recommendation: "",
        suggestedCourses: [],
        goTo: 400,
      },
    ],
  },
  {
    id: 200,
    question: "Which programming language interests you?",
    options: [
      {
        id: 201,
        answer: "JavaScript",
        recommendation: "Front-End Developer",
        suggesetedCourses: ["HTML", "CSS", "JavaScript"],
        goTo: 0,
      },
      {
        id: 202,
        answer: "Python",
        recommendation: "Python Web Developer",
        suggesetedCourses: ["Python", "Django", "Web Development"],
        goTo: 0,
      },
    ],
  },
  {
    id: 300,
    question: "Do you enjoy data analysis and statistics?",
    options: [
      {
        id: 301,
        answer: "Yes",
        recommendation: "Data Scientist",
        suggesetedCourses: ["Data Analysis", "Machine Learning", "Python"],
        goTo: 0,
      },
      {
        id: 302,
        answer: "No",
        recommendation: "Data Analyst",
        suggesetedCourses: ["Data Analysis", "Excel", "SQL"],
        goTo: 0,
      },
    ],
  },
  {
    id: 400,
    question: "Do you enjoy automation and optimization?",
    options: [
      {
        id: 401,
        answer: "Yes",
        recommendation: "DevOps Engineer",
        suggesetedCourses: ["DevOps", "CI/CD", "Automation Tools"],
        goTo: 0,
      },
      {
        id: 402,
        answer: "No",
        recommendation: "Backend Developer",
        suggesetedCourses: ["Server-side Programming", "Databases", "APIs"],
        goTo: 0,
      },
    ],
  },
];
