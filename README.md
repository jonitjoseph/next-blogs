# Next.js Blog App

This is a blog application built using Next.js, utilizing the new 'app' directory structure and React 18 server components. It displays a list of blog posts fetched from the backend API. The app allows users to view, create, edit, and delete blog posts. Users can log in to access these features.

## Features

- User Authentication: Users can sign up and log in to the application.
- View a list of blog posts.
- Create new blog posts.
- Edit existing blog posts.
- Delete blog posts.

## Technologies Used

- Next.js
- NextAuth.js
- MongoDB
- Tailwind CSS

## Getting Started

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Run the development server using `npm run dev`.
4. Open your browser and navigate to `http://localhost:3000` to access the application.

## Usage

- Upon accessing the application, users can sign up or log in to access additional features.
- After logging in, users can view a list of blog posts.
- Click on a blog post to view its details.
- Users can create new posts, edit existing ones, or delete posts using the provided options.
- The application communicates with the backend API located in the 'api' directory.

## Deployment

The application has been deployed to an AWS EC2 instance. You can access the deployed application using the following URL: `http://ec2-13-232-55-0.ap-south-1.compute.amazonaws.com:3000`.
