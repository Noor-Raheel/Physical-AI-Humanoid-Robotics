# Quickstart: Contributing to the Course

This guide provides the basic steps to set up a local development environment for contributing to the "Physical AI & Humanoid Robotics" course content.

## Prerequisites

- **Git**: For version control.
- **Node.js**: Version 18.x or later.
- **Yarn**: As the package manager for Docusaurus.

## 1. Clone the Repository

First, clone the project repository to your local machine:

```bash
git clone <repository-url>
cd <repository-name>
```

## 2. Install Docusaurus Dependencies

The course content is built using Docusaurus. Navigate to the directory where the Docusaurus project is located (TBD, assuming it's at the root for now) and install the necessary dependencies.

```bash
# Navigate to the docusaurus project directory (if not at root)
# cd docs_site 

yarn install
```

## 3. Run the Docusaurus Development Server

To preview the content as you write it, run the Docusaurus development server:

```bash
yarn start
```

This will launch a local development server, typically at `http://localhost:3000`. The site will automatically reload as you make changes to the Markdown or MDX files.

## 4. Content Contribution Workflow

1.  **Create a branch**: Create a new feature branch for the content you are adding.
2.  **Add content**: Following the `Part → Chapter → Section` hierarchy, create or edit the `.mdx` files for the content.
3.  **Adhere to Standards**: Ensure all content adheres to the principles and standards defined in the project's **Constitution**.
4.  **Preview changes**: Use the local development server to ensure your content renders correctly and all links work.
5.  **Submit a Pull Request**: Once your content is ready, submit a pull request for review.

## Simulation Environment Setup

For setting up the robotics simulation environments (ROS 2, Gazebo, Isaac Sim), please refer to the detailed setup instructions that will be created as part of the course content itself. This quickstart is only for running the Docusaurus documentation site.
