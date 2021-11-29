import { AiFillHtml5 } from "react-icons/ai";
import {
  FaCss3Alt,
  FaJava,
  FaNode,
  FaReact,
  FaAws,
  FaLocationArrow,
  FaPizzaSlice,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoPython } from "react-icons/io";
import {MdCameraAlt} from 'react-icons/md';
import {SiExpress} from 'react-icons/si';    

const techStackItems= [
    {   
        id: 1,
        techLogo: <AiFillHtml5 />,
        label: 'HTML'
    },
    {   
        id: 2,
        techLogo: <FaCss3Alt />,
        label: 'CSS'
    },
    {   
        id: 3,
        techLogo: <IoLogoJavascript />,
        label: 'JavaScript'
    },
    {   
        id: 4,
        techLogo: <FaReact />,
        label: 'React.JS'
    },
    {   
        id: 5,
        techLogo: <FaNode  />,
        label: 'Node.JS'
    },
    {   
        id: 6,
        techLogo: <SiExpress />,
        label: 'Express.JS'
    },
    {   
        id: 7,
        techLogo: <AiFillHtml5 />,
        label: 'MongoDB'
    },
    {   
        id: 8,
        techLogo: <FaJava  />,
        label: 'Java'
    },
    {   
        id: 9,
        techLogo: <IoLogoPython  />,
        label: 'Python'
    },
    {   
        id: 10,
        techLogo: <FaAws  />,
        label: 'AWS'
    }
]
const trivia = [
    {   
        id: 1,
        title: <FaLocationArrow/>,
        info: 'Last seen somewhere in India'
    },
    {   
        id: 2,
        title: 'Favorite Food',
        info: <FaPizzaSlice />
    },
    {   
        id: 3,
        title: 'Hobby:',
        info: <MdCameraAlt />
    },
    {   
        id: 4,
        title: 'Mountains or Beach:',
        info: 'Mountains'
    },
    {   
        id: 5,
        title: 'Travel Style:',
        info: 'Backpacking'
    },
    {   
        id: 6,
        title: 'Favorite Exercise',
        info: 'Yes'
    },
    
]

export {techStackItems, trivia};