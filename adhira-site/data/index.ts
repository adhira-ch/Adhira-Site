import { desc } from "framer-motion/client";
  export const featuredArticles = [
    {
      title: "Youth Spotlight: Driven to Succeed",
      description: "Adhira Choudhury’s blazing accomplishments in college are a testament to what a young person with initiative and willingness to work hard can achieve. Graduating from Georgia Tech with the highest honors is rare enough. Doing so in just two years and at just 19 years of age is even more so...",
      publisher: "Khabar Magazine",
      image: "/khabar.jpeg",
      link: "https://www.khabar.com/magazine/features/youth-spotlight-driven-to-succeed",
    },
    {
      title: "LEAP Foundation: Bridging the Gap in Childhood Education",
      description: "Adhira Choudhury and Swati Budarapu might look like your typical high school students, but they are anything but. The two friends have been working on developing and launching a volunteer organization called the LEAP Foundation, Leveraging Education & Academics for the Poor...",
      publisher: "Forsyth News",
      image: "/leap.jpg",
      link: "https://www.forsythnews.com/life/people/leap-foundation-strives-bridge-gap-childhood-education-india/",
    },
    {
      title: "NSHSS Scholarship Winner: Adhira Choudhury",
      description: "Scholarships Awarded in 2022: Claes Nobel Future Female Leader Scholarship Claes Nobel Future Female Leader Scholarship encourages and empowers young women to assume future leadership roles in their colleges and universities, their careers, and communities and to become mentors for the young women following in their footsteps...",
      publisher: "NSHSS",
      image: "/nshss.png",
      link: "https://www.nshss.org/scholarships/current-winners/adhira-choudhury/",
    },
    {
      title: "Georgia Tech Create-X I2P Showcase",
      description: "Over 40 student teams showcased products at the Fall 2023 I2P Showcase. The event was the final piece of the Idea-to-Prototype (I2P) course, a CREATE-X Make class where both undergraduate and graduate students have the opportunity to advance an invention idea toward a real product by performing basic research, analysis, building, and testing. Teams accepted into I2P receive a $500 reimbursement for physical expenses, course credit (undergraduate students only), and mentorship from a Georgia Tech faculty member. The winners for this semester’s competition include: 1st Place: NeuroChamp 2nd Place: QTACK 3rd Place: BloodSight.AI...",
      publisher: "Create-X Georgia Tech",
      image: "/i2p.png",
      link: "https://create-x.gatech.edu/news/2023/12/fall-2023-i2p-showcase-teams-debut-prototypes",
    },
  ];
  export const gridItems = [
    {
      id: 1,
      title: "A builder who ships AI products and understands them down to the architecture.",
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
      title: "Want to build something ambitious in AI? Let’s talk.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];

  // export const about = {
  //   general_desc: 
  //     "I'm Adhira (uh-DEER-ah), an innovator, technical builder, and business strategist. With a passion for solving complex problems, I design and deploy AI-driven solutions that are impactful, scalable, and secure. My expertise lies at the intersection of AI engineering and management consulting—driving technological innovation while aligning with business goals to create measurable value.",
  //   associated_imgs: ["undergrad.jpg", "partner.JPG", "Bloodsight_AI.jpg", "demo.jpg", "Deloitte_Demo.jpg", "Bloodsight_AI.jpg"],
  //   current_role: 
  //     `Currently, I’m a **Technical Product Lead & AI R&D Solutions Engineer at Deloitte Consulting**, helping clients harness AI and emerging technologies to boost efficiency and profitability. My role spans across:
      
  //     - **AI Strategy & Implementation**: Supporting applied research and deploying AI-driven solutions tailored to emerging business needs.
  //     - **Technical Leadership**: Serving as both a hands-on AI engineer and technical lead, bridging the gap between development and executive decision-making.
  //     - **Scalable AI Engineering**: Architecting **multi-modal AI applications**, such as a **secure retrieval-augmented generation (RAG) chatbot** leveraging **NVIDIA DGX systems** and advanced embeddings.
  //     - **Business Impact**: Driving **$11M in project sales** this year through cutting-edge **Generative AI** innovations.
      
  //     My tech stack includes **Python, C++, React, AWS, NVIDIA Hardware, LangGraph, Llama-Index, PyTorch, NumPy**, and various associated libraries/frameworks. I specialize in developing **scalable, secure, and real-world AI solutions** that drive business transformation.`,
  //     education: `
  //     ### **Education & Achievements**
      
  //     I earned my **Bachelor of Science in Computer Science with Highest Honors from Georgia Tech**, specializing in **Artificial Intelligence & Human-Computer Interaction**. Completing my degree in **just two years at age 19**, I took on leadership roles as **Executive VP for AI for Medicine & Healthcare** and led impactful research projects like the **Job Scam Prediction Initiative for Big Data Big Impact**.
  
  //     My **hackathon experience fuels my creative problem-solving**, with award-winning solutions recognized at **AI ATL (sponsored by Google, BCG, and Anthropic)**.
  //     `,
  //     past_experiences: `
  //     ### **Past Experiences**
      
  //     Before Deloitte, I worked at:
  //     - **Amazon** → Enhanced the **Kindle** user experience through advanced AI-driven personalization.
  //     - **Cognosos** → Spearheaded **scalable infrastructure modernization**, optimizing data processing pipelines.
  
  //     Across all experiences, my mission is clear: **to build groundbreaking AI-driven solutions that solve real-world challenges, drive business impact, and empower users.**`,
  // };  
  
  
  
  export const workExperience = [
    {
      id: 1,
      position: "Tech & AI Business Analyst",
      company: "McKinsey & Company",
      startDate: "June 2025",
      endDate: "Present",
      desc: "- Shape AI and ML strategy, then lead delivery, taking GenAI and agentic AI from concept through testing, rollout, and measured business impact.",
      className: "md:col-span-2",
    },
    {
      id: 2,
      position: "Product Manager & Lead AI Developer – Defense AI & Engineering",
      company: "Deloitte",
      startDate: "September 2024",
      endDate: "May 2025",
      desc: "- Led a seven-person team building a secure, isolated retrieval-augmented generation (RAG) product on open-source LLMs in a siloed NVIDIA DGX environment.\n- Shipped a federal client's first production AI chatbot, now serving 40,000+ users, owning AI and backend development.\n- Owned system architecture and data flow, and wrote both the user-facing and technical documentation through deployment and stakeholder demos.\n- Advanced the firm's AI work in bioinformatics and federal health through publications, events, and internal eminence.\n- Earned four performance awards (two Shout Out Awards, an Applause Award, and an Outstanding Performance Award) for innovation, delivery, and team leadership.",
      className: "md:col-span-2",
    },
    {
      id: 3,
      position: "Software Development Engineer",
      company: "Amazon",
      startDate: "May 2024",
      endDate: "August 2024",
      desc: "- Built and shipped two Kindle features in C++ and React Native on the ReadON team, improving navigation and the customer experience.\n- Created reusable components that cut development time 20%, with unit tests reaching 90% coverage.\n- Added AWS CloudWatch monitoring and Hydra integration testing to harden system performance.",
      className: "md:col-span-2",
    },
    {
      id: 4,
      position: "Summer Analyst - AI Specialist",
      company: "Deloitte Consulting",
      startDate: "June 2023",
      endDate: "August 2023",
      desc: "- Supported AI growth across government and public-sector accounts.\n- Built generative AI chatbots for health and education departments on BART transformer models.\n- Created a generative-AI analytics dashboard and co-authored the firm's AI playbook and training.",
      className: "md:col-span-2",
    },
    {
      id: 5,
      position: "Full-Stack Software Development Intern",
      company: "Cognosos, Inc.",
      startDate: "January 2023",
      endDate: "May 2023",
      desc: "- Improved API modularity and wrote 85+ Swagger documentation entries.\n- Raised application performance 25% with AWS EC2 and scalable infrastructure.\n- Shipped sprint work under Agile as requirements shifted.",
      className: "md:col-span-2",
    },
    {
      id: 6,
      position: "Undergraduate Research Assistant",
      company: "CLAWS Lab @ Georgia Tech",
      startDate: "November 2020",
      endDate: "May 2024",
      desc: "- Built a web app connected to a multimodal ML model to study adversarial effects on classification.\n- Ran a user experiment and statistical analysis to find vulnerabilities and improve model performance.\n- Built a dashboard visualizing model performance with responsive web technologies.",
      className: "md:col-span-2",
    },
  ];
  
  
  export const projects = [
    {
      id: 1,
      title: "Partnr - Consulting Co-Pilot",
      des: "A generative-AI consulting co-pilot, fine-tuned on meetings and emails, that lets consultants and executives work through client context faster. First place at AI ATL.",
      img: "/partnr1.jpg",
      iconLists: ["/flask.svg", "/python.svg", "/llama-index.png", "/langchain.png", "/reactjs.svg", "/nodejs.svg", "/tailwind.svg", "/huggingface.svg"],
      link: "https://devpost.com/software/partnr-consulting-copilot",
    },
    {
      id: 2,
      title: "BloodSight AI - Medical Technology Solution",
      des: "Turns blood work and patient data into predictive, preventive health insights for patients and physicians. Recognized through Georgia Tech's Create-X / I2P program.",
      img: "/BloodSight.png",
      iconLists: ["/figma.svg", "/python.svg", "/langchain.png", "/reactjs.svg", "/openai.svg", "/random-forest.png"],
      link: "https://github.com/adhira-ch/bloodsight-ai",
    },
    {
      id: 3,
      title: "Seed: Returns Meet Responsibility",
      des: "An investing platform that pairs financial returns with social impact, so investors can act on both at the same time.",
      img: "/seed.jpeg",
      iconLists: ["/python.svg", "/scikit-learn.png", "/openai.svg", "/microsoftazure.svg", "/reactjs.svg", "/streamlit.svg"],
      link: "https://devfolio.co/projects/seed-ba40",
    },
    {
      id: 4,
      title: "van.Go - Custom AI Painting Tutorials",
      des: "Generates a painting from a prompt, then overlays step-by-step visual instructions for an interactive, multimodal painting tutorial.",
      img: "/vanGo.png",
      iconLists: ["/opencv.png", "/flask.svg", "/python.svg", "/langchain.png", "/reactjs.svg", "/nodejs.svg", "/openai.svg", "/openai.svg"],
      link: "https://devpost.com/software/van-go",
    },
    {
      id: 5,
      title: "tAI: Your AI Teaching Assistant",
      des: "A personalized AI teaching assistant: multimodal, empathetic support for students, plus engagement and learning analytics for professors.",
      img: "/tAI1.jpg",
      iconLists: ["/next.svg"],
      link: "https://devpost.com/software/tai-personalized-teaching-assistant",
    },
    {
      id: 6,
      title: "Detecting & Locating Findings in ML Screening Mammograms",
      des: "An ML model that classifies and locates soft-tissue findings and microcalcifications in screening mammograms, built on ResNet with custom preprocessing.",
      img: "/medicalapp.png",
      iconLists: ["/python.svg", "/opencv.png", "/scikit-learn.png", "/tensorflow.svg"],
      link: "https://github.com/",
    },
    {
      id: 7,
      title: "Data Analysis of Adversarial Attacks on Multimodal Models",
      des: "Studied how adversarial attacks affect multimodal classification, with a web app that collected and analyzed 85,000+ tweets.",
      img: "/dataanalytics.jpg",
      iconLists: ["/python.svg", "/streamlit.svg"],
      link: "https://github.com/",
    },
    {
      id: 8,
      title: "LEAP Foundation: Leveraging Education & Academics for the Poor",
      des: "Led this education nonprofit for four years to widen access to schooling in India: 90+ volunteers, $900+ raised, $2,000+ in donated supplies, and 300+ children reached across five academic projects and two partnerships.",
      img: "/leap2.png",
      iconLists: [],
      link: "https://leapfoundationedu.wixsite.com/leap"
    },
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
    { skill: "Generative AI", expertise: 5 },
    { skill: "RAG Systems", expertise: 4 },
    { skill: "Agentic AI", expertise: 4 },
    { skill: "LangGraph", expertise: 4 },
    { skill: "LLM Evaluation", expertise: 4 },
    { skill: "Data Analytics & Visualization", expertise: 4 },
    { skill: "Product Management", expertise: 4 },
    { skill: "AI Strategy", expertise: 4 },
    { skill: "User-Centered Design", expertise: 3 },
    { skill: "Strategic Planning", expertise: 4 },
  ];