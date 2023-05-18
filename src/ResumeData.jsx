import homeImage from "./assets/mypic.jpeg";
// ========================== Header Data
const headerIds = [
  "home",
  "profile",
  "education",
  "skills",
  "experience",
  
];
const HeaderLinks = [
  {
    linkText: "Home",
    linkID: "home",
    boxIcon: "bx-home",
  },
  {
    linkText: "Profile",
    linkID: "profile",
    boxIcon: "bx-user",
  },
  {
    linkText: "Education",
    linkID: "education",
    boxIcon: "bx-book",
  },
  {
    linkText: "Skills",
    linkID: "skills",
    boxIcon: "bx-receipt",
  },
  {
    linkText: "Experience",
    linkID: "experience",
    boxIcon: "bx-briefcase-alt",
  },
 
];

//  ===================================== Left Section Content =============================== //
// ========================== Home Data
const homeData = {
  homeImage,
  homeTitle1: "Sophie",
  homeTitle2: "Phahladira",
  homeProfession: "Web Developer",
  homeInformation: [
    {
      text: " 25 Ethafeni section, Tembisa",
      icon: "bx-map",
    },
    {
      text: "sophie.sa43@gmail.com",
      icon: "bx-envelope",
    },
    {
      text: " +27 72 060 8285",
      icon: "bx-phone",
    },
  ],
};


// ========================== Profile Data
const profileData = {
  title: "Profile",
  //   Here you can add as much paragraph as you can
  descriptions: [
    `I am a web developer with Full Stack, I do believe that code and programming are important skills. , I have a creative mind and am always up for new challenges. I am well organized and always plan ahead to make sure I manage my time well. Enjoy with study in Software Development .`,
    `I have experience in the web developer I am current study in DA for 2 years and do coding I would like to achieve my goal the aim is to build practical applications that will be 100% successful as help people for study that's my dream.

    `,
  ],
};

// ========================= Education Data
const educationData = {
  title: "Education",
  educations: [
    {
      title: "Business Analysis NQF Level 6 ",
      studies: "Digital Academy, Johannesburg",
      year: "2022 - 2023",
      line: true,
    },
    {
      title: " IT System Support NQF Level 5",
      studies: "Digital Academy, Johannesburg",
      year: "2021 - 2022",
      line: false,
    },
    {
      title: "Management ",
      studies: "(ServiceSETA), Bedfordview",
      year: "2018 - 2018",
      line: true,
    },
    {
      title: "IT Technical Support ",
      studies: "Limco Consulting & Management, Johannesburg",
      year: "2014 - 2014",
      line: true,
    },
    {
      title: "Ekurhuleni School for the Deaf ",
      studies: "High school, Germiston",
      year: "2007",
      line: true,
    },
  ],
};

// ========================= Skills Data
const skillsData = {
  title: "Skills",
  //   Here you can add further skills array
  skills: [
    [`Html`, `Css`, `React`, `Node.js`, `Teamwork Skills`],
    [`Discord`, `Github`, `Javascript`, `Bootstrap`,`Motivated Attitude`],
  ],
};
const logoText = ".";
const menuIcon = "bx-grid-alt";

//  ===================§================== Right Section Content =============================== //

// // ======================== Certificates Data
// const certificatesData = {
//   title: "Certificates",
//   certificates: [
//     {
//       title: "Member of Hackathon Winner Team AirTech’19",
//       describe:
//         "We Presented the idea of a Forest fire prevention system using WSN.",
//     },
//   ],
// };

// ========================= Experience Data
const experienceData = {
  title: "Experience",
  experiences: [
    {
      title: "Web Developer IT System Support(Full stack)",
      company: "2021 - 2022",
      describe:
        "I did work as a Codes of programming at Digital Academy.",
      line: true,
    },
    {
      title: "Business Analysis",
      company: "2022 - 2023",
      describe:
        "Above same.",
      line: true,
    },
    {
      title: "IOCO tech",
      company: "2017 - 2017",
      describe:
        "I worked as a SAP at EOH.",
      line: true,
    },
    {
      title: "Department of Education (Gauteng)",
      company: "2010 - 2012",
      describe: "I worked as a IT Technical Support at Department of Education.", 
      line: true,
    },
    {
      title: "Ekurhuleni school for the Deaf",
      company: "2009 - 2010",
      describe: "I worked as a Computer Literate at school.",
      line: false,
    },
  ],
};

// ========================= Languages Data
const languageData = {
  title: "Languages",
  languages: ["English", "Sign Language"],
};

// ========================= INTERESTS Data
const interestsData = {
  title: "INTERESTS",
  interests: [
    {
      icon: "bxs-plane-alt",
      text: "Travel",
    },
    {
      icon: "bx-headphone",
      text: "Gaming",
    },
    {
      icon: "bx-book",
      text: "Reading",
    },
  ],
};
export {
  HeaderLinks,
  logoText,
  menuIcon,
  homeData,
  profileData,
  educationData,
  skillsData,
  experienceData,
  languageData,
  interestsData,
  headerIds
};
