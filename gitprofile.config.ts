// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'rafifdna', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/rafif/rafif.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/rafif/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['rafif/my-project1', 'rafif/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['rafif/gitprofile', 'rafif/pandora'], // List of repository names to display. example: ['rafif/my-project1', 'rafif/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Rafif Dzakwan',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'rafifdna',
    credly: 'rafifdna',
    twitter: 'rafifdna',
    facebook: 'rafifdna',
    instagram: 'rafifdna',
    email: 'rafif.dna@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1G6wlZD8nFaARk-WenukxIi92fBDqJxHU/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'AWS',
    'Alibaba Cloud',
    'Azure',
    'GCP',
    'Oracle Cloud Infrastructure',
    'Docker',
    'Kubernetes',
    'Git',
    'Grafana',
    'New Relic',
    'Javascript',
    'Typescript',
    'Python',
    'Terraform',
  ],
  experiences: [
    {
      company: 'Elitery',
      position: 'Site Reliability Engineer',
      from: 'October 2023',
      to: 'Present',
      companyLink: 'https://elitery.com/',
    },
    {
      company: 'Halodoc',
      position: 'Cyber Security Intern',
      from: 'Feb 2023',
      to: 'June 2023',
      companyLink: 'https://www.halodoc.com/',
    },
  ],
  certifications: [
    {
      name: 'AWS Partner: Accreditation (Technical)',
      body: 'Amazon Web Services (AWS)',
      year: 'January 2024',
      link: 'https://www.credly.com/badges/af762a02-c4ea-495e-827c-e15c9dec7694/linked_in_profile',
    },
    {
      name: 'Computer Hacking Forensic Investigator (CHFI)',
      body: 'EC-Council',
      year: 'December 2023',
      link: 'https://aspen.eccouncil.org/VerifyBadge?type=certification&a=RM6xsrf6lU70qz3rFc4PbDNhfzHalPiBrJ4LYc2oiCo=',
    },
    {
      name: 'Digital Forensics Essentials (DFE)',
      body: 'EC-Council',
      year: 'December 2023',
      link: 'https://aspen.eccouncil.org/VerifyBadge?type=certification&a=Js+jkzQ8wJrZ7uCQZwMVj/lV3Jl2GW7Z74VhtmzMmlA=',
    },
    {
      name: 'Microsoft Certified: Security Operations Analyst Associate',
      body: 'Microsoft',
      year: 'December 2023',
      link: 'https://learn.microsoft.com/api/credentials/share/en-us/rafifdnamc/D22FD42918648BC3?sharingId',
    },
    {
      name: 'OCI 2023 Certified Foundations Associate',
      body: 'Oracle Cloud Infrastructure',
      year: 'September 2023',
      link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=7B17F878C6565F993C4E7365176352721805B713EEBFDAA83FFDEC8A31865F51',
    },
    {
      name: 'ACA Cloud Security',
      body: 'Alibaba Cloud',
      year: 'March 2023',
      link: 'https://xuecdn2.aliyunedu.net/img_4e61979f83f769c1f0f6b87eb79b4919.png',
    },
    {
      name: 'CompTIA Security +',
      body: 'CompTIA',
      year: 'January 2023',
      link: 'https://www.credly.com/badges/a3728fb4-8311-4456-b7af-7e9d14d0fee1',
    },
    {
      name: 'AWS Certified Solutions Architect - Associate',
      body: 'Amazon Web Services (AWS)',
      year: 'November 2022',
      link: 'https://www.credly.com/badges/126d7b68-ba29-42a9-80f0-4a3db5782797',
    },
    {
      name: 'AWS Certified Cloud Practioner',
      body: 'Amazon Web Services (AWS)',
      year: 'October 2022',
      link: 'https://www.credly.com/badges/c1a907e9-42bc-4413-8ef8-ccedf91a2295',
    },
    {
      name: 'ACA Cloud Computing',
      body: 'Alibaba Cloud',
      year: 'July 2022',
      link: 'https://xuecdn2.aliyunedu.net/img_b4b59bdd1cd8271f8404aa3f0ce8158d.png',
    },
  ],
  educations: [
    {
      institution: 'Universitas Gadjah Mada',
      degree: 'Bachelor of Applied Science Internet Engineering Technology',
      from: '2020',
      to: '2024',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'rafif', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'nord',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/rafifdna/rafifdna.github.io"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
