import {
    calculator,
    contact,
    python,
    codepen,
    cpp,
    c,
    css,
    github,
    html,
    plant,
    javascript,
    linkedin,
    nodejs,
    emotion,
    apple,
    react,
    tailwindcss
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "python",
        type: "Frontend",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Backend",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Web Developer",
        company_name: "IIT Bomabay-TechGyan",

        date: "March 2023 - April 2023",
        points: [
            "Developed a Code Pen . Using Html5,CSS and JavaScript",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: emotion,
        theme: 'btn-back-yellow',
        name: 'Emotion detection using Facial Detection',
        description: 'Developed : A real-time emotion detection system that analyzes facial expressions to identify and classify emotions .It uses Deep Learning techniques, specifically Convolutional Neural Networks  to extract features from facial images and make predictions about emotions.',
        link: 'https://github.com/anshika3112/Emotion-Detection-using-facial-expression',
    },
    {
        iconUrl: calculator,
        theme: 'btn-back-black',
        name: 'Calculator',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/anshika3112/Calculator',
    },
    {
        iconUrl: codepen,
        theme: 'btn-back-blue',
        name: 'Code pen',
        description: 'A collection of interactive web development projects showcasing various front-end technologies and design principles.Modern web development technologies such as HTML5, CSS3, and JavaScript were applied extensively to create engaging and visually appealing user interfaces.',
        link: 'https://github.com/anshika3112/codpen',
    },
    {
        iconUrl: plant,
        theme: 'btn-back-green',
        name: 'Smart Irrigation System',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/anshika3112/Smart_Irrigation_System',
    },
    {
        iconUrl: apple,
        theme: 'btn-back-red',
        name: 'Apple Clone',
        description:'A clone of a Apple site',
        link: 'https://github.com/adrianhajdin/pricewise',
    }
];