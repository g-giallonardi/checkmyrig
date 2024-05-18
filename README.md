## Disclaimer

Project in 'Work in progress' status

# Check My Rig

Welcome to the Check My Rig project! This application is designed to bring 
together enthusiasts of remote control (RC) cars, allowing them to share and 
explore various RC car projects, modifications, and customizations.

## Features

- **Project Gallery:** A comprehensive gallery where users can showcase their RC car projects.
- **Project Descriptions:** Detailed descriptions of modifications including electronic components, chassis, suspension, bodywork, and more.
- **Community Sharing:** A platform aimed at sharing knowledge and fostering a community of like-minded RC car enthusiasts.

## Technology Stack

### Frontend

- **ReactJS:** A powerful and efficient JavaScript library for building user interfaces.
- **Yup:** Used for form validation to ensure data integrity and user input correctness.
- **React Router DOM:** Enables dynamic routing for a seamless single-page application experience.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom user interfaces.

### Backend

- **Express.JS:** A minimal and flexible Node.js web application framework providing a robust set of features for building APIs and web applications.

### Contact

If you have any questions or suggestions, please feel free to reach out.

## Notes:

### Database

Use a Atlas Mongo DB connector

### Authentication

Use JWT token (in cookies) through Bearer token

## ToDo

### Homepage
- [ ] Complex search in rigs/parts/brand/models

### Security
- [x] Authentication on front end with user sharing over application
- [ ] Authentication on back for security

### Rig form
- [ ] Disable model selection if brand not selected (do same for part)
- [ ] Open popup for update model spec if new model