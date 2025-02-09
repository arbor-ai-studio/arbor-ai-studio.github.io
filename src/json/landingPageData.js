/* eslint-disable import/extensions */

// Services Img Imports
import AiConsulting from '../assets/images/Services/undraw_firmware_re_fgdy.svg';
import AiSoftwareDevelopment from '../assets/images/Services/undraw_speech_to_text_re_8mtf_AI.svg';
import DataAnalysis from '../assets/images/Services/undraw_projections_re_ulc6.svg';

// Portfolio Img Imports
import GigachadSalesman from '../assets/images/Portfolio/gigachadSalesman.png';
// import Stream from '../assets/images/Portfolio/Stream.png';
// import Freelance from '../assets/images/Portfolio/Freelance.png';
// import Aura from '../assets/images/Portfolio/Aura.png';
// import Surtido from '../assets/images/Portfolio/Surtido.png';
// import ManagementApp from '../assets/images/Portfolio/ManagementApp.png';

// Advantages
import DataDriven from '../assets/images/Advantages/undraw_growth_analytics_re_pyxf.svg';
import CollaborativeApproach from '../assets/images/Advantages/undraw_pair_programming_re_or4x.svg';
import ClientFocused from '../assets/images/Advantages/undraw_interview_re_e5jn.svg';
import CustomerFavorite from '../assets/images/Advantages/undraw_audio_conversation_re_3t38.svg';

// Testimonials
import Sasha from '../assets/images/Testimonials/Sasha.jpg';
import Reiner from '../assets/images/Testimonials/Reiner.jpg';
// import Kruger from '../assets/images/Testimonials/Kruger.jpg';

// TeamMembers
import SaifMahmud from '../assets/images/TeamMembers/saif_mahmud.jpg';
// import HRD from '../assets/images/TeamMembers/HRD.jpg';
// import Finance from '../assets/images/TeamMembers/Finance.jpg';
// import ProjectManager from '../assets/images/TeamMembers/Project-manager.jpg';
// import Frontend1 from '../assets/images/TeamMembers/Frontend1.jpg';
// import Frontend2 from '../assets/images/TeamMembers/Frontend2.jpg';
// import Backend1 from '../assets/images/TeamMembers/Backend1.jpg';
// import Backend2 from '../assets/images/TeamMembers/Backend2.jpg';
// import Mobile1 from '../assets/images/TeamMembers/Mobile1.jpg';
// import Mobile2 from '../assets/images/TeamMembers/Mobile2.jpg';
// import UIUX1 from '../assets/images/TeamMembers/UIUX1.jpg';
// import UIUX2 from '../assets/images/TeamMembers/UIUX2.jpg';

// Define the types as constants

export const ItemTypes = {
  AI_SOFTWARE: 'AI Software',
  DATA_ANALYSIS: 'Data Analysis',
  UI_UX: 'UI/UX',
  // Add more types as needed
};

export const Services = [
  {
    title: 'AI Consulting',
    svgUrl: AiConsulting,
    animation: 'left',
  },
  {
    title: 'AI Software Development',
    svgUrl: AiSoftwareDevelopment,
    animation: 'up',
  },
  {
    title: 'Data Analysis',
    svgUrl: DataAnalysis,
    animation: 'right',
  },
];

export const Portfolios = [
  {
    id: 'asd1293uasdads1',
    title: 'Gigachad Salesman',
    imageUrl: GigachadSalesman,
    type: ItemTypes.AI_SOFTWARE,
    responsibility: [
      'AI Development',
      'UI/UX Design',
    ],
    credit: '',
    description: `
        <h2>📌 Elevate Your Sales Team's Performance</h2>
        <br>
        <p>
            Through an advanced sales coaching tool that uses sophisticated AI to enhance sales team performance. Dive deep with audio analysis and robust performance tracking, providing actionable insights and metrics.
        </p>
        <br>
        <h3>🌟 Key Features:</h3>
        <br>
        <strong>- 🔁 Audio Analysis:</strong> Gain deep insights from each sales calls.<br>
        <strong>- 📊 Performance Tracking:</strong> Monitor and evaluate key performance indicators.<br>
        <strong>- 📈 Advanced Reporting:</strong> Generate comprehensive reports on weekly sales activities.<br>
        <br>
        <p>🚀 Empower your team with data-driven tools for a competitive edge!</p>
        `,
    buyNowLink: 'https://gigachad-salesman.streamlit.app/',
  },
  // {
  //   id: 'asd1293uhjkhkjh2',
  //   title: 'Stream+',
  //   imageUrl: Stream,
  //   type: 'Mobile Apps',
  //   responsibility: [
  //     'Mobile Development',
  //     'UI/UX Design',
  //   ],
  //   credit: 'https://dribbble.com/shots/15276430-Stream',
  //   description: 'Stream+ is a mobile application that helps you to find 
  // a job easily. This app is designed to be user-friendly and easy to use.',
  //   buyNowLink: '/pricing',
  // },
  // {
  //   id: 'asd1293uvbvcbbd3',
  //   title: 'Freelance',
  //   imageUrl: Freelance,
  //   type: 'Mobile Apps',
  //   responsibility: [
  //     'Mobile Development',
  //     'UI/UX Design',
  //   ],
  //   credit: 'https://dribbble.com/shots/15223131-Freelance-Mobile-App-Concept',
  //   description: 'Freelance is a mobile application that helps you to 
  // find a job easily. This app is designed to be user-friendly and easy to use.',
  //   buyNowLink: '/pricing',
  // },
  // {
  //   id: 'asd1293ufgdfgs4',
  //   title: 'Aura',
  //   imageUrl: Aura,
  //   type: 'Website',
  //   responsibility: [
  //     'Web Development',
  //     'UI/UX Design',
  //   ],
  //   credit: 'https://dribbble.com/shots/15176338-Aura-Website-Main-Page',
  //   description: 'Aura is a website that helps you to find a job easily. 
  // This app is designed to be user-friendly and easy to use.',
  //   buyNowLink: '/pricing',
  // },
  // {
  //   id: 'asd1293ulskmnb5',
  //   title: 'Surtido Rico',
  //   imageUrl: Surtido,
  //   type: 'Website',
  //   responsibility: [
  //     'Web Development',
  //     'UI/UX Design',
  //   ],
  //   credit: 'https://dribbble.com/shots/15173118-Surtido-Rico',
  //   description: 'Surtido Rico is a website that helps you to find a 
  // job easily. This app is designed to be user-friendly and easy to use.',
  //   buyNowLink: '/pricing',
  // },
  // {
  //   id: 'asd1293ulkmnbj6',
  //   title: 'Courses Management',
  //   imageUrl: ManagementApp,
  //   type: 'Website',
  //   responsibility: [
  //     'Web Development',
  //     'UI/UX Design',
  //   ],
  //   credit: 'https://dribbble.com/shots/15197890-Courses-Management-and-Promoting-Web-App',
  //   description: 'Courses Management is a website that helps you to 
  // find a job easily. This app is designed to be user-friendly and easy to use.',
  //   buyNowLink: '/pricing',
  // },
];
export const Advantages = [
  [{
    title: 'Data-Driven',
    description: 'We use data and insights to guide our decisions and deliver measurable results.',
    svgUrl: DataDriven,
  },
  {
    title: 'Client-Focused',
    description: 'We prioritize client satisfaction, building long-term partnerships based on trust and success.',
    svgUrl: ClientFocused,
  }],
  [{
    title: 'Collaborative Approach',
    description: 'We work closely with our clients, ensuring transparency and building solutions together.',
    svgUrl: CollaborativeApproach,
  },
  {
    title: 'Customer Favorite',
    description: 'Our clients love us for our commitment to quality, innovation, and delivering on time.',
    svgUrl: CustomerFavorite,
  }],
];
export const Testimonials = [
  {
    id: 1,
    name: 'Sasha Rose',
    company: 'Owner, Surveyor Corps',
    testimoni: 'Thanks to Arbor AI Studio, we have a new Enterprise Resource Planning system that is more efficient and user-friendly.',
    imageUrl: Sasha,
  },
  // {
  //   id: 2,
  //   name: 'Kruger Khan',
  //   company: 'Director, Shultan Oil',
  //   testimoni: 'I just wanted to let you know that it’s been great working with arboraistudio.',
  //   imageUrl: Kruger,
  // },
  {
    id: 3,
    name: 'Reiner John',
    company: 'CEO, Marley CO',
    testimoni: 'Arbor AI Studio has been a great partner for us. They have been able to keep up with our needs.',
    imageUrl: Reiner,
  },
];
export const TeamMembers = [
  {
    name: 'Saif Mahmud',
    position: 'AI Developer',
    imageUrl: SaifMahmud,
  },
  // {
  //   name: 'Pauline Sydney',
  //   position: 'HRD',
  //   imageUrl: HRD,
  // },
  // {
  //   name: 'Granger Watterson',
  //   position: 'Finance',
  //   imageUrl: Finance,
  // },
  // {
  //   name: 'Tom Jimmy',
  //   position: 'Project Manager',
  //   imageUrl: ProjectManager,
  // },
  // {
  //   name: 'Jim Hendrix',
  //   position: 'Front-end Developer',
  //   imageUrl: Frontend1,
  // },
  // {
  //   name: 'Calvin Max',
  //   position: 'Front-end Developer',
  //   imageUrl: Frontend2,
  // },
  // {
  //   name: 'Hawkins Jim',
  //   position: 'Back-end Developer',
  //   imageUrl: Backend1,
  // },
  // {
  //   name: 'Don Bizaro',
  //   position: 'Back-end Developer',
  //   imageUrl: Backend2,
  // },
  // {
  //   name: 'Bill Markinson',
  //   position: 'Mobile Developer',
  //   imageUrl: Mobile1,
  // },
  // {
  //   name: 'Igor Kavarov',
  //   position: 'Mobile Developer',
  //   imageUrl: Mobile2,
  // },
  // {
  //   name: 'Freddie Curl',
  //   position: 'UI/UX Designer',
  //   imageUrl: UIUX2,
  // },
  // {
  //   name: 'Monica Lovegood',
  //   position: 'UI/UX Designer',
  //   imageUrl: UIUX1,
  // },
];
