# Data Model: Course Content

This document defines the data model for the course content, which is based on a strict, hierarchical structure as clarified in the specification.

## Entity: Content Unit

All content in the course is a "Content Unit". The type of unit is determined by its position in the hierarchy.

## Hierarchy and Relationships

The content structure is a rigid hierarchy. Each level is contained within the one above it.

```
Part[]
└── Chapter[]
    └── Section[]
        ├── Example[]
        └── Checklist[]
```

### 1. Part
- **Description**: The highest level of organization, representing a major thematic division of the course. Corresponds to one of the 4 main modules.
- **Attributes**:
    - `title` (string, required): The name of the part (e.g., "The Robotic Nervous System").
    - `order` (integer, required): The sequence of the part.
- **Contains**: `Chapter[]`

### 2. Chapter
- **Description**: A major lesson or topic within a Part.
- **Attributes**:
    - `title` (string, required): The name of the chapter.
    - `order` (integer, required): The sequence of the chapter within the Part.
    - `learning_objectives` (string[], required): A list of what students will be able to do after completing the chapter.
- **Contains**: `Section[]`

### 3. Section
- **Description**: A detailed sub-topic or tutorial within a Chapter. This is the primary unit for prose content.
- **Attributes**:
    - `title` (string, required): The name of the section.
    - `order` (integer, required): The sequence of the section within the Chapter.
- **Contains**: `Example[]`, `Checklist[]`

### 4. Example
- **Description**: A specific, self-contained code example, command, or configuration snippet.
- **Attributes**:
    - `title` (string, required): A brief description of the example.
    - `code` (string, required): The code or command block.
    - `explanation` (string, required): A description of what the code does and how it works.
- **Contained By**: `Section`

### 5. Checklist
- **Description**: A list of items for students to verify their understanding or the completion of a task.
- **Attributes**:
    - `title` (string, required): The purpose of the checklist (e.g., "Module 1 Setup Verification").
    - `items` (string[], required): A list of checkable items.
- **Contained By**: `Section`

## Validation Rules

- The hierarchy is strict. No entity can exist outside of its designated parent (e.g., a Chapter cannot exist without a Part).
- All `order` attributes must be unique within their parent container.
- All `title` attributes are required and should be human-readable.
- `learning_objectives` in a Chapter must be specific and measurable.
