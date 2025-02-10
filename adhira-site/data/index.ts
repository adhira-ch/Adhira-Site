import { desc } from "framer-motion/client";

  export const gridItems = [
    {
      id: 1,
      title: "Tech enthusiast with a passion for creating AI-Driven Products.",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-3 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/ai-gen.png",
      spareImg: "",
    },
    {
      id: 3,
      title: "Past Companies I've Worked At",
      description: "Work Experience",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 6,
      title: "Looking for a Collaborator? Let’s Build Something Game-Changing Together – Reach Out!",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];

  export const about = {
    desc: `
  I'm Adhira (uh-DEER-ah), an innovator, technical builder, and business strategist passionate about solving complex problems and creating end-to-end technical solutions that are impactful, scalable, and secure. I specialize in designing and deploying scalable AI-driven technologies that empower businesses to thrive in an ever-evolving landscape across industries.
  
  Currently, I'm a Technical Product Lead and AI R&D Solutions Engineer at Deloitte Consulting, where I lead a team of seven to build trustworthy and secure AI solutions in air-gapped environments. My work focuses on developing multi-modal AI applications such as a secure retrieval-augmented generation (RAG) chatbot leveraging NVIDIA DGX systems and advanced embeddings, and crafting Generative AI models that have driven $11 million in project sales this year. I specialize in architecting scalable AI solutions that prioritize security, reliability, and real-world impact.
  In my role, I:
    - Lead a team of seven to build innovative multi-modal AI solutions, including a secure retrieval-augmented generation (RAG) chatbot using NVIDIA DGX systems.
    - Led 30+ business and technical product demos at the WEST 2025 Conference to showcase the secure multi-modal AI solution and hardware parternships.
    - Helped generate $11 million in project sales by developing scalable Generative AI applications and mentoring developers in the fundamentals of AI software development and artifact creation (i.e. readMe and technical documentation).
    - Support a client in implementing Deloitte’s largest government Generative AI project, collaborating with a team of 12 as an AI subject matter expert and developer.
  
  Beyond my work at Deloitte, I’ve led entrepreneurial ventures such as:
    - Partnr, a context-aware consulting co-pilot integrating real-time transcription, sentiment analysis, and email insights.
    - BloodSight AI, a personalized health analytics platform powered by custom machine learning models.
  
  I earned my Bachelor of Science in Computer Science with Highest Honors from Georgia Tech, completing my degree in just two years with a focus on Artificial Intelligence and Human-Computer Interaction. My leadership roles included serving as Executive VP for AI for Medicine & Healthcare and leading impactful research projects like the Job Scam Prediction Initiative for Big Data Big Impact.
  
  Hackathons fuel my creative problem-solving, with award-winning solutions recognized at AI ATL (sponsored by Google, BCG, and Anthropic).
  
  Previously, I contributed to improving Kindle's user experience at Amazon and modernizing scalable infrastructure at Cognosos. Across all experiences, my mission remains clear: to build groundbreaking technologies that solve real-world challenges and empower businesses and users alike.
  `
  };
  
  
  
  export const workExperience = [
    {
      id: 1,
      position: "AI & ML Research Solutions Engineer Analyst",
      company: "Deloitte",
      startDate: "September 2024",
      endDate: "Present",
      desc: "- Leading a team of 7 in development of an isolated secure and trustworthy RAG product with the newest and most powerful open-source large language models and a siloed closed NVIDIA DGX environment.\n- Managed the end-to-end architecture and data flow of the trustworthy RAG product and led the development of user and technical documentation to support the deployment and demos of the system built.\n- Supporting eminence, events, and strategy development of AI in the Bioinformatics and Federal Health space.",
      className: "md:col-span-2",
    },
    {
      id: 2,
      position: "Software Development Engineer",
      company: "Amazon",
      startDate: "May 2024",
      endDate: "August 2024",
      desc: "- Worked under the ReadON team at Kindle.\n- Designed & deployed 2 end-to-end Kindle features using C++ & React Native to address user concerns, enhancing navigation & customer experience (CX).\n- Created reusable software components, increasing efficiency by 20%, and wrote unit tests to achieve 90% code coverage.\n- Implemented AWS CloudWatch monitoring & integration testing with Hydra to ensure system robustness & performance.",
      className: "md:col-span-2",
    },
    {
      id: 7,
      position: "Summer Analyst - AI Specialist",
      company: "Deloitte Consulting",
      startDate: "June 2023",
      endDate: "August 2023",
      desc: "- Supported AI growth in the Government Public Service sector.\n- Developed generative AI chatbots for Health and Education Departments using BART Transformer Models.\n- Created a Generative AI Analytics Dashboard and co-designed the firm's AI playbook and training.",
      className: "md:col-span-2",
    },
    {
      id: 6,
      position: "Full-Stack Software Development Intern",
      company: "Cognosos, Inc.",
      startDate: "January 2023",
      endDate: "May 2023",
      desc: "- Enhanced modularity of APIs and created 85+ Swagger API documentation entries.\n- Boosted application performance by 25% using AWS EC2 instances and scalable infrastructure.\n- Supported development sprints and adapted to evolving requirements following Agile practices.",
      className: "md:col-span-2",
    },
    {
      id: 5,
      position: "Undergraduate Research Assistant",
      company: "CLAWS Lab @ Georgia Tech",
      startDate: "November 2020",
      endDate: "May 2024",
      desc: "- Developed and integrated a web app to a multimodal ML model to study adversarial impacts on classification.\n- Conducted a user experiment and statistical analysis to identify vulnerabilities and improve model performance.\n- Built a dashboard with data visualizations showcasing model performance using responsive web technologies.",
      className: "md:col-span-2",
    },
    {
      id: 3,
      position: "Executive Vice President",
      company: "Artificial Intelligence in Medicine Society (AIMS)",
      startDate: "August 2023",
      endDate: "May 2024",
      desc: "- Spearheaded management of cross-functional med-tech project teams to deliver innovative solutions.\n- Coordinated events and enhanced member engagement, resulting in higher community participation.\n- Devised strategic initiatives to promote growth and sustainability of the organization.",
      className: "md:col-span-2",
    },
    {
      id: 4,
      position: "Lead Project Manager",
      company: "Big Data Big Impact (BDBI) @ Georgia Tech",
      startDate: "September 2022",
      endDate: "May 2024",
      desc: "- Led a team of 15 students to develop ML models to classify abnormal mammograms and detect job scams.\n- Researched applications of convolutional neural networks and fraud detection models.\n- Analyzed biases in a 300K+ image dataset and implemented machine learning models to improve diagnostic capabilities.",
      className: "md:col-span-2",
    },
  ];
  
  
  export const projects = [
    {
      id: 1,
      title: "Partnr - Consulting Co-Pilot",
      des: "Partnr is a generative AI-powered consulting co-pilot that is trained and fine-tuned on meetings and emails, enabling consultants, managers, and executives to interact with clients smarter and faster.",
      img: "/partnr1.jpg",
      iconLists: ["/flask.svg", "/python.svg", "/llama-index.png", "/langchain.png", "/reactjs.svg", "/nodejs.svg", "/tailwind.svg", "/huggingface.svg"],
      link: "https://devpost.com/software/partnr-consulting-copilot",
    },
    {
      id: 2,
      title: "BloodSight AI - Medical Technology Solution",
      des: "BloodSight AI enhances medical insight through analytics-driven reports for patients and physicians, providing predictive and preventive analytics with actionable insights.",
      img: "/BloodSight.png",
      iconLists: ["/figma.svg", "/python.svg", "/langchain.png", "/reactjs.svg", "/openai.svg", "/random-forest.png"],
      link: "https://github.com/adhira-ch/bloodsight-ai",
    },
    {
      id: 3,
      title: "Seed: Returns Meet Responsibility",
      des: "Seed revolutionizes investing by bridging the gap between traditional investing strategies and socially driven investing decisions, enabling investors to make informed, impactful, and ethical choices.",
      img: "/seed.jpeg",
      iconLists: ["/python.svg", "/scikit-learn.png", "/openai.svg", "/microsoftazure.svg", "/reactjs.svg", "/streamlit.svg"],
      link: "https://devfolio.co/projects/seed-ba40",
    },
    {
      id: 4,
      title: "van.Go - Custom AI Painting Tutorials",
      des: "van.Go allows users to enter a prompt to generate a painting and overlay step-by-step visual instructions, offering interactive, multimodal painting tutorials.",
      img: "/vanGo.png",
      iconLists: ["/opencv.png", "/flask.svg", "/python.svg", "/langchain.png", "/reactjs.svg", "/nodejs.svg", "/openai.svg", "/openai.svg"],
      link: "https://devpost.com/software/van-go",
    },
    {
      id: 5,
      title: "tAI: Your AI Teaching Assistant",
      des: "tAI is a personalized AI teaching assistant that facilitates multimodal & empathetic education for students and provides professors with actionable insights on their students' engagement & learning.",
      img: "/tAI1.jpg",
      iconLists: ["/next.svg"],
      link: "https://devpost.com/software/tai-personalized-teaching-assistant",
    },
    {
      id: 6,
      title: "Detecting & Locating Findings in ML Screening Mammograms",
      des: "Developed an ML model to classify and locate soft tissue findings and microcalcifications in screening mammograms, incorporating ResNet and pre-processing algorithms.",
      img: "/medicalapp.png",
      iconLists: ["/python.svg", "/opencv.png", "/scikit-learn.png", "/tensorflow.svg"],
      link: "https://github.com/",
    },
    {
      id: 7,
      title: "Data Analysis of Adversarial Attacks on Multimodal Models",
      des: "Analyzed the impact of adversarial attacks on multimodal classification models and built a web application to collect and analyze data from 85,000+ Tweets.",
      img: "/dataanalytics.jpg",
      iconLists: ["/python.svg", "/streamlit.svg"],
      link: "https://github.com/",
    }
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/adhira-ch",
    },
    {
      id: 2,
      img: "/twit.svg",
      link: "https://x.com/@adhirac31292",
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/adhira-choudhury/",
    },
  ];

  export const skills = [
    { skill: "Python", expertise: 5 },
    { skill: "Java", expertise: 4 },
    { skill: "C", expertise: 3 },
    { skill: "C++", expertise: 4 },
    { skill: "Assembly", expertise: 2 },
    { skill: "HTML/CSS (MTA certified)", expertise: 5 },
    { skill: "JavaScript (MTA & CCA certified)", expertise: 5 },
    { skill: "Swift", expertise: 3 },
    { skill: "SQL (MTA certified)", expertise: 4 },
    { skill: "jQuery", expertise: 3 },
    { skill: "JSON", expertise: 4 },
    { skill: "Pandas", expertise: 4 },
    { skill: "PyTorch", expertise: 3 },
    { skill: "Jupyter", expertise: 4 },
    { skill: "AWS", expertise: 3 },
    { skill: "Tableau", expertise: 3 },
    { skill: "TensorFlow", expertise: 3 },
    { skill: "React", expertise: 4 },
    { skill: "Node.js", expertise: 4 },
    { skill: "D3.js", expertise: 2 },
    { skill: "Flask", expertise: 3 },
    { skill: "Git", expertise: 5 },
    { skill: "Atlassian", expertise: 3 },
    { skill: "Bootstrap", expertise: 4 },
    { skill: "LaTeX", expertise: 3 },
    { skill: "Machine Learning", expertise: 4 },
    { skill: "Data Analytics & Visualization", expertise: 4 },
    { skill: "Product Management", expertise: 4 },
    { skill: "Problem Solving", expertise: 5 },
    { skill: "User-Centered Design", expertise: 3 },
    { skill: "Strategic Planning", expertise: 4 },
    { skill: "Investing", expertise: 3 },
    { skill: "Visionary", expertise: 4 },
    { skill: "Ambitious", expertise: 5 },
    { skill: "Innovative", expertise: 4 },
    { skill: "Perseverant", expertise: 5 },
    { skill: "Analytical", expertise: 4 },
    { skill: "Entrepreneurial", expertise: 4 },
    { skill: "Problem Solver", expertise: 5 },
    { skill: "Collaborator", expertise: 4 },
    { skill: "Adaptable", expertise: 4 },
  ];