import image1 from '../assets/testimonial1.png'
import image2 from '../assets/testimonial2.png'
import image3 from '../assets/testimonial3.png'
import {
    work1,
    work2,
    work3,
    work4,
    work5,
    work6,
    work7,
    work8,
    work9,
    work11,
    work12,
    work10
} from '../assets'

export const links = [
    {
        menu: 'Home',
        icon: 'uil uil-estate',
        link: '#home'
    },
    {
        menu: 'About',
        icon: 'uil uil-user',
        link: '#about'
    },
    {
        menu: 'SKills',
        icon: 'uil uil-file-alt',
        link: '#skills'
    },
    {
        menu: 'Services',
        icon: 'uil uil-briefcase-alt',
        link: '#services'
    },
    {
        menu: 'Portfolio',
        icon: 'uil uil-scenery',
        link: '#portfolio'
    },
    {
        menu: 'Contact',
        icon: 'uil uil-message',
        link: '#contact'
    }
]

export const infoData = [
    {
        title: 'Experience',
        subtitle: '3+ years of experience',
        icon: 'bx bx-award'
    },
    {
        title: 'Completed',
        subtitle: '10+ Projects',
        icon: 'bx bx-briefcase-alt'
    },
    {
        title: 'Support',
        subtitle: 'Online 24/7',
        icon: 'bx bx-support'
    },
]

export const skills = [
    {
        frontend: {

        },
        backend: {

        }
    }
]

export const services = [
    {
        icon: 'bx bx-code-alt',
        desc: 'Web development'
    },
    {
        icon: 'bx bx-mobile-alt',
        desc: 'Mobile development'
    },
    {
        icon: 'bx bxs-data',
        desc: 'Web Hosting'
    },
    {
        icon: 'bx bx-cog',
        desc: 'Mobile & Web maintainance'
    },
]

export const qualifications = [
    {
        icon: 'uil uil-graduation-cap',
        title: 'Education'
    },
    {
        icon: 'uil uil-briefcase-alt',
        title: 'Experience'
    },
]

export const testimonies = [
    {
        id: 1,
        image: image1,
        title: 'Tuyishime David',
        description: 'Yyour attention to detail and ability to find creative solutions to complex problems never cease to impress me. Your contributions to our team have been invaluable'
    },
    {
        id: 2,
        image: image2,
        title: 'Jules Bienvenue Himbaza',
        description: 'I have been constantly amazed by your ability to quickly understand new technologies. Your hard work and expertise have played a huge role in the success of our projects'
    },
    {
        id: 3,
        image: image3,
        title: 'Eric Ndekezi',
        description: 'Our software development team has been utilizing the skills and expertise turn complex ideas into simple, user-friendly solutions that greatly improve our operations. '
    },
]

export const workCategories = [
    {
        name: 'all'
    },
    {
        name: 'frontend'
    },
    {
        name: 'backend'
    },
    {
        name: 'fullstack'
    },
    {
        name: 'game'
    }
]

export const works = [
    {
        id: 1,
        image: work1,
        title: 'Modern bank ui',
        description: 'Everything is changing so the UI, this is the modern bank UI/UX',
        category: 'frontend',
        link: 'https://bank-modern-ui-react.netlify.app/'
    },
    {
        id: 2,
        image: work2,
        title: 'GPT-3 ui',
        description: 'ChatGPT modern UI',
        category: 'frontend',
        link: 'https://modernuiux-gpt3.netlify.app/'
    },
    {
        id: 3,
        image: work3,
        title: 'My first portfolio',
        description: 'First portfolio I build in React',
        category: 'fullstack',
        link: 'https://christianhabineza.netlify.app/'
    },
    {
        id: 4,
        image: work4,
        title: 'Digital Branging',
        description: 'Digital branding UI using HTML and CSS',
        category: 'frontend',
        link: 'https://digitalmarkiting.netlify.app/'
    },
    {
        id: 5,
        image: work5,
        title: 'Modern restaurant UI',
        description: 'modern restaurant UI using React',
        category: 'frontend',
        link: 'https://restaurant-modern-ui.netlify.app/'
    },
    {
        id: 6,
        image: work6,
        title: 'Bank transaction',
        description: 'Bank transaction algorithm using javascript',
        category: 'fullstack',
        link: 'https://bank-javascript-algorithm.netlify.app/'
    },
    {
        id: 7,
        image: work7,
        title: 'Music App',
        description: 'Search your favorite music and save it easly on your spotify',
        category: 'fullstack',
        link: 'https://jammingchris.netlify.app/'
    },
    {
        id: 8,
        image: work8,
        title: 'Blog Post',
        description: 'My first blog about tech in Africa',
        category: 'frontend',
        link: 'https://chris-blog-post.netlify.app/'
    },
    {
        id: 9,
        image: work9,
        title: 'Node & Express E-commerce backend',
        description: 'E-commerce backend using Node & Express with MongoDB',
        category: 'backend',
        link: 'https://github.com/christianR15c/mern-eCommerce-backend'
    },
    {
        id: 10,
        image: work10,
        title: 'Chat App',
        description: 'chat within one-on-one chat or group chat',
        category: 'fullstack',
        link: 'https://github.com/christianR15c/chat-app'
    },
    {
        id: 11,
        image: work11,
        title: 'Guess number',
        description: 'It is a game where you guess a number',
        category: 'game',
        link: 'https://christian-guess-number-game.netlify.app/'
    },
    {
        id: 12,
        image: work12,
        title: 'Dice game',
        description: 'Bank transaction algorithm using javascript',
        category: 'game',
        link: 'https://christian-dice-game.netlify.app/'
    }
]