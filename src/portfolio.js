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
    name: "Bangumi",
    link: "https://bgm.tv/user/711741",
    fontAwesomeIcon: "fas fa-tv",
    backgroundColor: "#ff2d90",
    msg: "Catch me on Bangumi",
  },
  {
    name: "Steam",
    link: "https://steamcommunity.com/profiles/76561198979738568/",
    fontAwesomeIcon: "fab fa-steam",
    backgroundColor: "#000000",
    msg: "Catch me on Steam",
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
    name: "qq",
    link: "https://share.180811.xyz/qq.jpg",
    fontAwesomeIcon: "fab fa-qq",
    backgroundColor: "#f9ae08",
    needimg: true,
    img_path: "qq.jpg",
    msg: "Scan my QQ QR code",
  },
  {
    name: "Telephone",
    link: "tel:+8615355021145",
    fontAwesomeIcon: "fas fa-phone", // Reference https://fontawesome.com/icons/phone?style=solid
    backgroundColor: "#00A1C6",
    msg: "Call me",
  },
  {
    name: "Gmail",
    link: "mailto://ovlertheyoung@gmail.com",
    fontAwesomeIcon: "fas fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
    msg: "Send me an email",
  },
  {
    name: "Blog",
    link: "https://blog.180811.xyz",
    fontAwesomeIcon: "fas fa-blog",
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
      logo_path: "drive.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#1ACAA8",
    },
    {
      title: "College English Test",
      subtitle: "- Level 4",
      logo_path: "CET.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "CET.png",
      color_code: "#FFFFFF",
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
          title: "Team leader and Software Teacher",
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
      "I wrote my own blogs for hobbies", //TODO
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

const learningphilosophy = {
  contactSection: {
    title: "Learning Philosophy",
    profile_image_path: "undraw_scientist_re_fs04.svg",
    description:
      "As a second year college student in biochemistry engineering, my learning philosophy is centered on the idea that education is a lifelong journey. I believe that it is important to approach each new subject or topic with an open and curious mindset, and to be willing to put in the hard work and dedication required to truly understand and master the material."
  },
};

const images = {
  projects: "projects_image.svg",
  blogs: "blogs_image.svg",
  reflection: "undraw_ideas_re_7twj.svg",
  ace: "ace.png",
  teaching: "undraw_speech_to_text_re_8mtf.svg",
}

const labs = {
  title: "Labs",
  subtitle:
    "I have worked in a few labs in BUCT. I have worked with some amazing classmates there. I had learned a lot from them.",
  data: [
    {
      id: "1",
      title: "IOT Lab",
      subtitle: "Loc: BUCT, Beijing",
      image_path: "iotlab.jpg",
      description:
        "I learned in that lab during the course 'Artificial Intelligence and Automation'. I learned how to use AliCloud functions to build a monitoring system for the lab and basic usage of Node-RED , the MQTT protocol, the PLC protocol and the way to use the S7-1200 PLC.",
    },
    {
      id: "2",
      title: "Microbiology Lab",
      subtitle: "Loc: BUCT, Beijing",
      image_path: "micro.jpg",
      description:
        "Focusing on project ''Selection and breeding of high-yielding strains of ε-polylysine', I learned the basic knowledge of microbiology and the way to use the equipment in the lab.",
    },
    {
      id: "3",
      title: "Organic Lab",
      subtitle: "Loc: BUCT, Beijing",
      image_path: "organic.jpg",
      description:
        "Focusing on project ''Synthesis of 2,4,6-trisubstituted pyrimidines and their biological activities', I learned the basic knowledge of organic chemistry and the way to use the equipment in the lab.",
    },
  ],
};

const classes = {
  title: "Classes",
  subtitle:
    "I have taken some classes in BUCT. I have learned a lot from them. So I list some of which I found very helpful in my future career.",
  data: [
    {
      id: "1",
      title: "Artificial Intelligence and Automation",
      subtitle: "Teacher: Li Dazi",
      description:
        "For the automation part, I learned the basic of PLC control.  For the AI part, I learned the basic knowledge of AI and the way to use the AI tools in the lab.",
    },
    {
      id: "2",
      title: "Advanced English",
      subtitle: "Teacher: Dr. Shu-Ju Diana Tai",
      description:
        "Help me a lot in improving my communicative English and 21st century skills",
    },
    {
      id: "3",
      title: "Industrial Bioprocessing",
      subtitle: "Teacher: Dr. Deepak Kumar",
      description:
        "Interduce me to the basic knowledge of bioprocessing",
    },
    {
      id: "4",
      title: "Organic Chemistry",
      subtitle: "Teacher: Dr. Cheng Ning",
      description: "",
    },
    {
      id: "5",
      title: "Linear Algebra",
      subtitle: "Teacher: Dr. Zhang Zhigang",
      description: "",
    },
    {
      id: "6",
      title: "Spoken English",
      subtitle: "Teacher: Dr. Mary Frances Cappiello",
      description: "",
    },
  ]
}


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
  labs,
  classes,
  learningphilosophy,
  images,
};
