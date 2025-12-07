import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';

import styles from './index.module.css';

// Book Metadata
const BOOK_TITLE = 'Architecting Physical AI: A Spec-Driven Approach to Humanoid Robotics';
const BOOK_SUBTITLE = 'From Code to Cognition: Bridging the Gap in Next-Gen AI & Robotics';
const HERO_HEADING = 'Build the Future: Physical AI & Humanoid Robotics';
const HERO_DESCRIPTION = 'Unlock the power of Spec-Driven Development to design, simulate, and deploy intelligent humanoid robots. This book guides you through ROS2, Digital Twin simulation, AI brains, and Large Vision-Language Models (LVLMs) for real-world applications.';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {BOOK_TITLE}
        </Heading>
        <p className="hero__subtitle">{BOOK_SUBTITLE}</p>
        <Heading as="h2" className={clsx('hero__heading', styles.heroHeading)}>
          {HERO_HEADING}
        </Heading>
        <p className="hero__description">{HERO_DESCRIPTION}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/course-stack">
            🚀 Start Reading
          </Link>
          <Link
            className="button button--info button--lg"
            to="/docs/course-stack"> {/* Linking to course stack for architecture overview */}
            🏗️ View Architecture
          </Link>
          {/* Placeholder for PDF download */}
          <Link
            className="button button--success button--lg"
            to="/#"
            onClick={() => alert('PDF Download Coming Soon!')}>
            ⬇️ Download PDF
          </Link>
        </div>
      </div>
    </header>
  );
}

function BookOverview() {
  return (
    <section className={styles.bookOverview}>
      <div className="container text--center">
        <Heading as="h2" className={styles.sectionTitle}>
          What You'll Discover
        </Heading>
        <p className="text--justify">
          This comprehensive guide delves into the intricate world of Physical AI and Humanoid Robotics.
          From foundational concepts in ROS2 and digital twin simulations to advanced topics in AI-driven
          cognition and Large Vision-Language Models (LVLMs), you'll gain practical insights and
          hands-on experience. Learn how to apply Spec-Driven Development principles to create robust,
          scalable, and intelligent robotic systems capable of navigating and interacting with complex environments.
          We cover everything from sensor simulation to advanced planning and execution using cutting-edge AI.
        </p>
      </div>
    </section>
  );
}

function BookStructure() {
  return (
    <section className={styles.bookStructure}>
      <div className="container">
        <Heading as="h2" className={clsx('text--center', styles.sectionTitle)}>
          Book Structure: A Journey Through Physical AI
        </Heading>
        <div className="row">
          <div className="col col--6">
            <h3 className={styles.partTitle}>Part 1: ROS2 Fundamentals for Robotics</h3>
            <ul>
              <li><Link to="/docs/part-1-ros2/01-introduction">Introduction to ROS2 & Robotics</Link></li>
              <li><Link to="/docs/part-1-ros2/02-rclpy-programming">Programming with RCLPY</Link></li>
              <li><Link to="/docs/part-1-ros2/03-urdf-definition">URDF for Robot Description</Link></li>
            </ul>
          </div>
          <div className="col col--6">
            <h3 className={styles.partTitle}>Part 2: Digital Twin & Simulation</h3>
            <ul>
              <li><Link to="/docs/part-2-digital-twin/01-physics-fundamentals">Physics Fundamentals</Link></li>
              <li><Link to="/docs/part-2-digital-twin/02-simulating-sensors">Simulating Advanced Sensors</Link></li>
            </ul>
          </div>
          <div className="col col--6">
            <h3 className={styles.partTitle}>Part 3: The AI Brain - Cognition & Perception</h3>
            <ul>
              <li><Link to="/docs/part-3-ai-brain/01-intro-isaac-sim">Introduction to NVIDIA Isaac Sim</Link></li>
              <li><Link to="/docs/part-3-ai-brain/02-synthetic-data">Synthetic Data Generation</Link></li>
              <li><Link to="/docs/part-3-ai-brain/03-isaac-ros-nav">Isaac ROS Navigation</Link></li>
            </ul>
          </div>
          <div className="col col--6">
            <h3 className={styles.partTitle}>Part 4: Vision-Language Models (LVLM) for Action</h3>
            <ul>
              <li><Link to="/docs/part-4-vla/01-voice-to-text">Voice-to-Text Integration</Link></li>
              <li><Link to="/docs/part-4-vla/02-llm-planning">LLM-Driven Planning & Reasoning</Link></li>
              <li><Link to="/docs/part-4-vla/03-capstone-integration">Capstone: Full System Integration</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <BookOverview />
        <BookStructure />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}