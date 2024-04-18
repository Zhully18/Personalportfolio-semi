import {FaBriefcase,FaGraduationCap,FaCode} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
import Work1 from '../Asset/jd.png'
import Work2 from '../Asset/weather.png'
import Work3 from '../Asset/cake.png'
import lady from '../Asset/laddy1.jpg'
import lady2 from '../Asset/ladyy.jpg'

export const service= [
    {
        head: 'SYSTEM DEVELOPMENT',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incidicunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consegquat.',
    },
    {
        head: 'SOFTWARE TESTING',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incidicunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consegquat.',
    },
    {
        head: 'SYSTEM DESIGN',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incidicunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consegquat.',
    },
];

export const feedback =[
  {
    image: lady,
    name: 'Dianne Russell',
    company: 'Company',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
  },
  {
    image: lady2,
    name: 'Dianne Russell',
    company: 'Company',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
  },
  {
    image: lady,
    name: 'Dianne Russell',
    company: 'Company',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
  },

]

export const resume = [
    {
      id: 1,
      category: 'experience',
      icon: <FaBriefcase />,
      year: 'Jan 2023 - PRESENT',
      title: 'Web Developer(Remote) <span> Zhullyblog </span>',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incidicunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consegquat.',
    },
  
    {
      id: 2,
      category: 'experience',
      icon: <FaBriefcase />,
      year: 'Jan 2023 - Dec 2023',
      title: 'Web Designer (Remote) <span> Zhullyblog </span>',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incidicunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consegquat.',
    },
  
    {
      id: 3,
      category: 'experience',
      icon: <FaBriefcase />,
      year: 'Jan 2023 - Aug 2023',
      title: 'Administrative Officer <span> Zhullyblog </span>',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incidicunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consegquat.',
    },
  
    {
      id: 4,
      category: 'education',
      icon: <FaGraduationCap />,
      year: 'Mar 2017- Sept 2021',
      title: 'Bachelors of Science Degree <span> Southwestern University </span>',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incidicunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consegquat.',
    },
  
    {
      id: 5,
      category: 'education',
      icon: <FaGraduationCap />,
      year: 'Jan 2022',
      title: 'Web Development <span> Freecodecamp </span>',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incidicunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consegquat.',
    },
  
    {
      id: 6,
      category: 'education',
      icon: <FaGraduationCap />,
      year: 'Aug 2023',
      title: 'Frontend Development <span> GoMyCode </span>',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incidicunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consegquat.',
    },
  ];

  export const portfolio = [
    {
      id: 1,
      img: Work1,
      title: 'Personal portfolio',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Portfolio',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Personal',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'React js',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://polite-malasada-648584.netlify.app/',
        },
      ],
    },
  
    {
      id: 2,
      img: Work2,
      title: 'Weather App',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Weather App',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Upwork',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'React JS',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 3,
      img: Work3,
      title: 'Cake website',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Cake website',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Personal',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Recat JS',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 4,
      img: Work1,
      title: 'Porfolio',
      details: [
        {
          icon: <FiFileText />,
          title: 'Portfolio : ',
          desc: 'Website',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Upwork',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'React JS',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 5,
      img: Work2,
      title: 'Landing Page',
      details: [
        {
          title: 'Project : ',
          desc: 'Website',
        },
        {
          title: 'Client : ',
          desc: 'Dribble',
        },
        {
          title: 'Language : ',
          desc: 'React JS, Node JS',
        },
        {
          title: 'Preview : ',
          desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 6,
      img: Work3,
      title: 'Cake Website',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Cake website',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Fiveer',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'React JS',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.dibble.com',
        },
      ],
    },
  ];
  