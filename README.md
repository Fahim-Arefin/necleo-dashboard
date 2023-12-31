# Project Management App

A simple React-based project management application that allows users to create, update, and delete projects. The application features modals for project details, creation, and updates.

## Deployment

This project is deployed and can be accessed [here](https://necleo-dashboard.netlify.app/).

## Features

### 1. Project Listing

- Display a grid of projects with relevant information.
- Each project card shows the project title, category, and a brief description.

### 2. Create New Project

- Clicking on "Create a new project" opens a modal to add a new project.
- Fill in the title, category, description, start date, and end date for the new project.
- Random images from Lorem Picsum API are used as default project images.

### 3. View Project Details

- Clicking on a project card opens a modal displaying detailed information about the selected project.
- The details include the project title, description, and options to edit or delete the project.

### 4. Update Project

- Within the project details modal, users can choose to update the project.
- Clicking the "Edit" button opens another modal with pre-filled form fields for easy editing.
- After making changes, users can submit the form to update the project.

### 5. Delete Project

- Users can delete a project by clicking the "Delete" button within the project details modal.
- A confirmation dialog using SweetAlert prompts the user to confirm the deletion.

### 6. Date Picker

- The application uses the `react-datepicker` library to facilitate date selection.
- Start and end dates for projects are chosen using interactive date pickers.

### 7. Responsive Design

- The application is designed to be responsive, providing a seamless experience across different screen sizes.

## Usage

1. Clone the branch of the repository:

   ```bash
   git clone -b submission https://github.com/Fahim-Arefin/necleo-dashboard.git
   ```

2. Go to project file

   ```
   cd necleo-dashboard
   ```

3. install dependancies

   ```
   npm install
   ```
