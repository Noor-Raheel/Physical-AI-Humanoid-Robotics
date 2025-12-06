import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  courseSidebar: [
    {
      type: 'category',
      label: 'Part 1: The Robotic Nervous System (ROS 2)',
      items: [
        'part-1-ros2/01-introduction',
        'part-1-ros2/02-rclpy-programming',
        'part-1-ros2/03-urdf-definition',
      ],
    },
    {
      type: 'category',
      label: 'Part 2: The Digital Twin (Gazebo & Unity)',
      items: [
        'part-2-digital-twin/01-physics-fundamentals',
        'part-2-digital-twin/02-simulating-sensors',
      ],
    },
    {
      type: 'category',
      label: 'Part 3: The AI-Robot Brain (NVIDIA Isaac)',
      items: [
        'part-3-ai-brain/01-intro-isaac-sim',
        'part-3-ai-brain/02-synthetic-data',
        'part-3-ai-brain/03-isaac-ros-nav',
      ],
    },
    {
      type: 'category',
      label: 'Part 4: Vision-Language-Action (VLA)',
      items: [
        'part-4-vla/01-voice-to-text',
        'part-4-vla/02-llm-planning',
        'part-4-vla/03-capstone-integration',
      ],
    },
  ],
};

export default sidebars;
