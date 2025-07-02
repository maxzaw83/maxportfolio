// ===================================================================================
// DATA CONFIGURATION
// Any user can easily update their information here.
// ===================================================================================
export const personalInfo = {
  name: "Max Zaw",
  title:
    "Senior Software Engineer | Full-Stack Developer | Cloud & Agile Specialist | Application Support | Open Work Visa New Zealand",
  location: "Auckland , New Zealand (Open to relocate nationwide)",
  email: "maxzaw83@gmail.com",
  github: "https://github.com/maxzaw83",
  linkedin: "https://www.linkedin.com/in/max-zaw/",
  profileImage: "../src/assets/Profile.jpeg", // Using a relative path as in your example
  profileImageFallback: "https://placehold.co/300x300/1e293b/a78bfa?text=MZ",
  summary: `🚀 Based in Auckland, I bring 15+ years of hands-on experience delivering scalable, user-friendly software solutions for enterprise and public-sector clients. I'm passionate about clean code, elegant UI/UX, and cross-functional teamwork. Currently open to exciting opportunities in New Zealand’s tech industry.`,
};

export const experienceData = [
  {
    role: "Senior Software Engineer",
    company: "ComfortDelgro Corporation",
    location: "Singapore",
    date: "May 2022 - June 2024",
    achievements: [
      "Built scalable cloud-native services using Azure Functions, .NET Core, and microservices for real-time public transport platforms.",
      "Developed a centralized admin panel (React.js + .NET API) for content, analytics, and user data across business units.",
      "Implemented CI/CD pipelines using Azure DevOps and infrastructure-as-code, reducing deployment errors by 40%.",
      "Optimized database performance with materialized views and SQL tuning, boosting speed by 30% and cutting monthly costs.",
      "Collaborated with Product Owners and BAs in Agile 2-week sprints to refine requirements and deliver quality features.",
      "Mentored junior developers and led peer reviews, upskilling the team and maintaining a secure, testable codebase.",
    ],
  },
  {
    role: "Senior Application Specialist",
    company: "Pacific International Corporation",
    location: "Singapore",
    date: "Nov 2021 - May 2022",
    achievements: [
      "Delivered a company-wide ERP system implementation from requirement gathering to UAT and go-live for 200+ internal users.",
      "Managed cross-functional teams (Dev, QA, BA) to deploy business-critical applications under aggressive timelines.",
      "Facilitated risk assessments and stakeholder interviews to ensure scope alignment and technical feasibility.",
      "Conducted training and system walkthroughs to reduce post-launch support tickets significantly.",
      "Introduced automated QA processes and documentation standards to improve test coverage and system maintainability.",
    ],
  },
  {
    role: "Senior System Analyst",
    company: "Singapore Post Corporation",
    location: "Singapore",
    date: "May 2021 - Nov 2021",
    achievements: [
      "Designed and delivered logistics and eCommerce platforms supporting national parcel tracking and digital services.",
      "Developed modular service components focused on extensibility, high availability, and performance.",
      "Collaborated with Agile teams to deliver secure, testable, and scalable backend features in time-boxed releases.",
      "Performed in-depth system integration and API analysis, enabling smooth third-party logistics collaboration.",
    ],
  },
  {
    role: "Senior Software Developer",
    company: "Hwa Chong Institution",
    location: "Singapore",
    date: "June 2010 - May 2021",
    achievements: [
      "Built admin portals and automation tools for school operations using C#, SQL Server, and jQuery.",
      "Led system optimization and performance tuning, reducing report generation time by 60%.",
      "Trained 200+ school staff in new system rollouts, ensuring smooth adoption and minimal downtime.",
      "Oversaw vendor integration and legacy migration, aligning with institutional IT policies and data standards.",
      "Maintained 99.9% system uptime and contributed to long-term IT strategy and internal process improvements.",
    ],
  },
];

export const skillsData = [
  {
    name: "Programming Languages",
    icon: "/src/assets/icons/kig.png",
    skills: ["C#", "JavaScript", "TypeScript", "Python", "SQL", "PHP"],
  },
  {
    name: "Frontend Development",
    icon: "/src/assets/icons/krfb.png",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    name: "Backend Development",
    icon: "/src/assets/icons/kdevelop.png",
    skills: [
      "ASP.NET Core",
      "Entity Framework Core",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    name: "Database & Storage",
    icon: "/src/assets/icons/icon_backend_devlopment.png",
    skills: [
      "SQL Server",
      "MySQL",
      "PostgreSQL",
      "Azure Cosmos DB",
      "Mongo DB",
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: "/src/assets/icons/CloudandDevOps.png",
    skills: [
      "Azure (App Services, Functions, DevOps Pipelines)",
      "AWS (Lambda, S3, EC2)",
      "Docker",
      "kubernetes",
    ],
  },
  {
    name: "Tools & Platforms",
    icon: "/src/assets/icons/icon_skill.png",
    skills: [
      "Git",
      "Jira",
      "Figma",
      "Visual Studio",
      "Postman",
      "Swagger",
      "Azure DevOps",
    ],
  },
  {
    name: "Project & Agile Experience",
    icon: "/src/assets/icons/icon_experience5.png",
    skills: [
      "Agile Scrum",
      "CI/CD",
      "Stakeholder Management",
      "Mentoring",
      "System Analysis",
    ],
  },
];

export const projectData = [
  {
    title: "🍽️ NZ  Local SME Inventory System",
    points: [
      "A full-featured inventory and supplier management system tailored for New Zealand’s small businesses.",
      "Features include CRUD for inventory, low-stock alerts, supplier integration, and reporting dashboard.",
      "Built with ASP.NET Core, React.js, PostgreSQL, Entity Framework, and Tailwind CSS.",
      "Deployed via Docker and Azure App Services, with CI/CD pipelines managed by Azure DevOps.",
    ],
    repoUrl: "#", // Replace with actual URL
  },
  {
    title: "🧳 NZ Job Board Portal",
    points: [
      "A full-stack job board application for candidates and employers in the NZ market.",
      "Supports job postings, profile creation, resume uploads, admin dashboard, and email notifications.",
      "Authentication with JWT, role-based access, and secure RESTful APIs.",
      "Built with Next.js, .NET Web API, SQL Server, and Azure Blob Storage.",
    ],
    repoUrl: "#",
  },
  {
    title: "💬 Rohingya Welfare Community Website",
    points: [
      "Official multilingual website for the Burmese Rohingya Welfare Association (NZ Chapter).",
      "Includes donation portal, news updates, event management, and accessibility features.",
      "Fully responsive and WCAG-compliant, built with React, Tailwind CSS,",
      "Focused on real-world community impact and user inclusiveness.",
      "Temp URL: https://gentle-wave-0c8e0861e.2.azurestaticapps.net",
    ],
    repoUrl: "#",
  },
  {
    title: "💰 Mega Store E-Commerce",
    points: [
      "A modern eCommerce web app with product filtering, cart system, checkout, and order history.",
      "Includes an admin dashboard for product/category management and inventory control.",
      "Integrated with Stripe for payments and session-based login for users.",
      "Stack: React, Node.js, Express, MongoDB, and Bootstrap.",
      "Temp URL: https://gentle-wave-0c8e0861e.2.azurestaticapps.net",
    ],
    repoUrl: "#",
  },
];

export const awardsData = [
  {
    title: " Excellent Service Award (Silver)",
    organizer: "Singapore Prime Minister’s Office – Public Service Division",
    date: "September 2016",
    prize: "Second Place",
    scope: "National",
    description:
      "Recognized for outstanding customer service and significant contributions to public sector projects.",
  },
  {
    title: "Innovation Award ",
    organizer: "Ministry of Education, Singapore",
    date: "June 2018",
    prize: "First Prize",
    scope: "National",
    description:
      "Awarded for designing and developing the Season Car Parking App, a smart solution to automate parking allocations and improve traffic efficiency within school premises. Recognized for innovation in campus operations and digital transformation.",
  },
  {
    title: "Long Service Award (10 Years)",
    organizer: "Hwa Chong Institution",
    date: "June 2020",
    prize: "Service Milestone",
    scope: "Institutional",
    description:
      "Awarded in recognition of 10 years of dedicated service, professional excellence, and continuous contribution to IT operations, systems development, and support at Hwa Chong Institution.",
  },
];
export const prizeColors = {
  "First Prize":
    "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300",
  "Second Place":
    "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
  "Second Prize":
    "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
  "Second Runner-up":
    "bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300",
  "First Runner-up":
    "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300",
  "Most Impactful Hack":
    "bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300",
  "Service Milestone":
    "bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300",
};

export const educationData = [
  {
    id: 1,
    degree: "M Tech Information Technology",
    institution: "Auckland University of Technology (AUT)",
    dates: "July 2024 – June 2025",
    location: "Auckland, New Zealand",
    achievements: [
      "Graduating with First Class Honours",
      "Specialized in IT Project Management and Software Engineering",
      "Completed a research thesis on AI-Driven E-Commerce Recommendation Systems using Agile frameworks",
    ],
  },
  {
    id: 2,
    degree: "Postgraduate Diploma in System Analysis",
    institution: "National University of Singapore (NUS)",
    dates: "January 2008 – March 2009",
    location: "Singapore",
    achievements: [
      "Successfully completed the program with a strong focus on software development and enterprise systems",
      "Achieved an A grade for Industrial Attachment Project at Statchipac Corporation",
      "Designed and developed a Customer Visit Tracking System to streamline sales operations and reporting",
    ],
  },
  {
    id: 3,
    degree: "Specialist Diploma in Mobile App Development",
    institution: "Singapore Polytechnic",
    dates: "March 2018 – March 2019",
    location: "Singapore",
    achievements: [
      "Graduated with Grade A",
      "Specialized in Web App Development, Android and iOS mobile development using frameworks like React Native and Flutter",
      "Built real-world mobile app prototypes as part of coursework and capstone project",
    ],
  },
  {
    id: 4,
    degree: "Bachelor of Computer Technology (B.C.Tech)",
    institution: "University of Computer Studies, Yangon",
    dates: "September 2001 – November 2004",
    location: "Yangon, Myanmar",
    achievements: [
      "Completed a four-year undergraduate program focused on computer systems, programming, and network fundamentals",
      "Studied core subjects including Data Structures, Software Engineering, Database Systems, and Operating Systems",
      "Graduated with B.C.Tech qualification in Computer Technology",
    ],
  },
];
