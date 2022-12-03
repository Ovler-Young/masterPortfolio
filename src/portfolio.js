/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Oliver's Portfolio",
  description:
    "In process Bioprocessing engineering student with experience and interest in computer engineering.",
  og: {
    title: "Oliver Jin's Portfolio",
    type: "website",
    url: "https://portfolio.180811.xyz/",
  },
};

//Home Page
const greeting = {
  title: "Oliver Jin",
  logo_name: "OliverJin",
  nickname: "Ovler",
  subTitle:
    "In process Bioprocessing engineering student with experience and interest in computer engineering.",
  resumeLink: "https://share.180811.xyz/Resume.pdf",
  portfolio_repository: "https://github.com/Ovler-Young/masterPortfolio",
  githubProfile: "https://github.com/Ovler-Young",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Ovler-Young",
    fontAwesomeIcon: "fab fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
    msg: "Check out my Github",
  },
  {
    name: "Telegram",
    link: "https://t.me/Ovler",
    fontAwesomeIcon: "fab fa-telegram-plane", // Reference https://fontawesome.com/icons/telegram?style=brands
    backgroundColor: "#26A5E4", // Reference https://simpleicons.org/?q=linkedin
    msg: "Send me a message on Telegram",
    needimg: true,
    img_path: "telegram.jpg",
  },
  {
    name: "WeChat",
    link: "https://share.180811.xyz/WeChat.jpg",
    fontAwesomeIcon: "fab fa-weixin",
    backgroundColor: "#7BB32E",
    needimg: true,
    img_path: "wechat.png",
    msg: "Scan my WeChat QR code",
  },
  {
    name: "Gmail",
    link: "mailto://ovlertheyoung@gmail.com",
    fontAwesomeIcon: "fas fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
    msg: "Send me an email",
  },
  {
    name: "Telephone",
    link: "tel:+8615355021145",
    fontAwesomeIcon: "fas fa-phone", // Reference https://fontawesome.com/icons/phone?style=solid
    backgroundColor: "#00A1C6",
    msg: "Call me",
  },
  {
    name: "Blog",
    link: "https://blog.180811.xyz",
    fontAwesomeIcon: "fas fa-rss",
    backgroundColor: "#FFA500",
    msg: "Visit my blog",
  },
  //{
  //  name: "read.cv",
  //  link: "https://read.cv/engineer",
  //  fontAwesomeIcon: "fas fa-file-alt",
  //  backgroundColor: "#FFA500",
  //  msg: "Read my CV",
  //},
];

const skills = {
  data: [
    {
      title: "Bioprocessing Engineering",
      fileName: "DataScienceImg",
      skills: [
        "📖 Corrently learning Bioprocessing Engineering in college",
        "📝 Learned Linear Algebra, Computing method, Fundamental Chemistry, Organic Chemistry and many other courses",
        "🥼 Experience of physical experiments, organic experiments, and Inorganic chemistry experiments",
        "⚗️ Experience of working with lab equipment such as centrifuge, shaker, and autoclave",
        "🔬 Experience of working with plant tissue culture and E. coli culture",
        "🧫 Corrently, in this field, I'm focusing on Project 'Selection and breeding of high-yielding strains of ε-polylysine'",
      ],
      softwareSkills: [
        {
          skillName: "Matlab",
          fontAwesomeClassname: "vscode-icons:file-type-matlab",
          style: {
            backgroundColor: "transparent",
            color: "#276DC3",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel2",
          style: {
            backgroundColor: "transparent",
            color: "#276DC3",
          },
        },
        {
          skillName: "Word",
          fontAwesomeClassname: "vscode-icons:file-type-word",
          style: {
            backgroundColor: "transparent",
            color: "#276DC3",
          },
        },
        {
          skillName: "PowerPoint",
          fontAwesomeClassname: "vscode-icons:file-type-powerpoint",
          style: {
            backgroundColor: "transparent",
            color: "#276DC3",
          },
        },
        // markdown
        {
          skillName: "Markdown",
          fontAwesomeClassname: "vscode-icons:file-type-markdown",
          style: {
            backgroundColor: "transparent",
            color: "#276DC3",
          },
        },
      ],
    },
    {
      title: "IT Skills",
      fileName: "FullStackImg",
      skills: [
        "👨‍🔧️ Volunteering in the activity 'X-ware' hosted by ' SNC(Student Network Center) ' and ' CCSN(Changcheng Student Network) ', Helps to fix  computer problems of students",
        "🖥️ Responsible for the maintenance of the SNC on-campus server room since 2022 fall semester",
        "🌐 Build responsive and open source website front end using React and many other libraries",
        "☁️ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "☁️ Self-hosting websites on my own VPS and cloud based saas solutions like Vercel",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "logos:vercel-icon",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "PNPM",
          fontAwesomeClassname: "logos:pnpm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:next-dot-js",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Beijing University of Chemical Technology",
      subtitle: " Bachelor of Engineering in Bioprocess Engineering",
      logo_path: "BUCT_logo.png",
      alt_name: "BUCT",
      duration: "June 2021 - Present",
      gpa: "3.26/4.33",
      descriptions: [
        "⚡ I'm still studying in this university, currently in my 2nd year.",
        "⚡ I have studied basic courses like Calculus, Linear Algebra, Physics, Chemistry, etc. in my first year.",
        "⚡ Apart from this, I have done courses on Computing methods, Python and 'Artificial Intelligence and Automation'. ",
        "⚡ What's more, I've joined some clubs in my spare time, like 'Student Network Center' and 'Zhadui Acadamic Club'.",
        "⚡ I am in a exchange program with SUNY-ESF, and I will spend my 4rd year in Syracuse, NY.",
      ],
      website_link: "https://www.buct.edu.cn/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Driving Licence",
      subtitle: "- C1",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "College English Test",
      subtitle: "- Level 4",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Cardiopulmonary Resuscitation",
      subtitle: "",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Volunteership,Projects, Essay and Study",
  description:
    "I have been working hard with my study, and do many Volunteership whenever availible. I have also worked with some well established people mostly as technicue. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Team leader,  full stack engineer, and computer repair technician",
          company: "Student Network Center",
          company_url: "https://legatohealthtech.com/",
          logo_path: "SNC_logo.png",
          duration: "June 2020 - PRESENT",
          location: "Hyderabad, Telangana",
          description:
            "Volunteered as a computer repair technician in the X-ware event every Friday night.\n Built an analysis system for the organization, undertook the task of analyzing data for the\n ARG game 'Cyber Civilisation Week' and essay competition 'March of Fireworks lantern'.\n Hosted the essay competition 'March of Fireworks lantern' website\n Write questions and host a website in the ARG activity 'Cyber Civilisation Week'",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Zhadui Academic Club",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "ZAC_logo.jpg",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "Reviewed, typeset and proofread materials for advanced mathematics, linear algebra, and inorganic chemistry as a volunteer to help coursemates with exams. Built and maintained the 'BUCTBASE', a free platform for college students to share course materials, which now gains more than 200 users per week. Answer questions for fresh students in the orientation group",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "北化新干线",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "Repair computers for schoolmates.Built and maintained the 'BUCTHOLE'(Shut down now), an anonymous social platform for schoolmates that gained over 2 thousand users before shutting down. Taught about 10 apprentices with computer repairing technology. Wrote some tutorials for computer repairing.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Projects",
      experiences: [
        {
          title: "Poclass",
          company: "Poclass",
          company_url: "https://www.delhivery.com/",
          logo_path: "Poclass.png",
          duration: "PRESENT",
          location: "Beijing, China",
          description:
            "An AI toolbox to help video-based study, currently in development.",
          color: "#ee3c26",
        },
        {
          title: "BUCTBASE",
          company: "No",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "buctbase.png",
          duration: "Nov 2021 - Apr 2022",
          location: "Work From Home",
          description:
            "A platform to share course materials in my school. Used react to build this website and hosted on Vercel. (Chinese only right now)",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Side Projects(WIP)",
      experiences: [
        {
          title: "Poclass",
          company: "Poclass",
          company_url: "https://www.delhivery.com/",
          logo_path: "Poclass.png",
          duration: "PRESENT",
          location: "Beijing, China",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "BUCTBASE",
          company: "No",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "buctbase.png",
          duration: "Nov 2021 - Apr 2022",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Essay(WIP)",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
    {
      title: "Study",
      experiences: [
        {
          title: "College Student",
          company: "Beijing University of Chemical Technology",
          company_url: "https://about.google/",
          logo_path: "BUCT_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Relevent Course: Python, Computing methods, Artificial Intelligence and Automation",
          color: "#4285F4",
        },
        {
          title: "Highschool Student",
          company: "Hangzhou No.4  highschool",
          company_url: "https://www.microsoft.com/",
          logo_path: "HZ4Z_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Selected Physics, Chemistry and Biology in the College Entrance Examination",
          color: "#D83B01",
        }
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Essay",
  description:
    "I have worked wrote some essayes of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  // TODO: remove this
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Ovler.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.", //TODO
    link: "https://hexo.180811.xyz",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Address: Beijing city Chaoyang District North Third Ring Road 15",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.openstreetmap.org/way/629215836#",
  },
  phoneSection: {
    title: "Phone Number",
    phone: ["+86 153 5502 1145", "+1 937 985 2118"],
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
