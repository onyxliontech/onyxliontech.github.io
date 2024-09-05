/* eslint-disable import/extensions */

// Services Img Imports
import Web from '../assets/images/Services/Web.png';
import Mobile from '../assets/images/Services/Mobile.png';
import UIUX from '../assets/images/Services/Design.png';

// Portfolio Img Imports
import Cafe from '../assets/images/Portfolio/cafe.png';
import Gym from '../assets/images/Portfolio/gym.png';
import Recipe from '../assets/images/Portfolio/recipe.png';
import ProjectManagement from '../assets/images/Portfolio/projMgmt.png';
import Shop from '../assets/images/Portfolio/shop.png';

// Advantages
import Communicative from '../assets/images/Advantages/Communicative.png';
import Collaborative from '../assets/images/Advantages/Collaborative.png';
import Management from '../assets/images/Advantages/Management.png';
import Favorite from '../assets/images/Advantages/Favorite.png';

// Testimonials
import Sasha from '../assets/images/Testimonials/Sasha.jpg';
import Reiner from '../assets/images/Testimonials/Reiner.jpg';
import Kruger from '../assets/images/Testimonials/Kruger.jpg';

// TeamMembers
import Miske from '../assets/images/TeamMembers/Miske.JPG';
import Leul from '../assets/images/TeamMembers/leul.jpg';
import Mele from '../assets/images/TeamMembers/Mele.jpg';
import Mule from '../assets/images/TeamMembers/Mule.jpg';

export const Services = [
  {
    title: 'Web Development',
    imageUrl: Web,
    animation: 'left',
  },
  {
    title: 'Mobile Development',
    imageUrl: Mobile,
    animation: 'up',
  },
  {
    title: 'UI/UX Design',
    imageUrl: UIUX,
    animation: 'right',
  },
];

export const Portfolios = [
  {
    id: 'asd1293uhjkhkjh2',
    title: 'Angel Food',
    imageUrl: Cafe,
    detail: 'Cafe is a mobile application that helps you to find a job easily.',
    type: 'Website',
    responsibility: [
      'Mobile Development',
      'UI/UX Design',
    ],
    links: 'https://restaurants-blond-five.vercel.app/',
  },
  {
    id: 'asd1293uvbvcbbd3',
    title: 'Fitness Club',
    imageUrl: Gym,
    detail: 'Gym is a mobile application that helps you to find a job easily.',
    type: 'Website',
    responsibility: [
      'Mobile Development',
      'UI/UX Design',
    ],
    links: 'https://gym-exercise-mu.vercel.app/',
  },
  {
    id: 'asd1293ulskmnb5',
    title: 'RecipeApp',
    imageUrl: Recipe,
    detail: 'A website was created that allows users to browse and explore a wide variety of recipes. Users can filter recipes based on the ingredients they have, the type of food they want, or any dietary restrictions. They can also save their favorite recipes, making it easy to find them later. Each user\'s saved recipes are personalized just for them.',
    type: 'Website',
    responsibility: [
      'Web Development',
      'UI/UX Design',
    ],
    links: 'https://reci-app-front-end.vercel.app/',
  },
  {
    id: 'asd1293ulkmnbj6',
    title: 'Project Management System',
    imageUrl: ProjectManagement,
    detail: 'A project management system was developed, inspired by Monday.com, to enhance team collaboration and streamline project workflows. This web-based application allows users to easily create, assign, and track tasks within projects, ensuring efficient project management and clear communication across teams. Key features include customizable project boards, task dependencies, progress tracking, and collaborative document sharing. The system is designed with a user-friendly interface, providing both managers and team members with intuitive tools to monitor progress and meet deadlines effectively. The project was built using modern web technologies and follows best practices to ensure continuous improvement and responsiveness to user needs.',
    type: 'Website',
    responsibility: [
      'Web Development',
      'UI/UX Design',
    ],
    links: 'https://projectmgmtsystem.vercel.app/',
  },
  {
    id: 'asd1293ulskmnaw5',
    title: 'Shop',
    imageUrl: Shop,
    detail: 'A website was created that allows users to browse and explore a wide variety of shoes. Users can filter shoes based on the brand they want, the type of shoes they want, or any size. They can also save their favorite shoes, making it easy to find them later. Each user\'s saved shoes are personalized just for them.',
    type: 'Website',
    responsibility: [
      'UI/UX Design',
    ],
    links: 'https://shoe-store-lemon-six.vercel.app/',
  },
];

export const Advantages = [
  [{
    title: 'Communicative',
    description: 'We communicate our project ideas and progress to make it clear.',
    imageUrl: Communicative,
  },
  {
    title: 'Management',
    description: 'We manage our project properly to make our project done well.',
    imageUrl: Management,
  }],
  [{
    title: 'Collaborative​',
    description: 'Our team are very collaborative to make our project done well.',
    imageUrl: Collaborative,
  },
  {
    title: 'Favorite',
    description: "We've did so many project and all of our client love it.",
    imageUrl: Favorite,
  }],
];
export const Testimonials = [
  {
    id: 1,
    name: 'Sasha Rose',
    company: 'Owner, Surveyor Corps',
    testimoni: 'Thanks for OnyxLion, you guys are the best! Keep up the great work!',
    imageUrl: Sasha,
  },
  {
    id: 2,
    name: 'Kruger Khan',
    company: 'Director, Shultan Oil',
    testimoni: 'I just wanted to let you know that it’s been great working with OnyxLion.',
    imageUrl: Kruger,
  },
  {
    id: 3,
    name: 'Reiner John',
    company: 'CEO, Marley CO',
    testimoni: 'OnyxLion is so great. Thank you so much for a job well done.',
    imageUrl: Reiner,
  },
];

export const TeamMembers = [
  {
    name: 'Rach David',
    position: 'CEO',
    imageUrl: Miske,
  },
  {
    name: 'Pauline Sydney',
    position: 'HRD',
    imageUrl: Leul,
  },
  {
    name: 'Granger Watterson',
    position: 'Finance',
    imageUrl: Mele,
  },
  {
    name: 'Tom Jimmy',
    position: 'Project Manager',
    imageUrl: Mule,
  },
  {
    name: 'Tom Jimmy',
    position: 'Project Manager',
    imageUrl: Miske,
  },
 
];
