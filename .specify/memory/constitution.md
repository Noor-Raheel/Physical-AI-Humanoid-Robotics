<!--
Sync Impact Report:
- Version change: 0.0.0 -> 1.0.0
- List of modified principles:
  - PRINCIPLE_1_NAME -> Accuracy
  - PRINCIPLE_2_NAME -> Clarity
  - PRINCIPLE_3_NAME -> Spec-Driven Development
  - PRINCIPLE_4_NAME -> Reproducibility
  - PRINCIPLE_5_NAME -> Integrity
- Added sections:
  - Standards
  - Constraints
  - Success Criteria
- Removed sections: None
- Templates requiring updates:
  - ✅ .specify/templates/plan-template.md
  - ✅ .specify/templates/spec-template.md
  - ✅ .specify/templates/tasks-template.md
- Follow-up TODOs: None
-->
# AI/Spec-Driven Book Creation using Docusaurus + GitHub Pages + Spec-Kit Plus + Claude Code Constitution

## Core Principles

### I. Accuracy
Content MUST be based on official documentation and validated technical facts. All claims, instructions, and examples are to be rigorously checked against primary sources to ensure they are correct and up-to-date. Rationale: Trust is our most important asset; inaccurate information undermines the project's value and credibility.

### II. Clarity
Writing MUST be clear, concise, and beginner-friendly, targeting a Flesch-Kincaid grade level of 8–10. Concepts should be explained simply, avoiding jargon where possible or defining it clearly when necessary. Rationale: The goal is to make complex topics accessible to a broad audience, not to create an academic paper.

### III. Spec-Driven Development
All content and code MUST be developed following a strict Spec-Driven Development (SDD) process. A specification (`spec.md`) must be defined and approved before any implementation begins. Rationale: This ensures work is well-defined, aligned with project goals, and testable from the start.

### IV. Reproducibility
All instructions, examples, and code snippets MUST be fully reproducible on Windows, macOS, and Linux. Environment setup and dependencies must be clearly documented. Rationale: Users must be able to follow along and achieve the same results, regardless of their platform.

### V. Integrity
All work MUST be original or properly attributed. Plagiarism in any form is strictly forbidden. Rationale: Upholding academic and professional integrity is non-negotiable.

## Standards

- **Structure**: The book will follow a strict hierarchy: `Part → Chapter → Section → Example → Checklist`.
- **Code Quality**: All code provided in examples MUST run correctly without errors.
- **Compatibility**: All Markdown MUST be compatible with Docusaurus v3+.
- **Diagrams**: Diagrams are to be kept simple and created using Mermaid or ASCII art for maximum compatibility and accessibility.
- **Terminology**: A consistent set of terminology MUST be used throughout the book.

## Constraints

- **Platform**: The entire project MUST be built using Docusaurus.
- **Deployment**: The final output MUST be deployable to GitHub Pages.
- **Exportability**: Individual chapters MUST be easily exportable as self-contained Markdown files.
- **Brevity**: Writing should remain concise and to the point to respect the reader's time.

## Success Criteria

- **Build Health**: A `docusaurus build` command MUST complete without any errors.
- **Deployment Health**: The project MUST successfully deploy to GitHub Pages.
- **Example Validity**: All examples MUST be reproducible by a user following the provided steps.
- **Compliance**: All chapters MUST be clear, spec-compliant, and adhere to this constitution.
- **Integrity**: There MUST be no broken links in the final deployed site.

## Governance

This constitution is the single source of truth for all project standards and principles. All contributions and reviews MUST verify compliance. Any proposed amendments to this constitution require a documented proposal, review, and an approved migration plan to update existing content.

**Version**: 1.0.0 | **Ratified**: 2025-12-07 | **Last Amended**: 2025-12-07