export const profile = {
  firstName: "Vikas",
  lastName: "Patil",
  role: "Data Analyst",
  location: "Bangalore, India",
  email: "vikaspatil8105@email.com", // Replace if this is not your current email.
  linkedin: "https://www.linkedin.com/in/vikas-patil-3b3ab22a3/",
  github: "https://github.com/VikasP2003",
  summary:
    "Data Analyst at TCS with experience building interactive Power BI dashboards, transforming data into meaningful insights, and supporting business reporting. Microsoft PL-300 certified, with hands-on experience in data modeling, Power Query, DAX, SQL and KPI reporting."
};

export const skills = [
  {
    group: "Data Analysis",
    items: [
      "Data Cleaning",
      "Data Transformation",
      "Exploratory Data Analysis (EDA)",
      "Data Visualization",
      "KPI Analysis",
      "Statistical Analysis"
    ]
  },
  {
    group: "Power BI",
    items: [
      "Power BI Desktop",
      "Power BI Service",
      "DAX",
      "Power Query",
      "Data Modeling",
      "Dashboard Development",
      "KPI Dashboards"
    ]
  },
  {
    group: "SQL",
    items: [
      "SQL Queries",
      "Joins",
      "Aggregations",
      "Subqueries",
      "Data Filtering",
      "Data Analysis",
      "CTE"
    ]
  },
  {
    group: "Python",
    items: [
      "Python Basics",
      "Pandas Basics",
      "NumPy Basics",
      "Matplotlib Basics"
    ]
  },
  {
    group: "Excel",
    items: [
      "Pivot Tables",
      "VLOOKUP",
      "XLOOKUP",
      "Charts",
      "Data Cleaning",
      "Excel Formulas"
    ]
  },
  {
    group: "Web Development & Programming",
    items: [
      "Java",
      "React.js",
      "Node.js",
      "Django",
      "REST APIs",
      "MongoDB"
    ]
  }

];

export const experience = {
  company: "Tata Consultancy Services (TCS)",
  role: "Data Analyst",
  period: "2025 – Present",
  points: [
    "Develop and maintain interactive Power BI dashboards to monitor business KPIs and support data-driven decisions.",
    "Transform and prepare datasets using Power Query, applying data-cleaning and shaping techniques.",
    "Create DAX measures and data models to deliver meaningful reporting and analytical insights.",
    "Work with stakeholders to understand reporting requirements and translate them into dashboard solutions."
  ]
};

export const projects = [
  {
    title: "PR to PO Procurement Dashboard",
    category: "Power BI",
    description: "An interactive Power BI dashboard analyzing the Purchase Requisition (PR) to Purchase Order (PO) process, tracking procurement turnaround time, request status, processing efficiency, pending requisitions and key procurement KPIs.",
    tags: ["Power BI", "DAX", "Power Query", "Data Modeling", "Procurement Analytics", "KPI Dashboard"],
    github: "https://github.com/VikasP2003/PR-to-PO-Procurement-Dashboard",
    pdf: "/PR_to_PO_Dashboard Screenshots.pdf",
    featured: true
  },
  {
    title: "Energy Monitoring Dashboard",
    category: "Power BI",
    description: "An energy analytics dashboard focused on consumption trends, peak usage, comparisons and cost-related KPIs, built using Power BI.",
    tags: ["Power BI", "DAX", "Power Query", "Excel", "Data Visualization"],
    github: "https://github.com/VikasP2003/energy-monitoring-dashboard",
    featured: true
  },
  {
    title: "IPL Analysis Dashboard",
    category: "Power BI",
    description: "An interactive Power BI dashboard analyzing IPL cricket data, including team performance, match results, player statistics, batting and bowling performance, and season-wise trends to uncover key insights.",
    tags: ["Power BI", "DAX", "Power Query", "Data Modeling", "IPL Analytics", "Sports Analytics"],
    github: "https://github.com/VikasP2003/IPL-Analysis-Dashboard",
    pdf: "/IPL Analysis Screenshots.pdf",
    featured: true
  },
  ,
  {
    title: "Cinemate Plus",
    category: "Web Development",
    description: "A responsive movie discovery application to explore popular, trending, upcoming and top-rated movies using the TMDB API.",
    tags: ["React", "Vite", "JavaScript", "Tailwind CSS", "TMDB API"],
    github: "https://github.com/VikasP2003/Cinemate-react-app",
    live: "https://cinemateplus.netlify.app/"
  },
  {
    title: "Clinical Data Analysis System",
    category: "Web Development",
    description: "A Django application for managing patient and clinical records, backed by MySQL and supporting CRUD operations.",
    tags: ["Python", "Django", "MySQL", "HTML", "CSS"],
    github: "https://github.com/VikasP2003/clinical-data-analysis-system"
  }
];

export const certifications = [
  { name: "Microsoft Certified: Power BI Data Analyst Associate", code: "PL-300", status: "Certified" },
  {
    name: "Anthropic Claude Developer",
    code: "Claude Developer",
    issuer: "Anthropic",
    status: "Certified"
  }
];

export const education = [
  { degree: "Master of Computer Applications (MCA)", institution: "Chandigarh University", period: "2025 – Present", status: "Pursuing" },
  { degree: "Bachelor of Computer Applications (BCA)", institution: "KLE's SSMS BCA College, Athani", period: "", status: "Completed" }
];