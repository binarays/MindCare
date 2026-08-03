<div align="center">

# MindCare

**A supportive digital platform for mental health awareness and well-being.**

MindCare helps users manage stress, build resilience, foster community, and achieve personal balance through simple, accessible tools.

[![Live Demo](https://img.shields.io/badge/Live-Demo-2ea44f?style=for-the-badge)](https://mindcare-ac-lk.web.app/)


</div>




## Table of Contents

- [Overview](#overview)
- [Walkthrough](#walkthrough)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Architecture](#Architecture)
- [License](#license)
- [Contributors](#contributors)




## Overview

MindCare is a responsive, single-page web application that connects users with mental health resources, appointment booking, and support services in a clean, calming interface.



## Walkthrough

<div align="center">

<img src="Readme Assets/Demo.gif" alt="MindCare Full Walkthrough" width="700"/>

<br/><br/>

<img src="Readme Assets/Login .png" alt="Login" width="270"/>
<img src="Readme Assets/Home.png" alt="Homepage" width="270"/>
<img src="Readme Assets/Services.png" alt="Services" width="270"/>

<br/><br/>

**[View the Live App](https://mindcare-ac-lk.web.app/)**

</div>




## Key Features

| Feature | Description |
|---|---|
| **Responsive Design** | Fully optimized for desktop, tablet, and mobile browsers |
| **User Authentication** | Secure sign-up, login, and session management |
| **Real-time Updates** | Dynamic data synchronization without page refreshes |
| **Interactive Dashboard** | Clean UI with rich data visualization and actionable insights |
| **Optimized Performance** | Fast load times and efficient state management |




## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Bootstrap |
| Backend & Database | Firebase |
| Authentication | Firebase Authentication |
| Hosting | Firebase Hosting |




## Project Structure

```
Mindcare/
├── README.md
├── index.html                   # Single-page site (landing, appointment form, contact form)
└── assets/
    ├── readtorun.txt
    ├── css/
    │   └── main.css
    ├── js/
    │   ├── main.js               # Bootstrap template UI logic (nav, animations, etc.)
    │   ├── appointmen.js         # Appointment form → EmailJS send
    │   └── contactus.js          # Contact/feedback form → EmailJS send
    ├── img/
    │   ├── about.png, logo.png, favicon.png, apple-touch-icon.png
    │   ├── doctors/               # doctors-1.jpg … doctors-4.png
    │   └── testimonials/          # testimonials-1.png … testimonials-5.jpg
    ├── vid/
    │   └── homeup.mp4             # hero background video
    └── vendor/                    # third-party front-end libraries
        ├── aos/                   # scroll animations
        ├── bootstrap/             # Bootstrap 5 CSS + JS
        ├── bootstrap-icons/
        └── fontawesome-free/
```


## Architecture




## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.




## Contributors








