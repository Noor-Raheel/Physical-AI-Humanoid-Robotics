---
sidebar_position: 0
sidebar_label: "Course Stack"
---
# 00 - Course Technology Stack

This document formalizes the specific versions of the core technologies used throughout the "Physical AI & Humanoid Robotics" course. Standardizing these versions ensures reproducibility and minimizes compatibility issues for students.

## Operating System

- **Ubuntu**: 22.04 LTS (Jammy Jellyfish)

## Robotics Middleware

- **ROS 2**: Humble Hawksbill (LTS)
  - **Rationale**: Long-term support release of ROS 2, officially compatible with Ubuntu 22.04.

## Simulation Environments

- **Gazebo**: Garden (Ignition Gazebo)
  - **Rationale**: The latest major release of Gazebo's Ignition series, offering modern features and good integration with ROS 2 Humble.
- **Unity**: Unity 2022 LTS (Long Term Support)
  - **Rationale**: A stable and widely adopted LTS version providing robust simulation capabilities and extensibility. Specific package versions for ROS integration will be determined during module development.
- **NVIDIA Isaac Sim**: Isaac Sim 2023.1.1
  - **Rationale**: Latest stable release known to be compatible with ROS 2 Humble and offering advanced photorealistic simulation and synthetic data generation features.

## AI/VLA Components

- **Whisper**: OpenAI's Whisper model (via API or local deployment, to be detailed in Module 4)
  - **Rationale**: State-of-the-art speech-to-text model for accuracy.
- **Large Language Model (LLM)**: To be determined (via API or local deployment, to be detailed in Module 4)
  - **Rationale**: Needs to be suitable for task planning, balancing performance, cost, and ease of use for students. Specific choice will be based on research findings in Module 4.

## Programming Language

- **Python**: 3.10 (Default with Ubuntu 22.04 and ROS 2 Humble)
  - **Rationale**: Primary language for ROS 2 programming (`rclpy`) and AI scripts.

## Course Content Platform

- **Docusaurus**: v3+
  - **Rationale**: Used for building the course website, supporting Markdown and MDX for rich content.
