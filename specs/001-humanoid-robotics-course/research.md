# Research Plan: Physical AI & Humanoid Robotics Course

This document outlines the key research questions and decisions to be addressed during the development of the course content. The approach is "research-concurrent," meaning these questions will be answered as each module is being written to ensure the information is current and accurate.

## Global Decisions

### 1. Technology Versioning
- **Decision**: Standardize on specific versions of all core technologies.
- **Rationale**: As clarified in the spec, this is critical for ensuring reproducibility and reducing student setup issues.
- **Research Tasks**:
    - For Ubuntu 22.04, identify the most stable, co-compatible versions of:
        - **ROS 2**: (Hypothesis: Humble Hawksbill)
        - **Gazebo**: (Hypothesis: Garden or Fortress)
        - **NVIDIA Isaac Sim**: (Check compatibility with the chosen ROS 2 version)
        - **Unity**: (Identify a suitable LTS version with good ROS 2 integration)
    - Document the chosen versions as the official stack for the course.

### 2. Primary Simulation Environment
- **Decision**: While supporting both local and cloud, a primary simulator must be chosen for the main instruction path to maintain a clear narrative.
- **Rationale**: Providing parallel instructions for two different simulators for every example would be confusing and double the maintenance effort. One will be primary, the other a documented alternative.
- **Research Task**:
    - Compare **Gazebo vs. Unity** for humanoid robotics simulation with ROS 2.
    - Evaluate based on: ease of use for beginners, performance, quality of ROS 2 integration, and documentation.
    - Recommend one as the primary simulator for the course. Isaac Sim will be treated as a separate, advanced environment for its specific module.

## Module-Specific Research

### Module 1: The Robotic Nervous System (ROS 2)
- **Question**: What is a suitable, open-source humanoid URDF model for this course?
- **Research Task**:
    - Survey open-source URDF models (e.g., from Boston Dynamics, PAL Robotics, or generic models).
    - Select a model that is well-documented, has a permissive license, and is complex enough for interesting simulation but not overly difficult for students to understand.
- **Question**: What are the best practices for structuring `rclpy` nodes for a course?
- **Research Task**:
    - Review official ROS 2 documentation and community style guides.
    - Establish a simple, consistent structure for all Python examples in the course, emphasizing clarity and reusability.

### Module 2: The Digital Twin (Gazebo & Unity)
- **Question**: How are different sensors (LiDAR, depth cameras, IMUs) best simulated in the chosen primary environment?
- **Research Task**:
    - Investigate the available plugins and configurations for simulating common sensors.
    - Document a step-by-step process for adding and configuring sensors on the chosen humanoid URDF model.

### Module 3: The AI-Robot Brain (NVIDIA Isaac)
- **Question**: What is the most effective workflow for generating synthetic data for a simple perception task?
- **Research Task**:
    - Define a simple task (e.g., "find the red cube").
    - Document the workflow in Isaac Sim for randomizing object positions, lighting, and camera angles to generate a labeled dataset.
- **Question**: What are the specific steps to make the Isaac ROS Nav2 stack work with a bipedal robot?
- **Research Task**:
    - Investigate the specific configurations and parameters needed for bipedal locomotion planning in Nav2, as opposed to wheeled robot navigation.
    - Create a working example of a humanoid navigating to a point in an Isaac Sim environment.

### Module 4: Vision-Language-Action (VLA)
- **Question**: What is the best approach for integrating a Large Language Model (LLM) for task planning?
- **Research Task**:
    - Compare using a local open-source LLM (e.g., via Ollama) vs. a cloud-based API (e.g., OpenAI, Gemini).
    - Consider ease of setup for students, cost, and performance.
    - Recommend a primary approach and document the full architecture for the VLA pipeline, from Whisper transcription to the final robot action commands.
- **Question**: How will citations be managed?
- **Research Task**:
    - Per the constitution, APA citation style is required.
    - **Decision**: Use a simple, manual citation format in Markdown footnotes for all referenced papers, documentation, and software.
