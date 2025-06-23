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
      position: "Digital Business Analyst",
      company: "McKinsey & Company",
      startDate: "June 2025",
      endDate: "Present",
      desc: "- Driving high-impact digital transformation initiatives, with a focus on AI and ML strategy, implementation, and client delivery.",
      className: "md:col-span-2",
    },
    {
      id: 2,
      position: "Product Manager & Lead AI Developer – Defense AI & Engineering",
      company: "Deloitte",
      startDate: "September 2024",
      endDate: "May 2025",
      desc: "- Led a cross-functional team of 7 in agile development of a secure, isolated, and trustworthy Retrieval-Augmented Generation (RAG) product using the latest open-source LLMs in a siloed NVIDIA DGX environment.\n- Supported a federal client in deploying their first production-level AI chatbot, expected to serve 40K+ users, by leading AI and backend development.\n- Owned end-to-end system architecture, data flow, and authored both user-facing and technical documentation to support deployment and stakeholder demos.\n- Advanced AI strategy and thought leadership in Bioinformatics and Federal Health through event planning, publications, and internal eminence efforts.\n- Recognized with four performance awards: two Shout Out Awards, an Applause Award, and an Outstanding Performance Award for innovation, delivery, and team leadership.",
      className: "md:col-span-2",
    },
    {
      id: 3,
      position: "Software Development Engineer",
      company: "Amazon",
      startDate: "May 2024",
      endDate: "August 2024",
      desc: "- Worked under the ReadON team at Kindle.\n- Designed & deployed 2 end-to-end Kindle features using C++ & React Native to address user concerns, enhancing navigation & customer experience (CX).\n- Created reusable software components, increasing efficiency by 20%, and wrote unit tests to achieve 90% code coverage.\n- Implemented AWS CloudWatch monitoring & integration testing with Hydra to ensure system robustness & performance.",
      className: "md:col-span-2",
    },
    {
      id: 4,
      position: "Summer Analyst - AI Specialist",
      company: "Deloitte Consulting",
      startDate: "June 2023",
      endDate: "August 2023",
      desc: "- Supported AI growth in the Government Public Service sector.\n- Developed generative AI chatbots for Health and Education Departments using BART Transformer Models.\n- Created a Generative AI Analytics Dashboard and co-designed the firm's AI playbook and training.",
      className: "md:col-span-2",
    },
    {
      id: 5,
      position: "Full-Stack Software Development Intern",
      company: "Cognosos, Inc.",
      startDate: "January 2023",
      endDate: "May 2023",
      desc: "- Enhanced modularity of APIs and created 85+ Swagger API documentation entries.\n- Boosted application performance by 25% using AWS EC2 instances and scalable infrastructure.\n- Supported development sprints and adapted to evolving requirements following Agile practices.",
      className: "md:col-span-2",
    },
    {
      id: 6,
      position: "Undergraduate Research Assistant",
      company: "CLAWS Lab @ Georgia Tech",
      startDate: "November 2020",
      endDate: "May 2024",
      desc: "- Developed and integrated a web app to a multimodal ML model to study adversarial impacts on classification.\n- Conducted a user experiment and statistical analysis to identify vulnerabilities and improve model performance.\n- Built a dashboard with data visualizations showcasing model performance using responsive web technologies.",
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
    },
    {
      id: 8,
      title: "LEAP Foundation: Leveraging Education & Academics for the Poor",
      des: "Led the non-profit organization for 4 years to bridge the gap in childhood education in India, providing resources and support to underprivileged students. Mobilized 90+ volunteers, raised $900+, and donated $2,000+ in supplies to benefit 300+ children through 5 academic projects and 2 partnerships, overseeing operations and driving business growth and marketing strategies.",
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