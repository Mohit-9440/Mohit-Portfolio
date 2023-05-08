// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: '#000000, #090909, #131313, #1A1A1A, #202020',
  firstName: 'Mohit',
  middleName: '',
  lastName: '',
  message:
    '  Software Developer ⚛ (Front-End Developer) ⚛ Technology Enthusiast',
  icons: [
    {
      image: 'fa-github',
      url: 'https://github.com/mohit-9440',
    },
    {
      image: 'fa-upwork',
      url: 'https://www.upwork.com/freelancers/~015fbf717a50f7a5ae',
    },
    {
      image: 'fa-instagram',
      url: 'https://www.instagram.com/__mohitsharma._/',
    },
    {
      image: 'fa-linkedin',
      url: 'https://www.linkedin.com/in/mohit-web-developer/',
    },
  ],
};

const about = {
  show: true,
  heading: 'About Me',
  imageLink: require('./mohit1.jpg'),
  imageSize: 375,
  message: (
    <p>
      Hello! My name is <strong>Mohit</strong>, I'm a{' '}
      <strong>Front-End Developer</strong>. <br />
      <strong>
        <a
          href='https://www.upwork.com/freelancers/~015fbf717a50f7a5ae'
          target={'_blank'}
          rel='noreferrer'
          style={{ textDecoration: 'underline', color: 'inherit' }}
        >
          Freelancer on Upwork
        </a>
      </strong>
      . I do coding for life as I enjoy it, not only during work, adaptive with
      different technologies and always interested in exploring new tools!
    </p>
  ),
  resume: require('./Mohit.pdf'),
};

const repos = {
  show: true,
  heading: 'Recent Projects',
  gitHubUsername: 'mohit-9440',
  reposLength: 25,
  specificRepos: [],
  projects: [
    {
      name: 'Personal Project',
      description:'Music Application',
      technologies: ['React','Javascript','CSS','Redux',],
      live_link: 'https://hotify.vercel.app/',
      github_url: 'https://github.com/Mohit-9440/hotify',
    },
    {
      name: 'Personal Project',
      description: 'Chat application',
      technologies: ['React','Javascript','CSS','Firebase',],
      live_link: 'https://chattersocial.vercel.app/',
      github_url: 'https://github.com/Mohit-9440/chatapp-social',
    },
    {
      name: 'Personal Project',
      description: 'Food Delivery',
      technologies: ['React', 'Javascript','CSS', 'Material-UI'],
      live_link: 'https://fooddeliver.vercel.app/',
      github_url: 'https://github.com/Mohit-9440/restaurantapp',
    },
    {
      name: 'Personal Project',
      description: 'E-commerce Application',
      technologies: ['React', 'Javascript','CSS', 'Styled Components'],
      live_link: 'https://electroo-shop.vercel.app/',
      github_url: 'https://github.com/Mohit-9440/shopping',
    },
    
  ],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: 'Skills',
  hardSkills: [
    { name: 'HTML5', value: 80 },
    { name: 'CSS3', value: 85 },
    { name: 'React', value: 80 },
    { name: 'JavaScript', value: 80 },
    { name: 'Firebase', value: 70 },
    { name: 'Node', value: 60 },
    { name: 'MongoDb', value: 80 },
    { name: 'Redux', value: 70 },
    { name: 'Tailwind CSS', value: 80 },
    { name: 'Git/GitHub', value: 90 },
  ],
  softSkills: [
    { name: 'Goal-Oriented', value: 80 },
    { name: 'Collaboration', value: 90 },
    { name: 'Leadership', value: 75 },
    { name: 'Anchoring', value: 85 },
    { name: 'Management', value: 75 },
    { name: 'Empathy', value: 90 },
    { name: 'Organization', value: 70 },
    { name: 'Creativity', value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: 'Get In Touch',
  message:
    'If you know of any opportunities available, have any questions, or just want to say hi, please feel free to email me at',
  email: 'mohitsharma8864@gmail.com',
};

const experiences = {
  show: false,
  heading: 'Experiences',
  data: [
    // {
    //   role: 'React Developer Intern', // Here Add Company Name
    //   companylogo: require(''),
    //   date: 'Sep 2022 – Nov 2022',
    // },
    
  ],
};

export { navBar, mainBody, about, repos, skills, getInTouch, experiences };
