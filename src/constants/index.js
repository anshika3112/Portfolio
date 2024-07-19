import {
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
    drdo,
    linkedin,
    nodejs,
    emotion,
    fake,
    apple,
    react,
    leetcode,
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
        title: "trainee",
        company_name: "DRDO-IRDE",
        icon: drdo,
        date: "july 2024 - August 2024",
        iconBg: "#accbe1",
        points: [
            "i have worked on yolo-v8 on the project emotion detection and protective personal equipment and many more.",
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
        link: 'https://github.com/anshika3112',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/anshika-singhal-439b65230/',
    },
    {
        name:'LeetCode',
        iconUrl:leetcode,
        link:'https://leetcode.com/u/Anshika0311/'
    },
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
        iconUrl: fake,
        theme: 'btn-back-black',
        name: 'Fake news Detection',
        description: 'Desgined a model to to detct whether the news is fake or not',
        link: 'https://github.com/anshika3112/Fake_news_Detection',
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