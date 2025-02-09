import colors from './themeColors.js';
// AVAILABLE COLORS
// 'light-theme-purple'
// 'theme-purple':
// 'dark-theme-purple'
// 'light-theme-blue'
// 'theme-blue'
// 'semi-dark-theme-blue'
// 'dark-theme-blue'
const ActiveTheme = 'dark-theme-blue'; // also set it in css
const SecondaryColor = 'semi-dark-theme-blue';
const BrandIconPartAColor = SecondaryColor;

// used in hero.js
const heroTitleText = "Hire AI Agents for Your Business, Save Time & Money.";
const subtitleText = "Crafting Intelligent Solutions for Small Scale Business Growth.";

// brandIcon.js
const brandIconPartA = "Arbor";
const brandIconPartB = "AI Studio";

// footer.js
const footerSubtitle = subtitleText;
const footerOfficeEmail = "arbor.ai.studio@gmail.com";
const footerOfficeLocation = "Winnipeg, Manitoba, Canada";
const footerCopyright = "© 2024, All rights reserved - Arbor AI Studio";
const footerCopyrightSublinePartA = " ";
const footerCopyrightSublinePartB = "Arbor AI Studio";
const partBbuttonLink = "/"; // go to home page

// Footer - social
const instagramLink = "https://www.instagram.com/arboraistudio/";
const linkedinLink = "https://www.linkedin.com/company/arbor-ai-studio";
const githubLink = "https://github.com/arbor-ai-studio";

// Projects Page
const projectsHeader = "Our Projects";
const projectsSubtitle = "Showcasing Our AI-Powered Solutions for Small Businesses.";

// Services section of Home Page
const servicesHeader = "Our Services";
const servicesSubtitle = "Empowering Small Businesses with Intelligent Solutions.";

// team page
const teamHeader = "Our Team";
const teamSubtitle = "The Minds Behind Arbor AI Studio's Innovative Solutions.";

const ColorMappings = {
  '#536dfe': colors[ActiveTheme],
  // '#536dfe': '#6c63ff',
};

export {
  heroTitleText,
  subtitleText,
  brandIconPartA,
  brandIconPartB,
  footerSubtitle,
  footerOfficeEmail,
  footerOfficeLocation,
  footerCopyright,
  footerCopyrightSublinePartA,
  footerCopyrightSublinePartB,
  partBbuttonLink,
  instagramLink,
  linkedinLink,
  githubLink,
  projectsHeader,
  projectsSubtitle,
  servicesHeader,
  servicesSubtitle,
  teamHeader,
  teamSubtitle,
  ActiveTheme,
  BrandIconPartAColor,
  SecondaryColor,
  ColorMappings,
};
