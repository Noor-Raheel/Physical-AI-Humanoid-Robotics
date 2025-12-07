import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Humonoid_ai',
  tagline: 'Architecting Physical AI: A Spec-Driven Approach to Humanoid Robotics',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'courseSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/course-stack',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    customFields: {
      homepage: {
        hero: {
          title: 'Humanoid Robotics Course',
          tagline: 'An AI/Spec-Driven Approach to Building Advanced Robotic Systems',
          description: 'Build the next generation of intelligent robots with a comprehensive curriculum covering ROS 2, physics simulation, AI integration, and Vision-Language-Action systems.',
          buttons: [
            { text: 'Start Reading', link: '/docs/00-course-stack', type: 'primary' },
            { text: 'View Architecture', link: '/specs/001-humanoid-robotics-course/plan', type: 'secondary' },
            { text: 'Download PDF', link: '/book.pdf', type: 'secondary' },
          ],
        },
        overview: {
          title: "What You'll Learn",
          description: "This course provides a deep dive into the theoretical foundations and practical applications of modern robotics, focusing on humanoid systems. From setting up robust ROS 2 communication to advanced AI planning and realistic physics simulations, you'll gain the skills to design, program, and deploy intelligent robots.",
        },
        parts: [
          {
            title: 'Part 1: The Robotic Nervous System (ROS 2)',
            chapters: [
              { title: 'Introduction to ROS 2', link: '/docs/part-1-ros2/01-introduction' },
              { title: 'Programming with rclpy', link: '/docs/part-1-ros2/02-rclpy-programming' },
              { title: 'Defining Your Robot with URDF', link: '/docs/part-1-ros2/03-urdf-definition' },
            ],
          },
          {
            title: 'Part 2: The Digital Twin (Gazebo & Unity)',
            chapters: [
              { title: 'Physics Simulation Fundamentals', link: '/docs/part-2-digital-twin/01-physics-fundamentals' },
              { title: 'Simulating Sensors', link: '/docs/part-2-digital-twin/02-simulating-sensors' },
            ],
          },
          {
            title: 'Part 3: The AI-Robot Brain (NVIDIA Isaac)',
            chapters: [
              { title: 'Introduction to Isaac Sim', link: '/docs/part-3-ai-brain/01-intro-isaac-sim' },
              { title: 'Synthetic Data Generation', link: '/docs/part-3-ai-brain/02-synthetic-data' },
              { title: 'Navigation with Isaac ROS', link: '/docs/part-3-ai-brain/03-isaac-ros-nav' },
            ],
          },
          {
            title: 'Part 4: Vision-Language-Action (VLA)',
            chapters: [
              { title: 'Voice-to-Text with Whisper', link: '/docs/part-4-vla/01-voice-to-text' },
              { title: 'LLM-based Task Planning', link: '/docs/part-4-vla/02-llm-planning' },
              { title: 'Capstone Integration', link: '/docs/part-4-vla/03-capstone-integration' },
            ],
          },
        ],
        features: {
          title: 'Key Features of This Book',
          items: [
            {
              title: 'Spec-Driven Development',
              description: 'Learn to build complex systems with clarity and precision through a specification-first approach.',
              image: '/img/spec-driven.png',
            },
            {
              title: 'AI-Assisted Writing',
              description: 'Explore how AI tools can enhance the development and documentation process, making content creation more efficient.',
              image: '/img/ai-writing.png',
            },
            {
              title: 'Architecture-First Approach',
              description: 'Understand the importance of robust architectural design in building scalable and maintainable robotic systems.',
              image: '/img/architecture.png',
            },
            {
              title: 'Physical AI + Robotics',
              description: 'Dive deep into the convergence of AI and physical robotics, focusing on practical applications for humanoid platforms.',
              image: '/img/physical-ai.png',
            },
          ],
        },
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
