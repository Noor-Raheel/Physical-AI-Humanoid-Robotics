import clsx from 'clsx';
import Heading from '@theme/Heading';
import React from 'react';

import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Spec-Driven Development',
    image: '/img/spec-driven.png', // Assuming this image exists
    description: (
      <>
        Adopt a robust methodology where specifications drive the entire development lifecycle,
        ensuring clarity, consistency, and verifiable outcomes in complex robotics projects.
      </>
    ),
  },
  {
    title: 'AI-Assisted Writing & Design',
    image: '/img/ai-writing.png', // Assuming this image exists
    description: (
      <>
        Leverage advanced AI tools to streamline documentation, code generation, and architectural
        design, enhancing productivity and quality across your projects.
      </>
    ),
  },
  {
    title: 'Architecture-First Approach',
    image: '/img/architecture.png',
    description: (
      <>
        Prioritize architectural clarity and scalable design patterns to build resilient and
        maintainable Physical AI systems from the ground up.
      </>
    ),
  },
  {
    title: 'Physical AI & Robotics Content',
    image: '/img/hero-robot.png', // Using hero-robot.png as it seems more relevant to physical AI
    description: (
      <>
        Dive deep into the core concepts of Physical AI, humanoid robotics, and advanced perception
        systems, blending theoretical knowledge with practical implementations.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className={clsx('text--center', styles.sectionTitle)}>
          Key Highlights of This Book
        </Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}