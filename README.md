# Meteor Example Project

This repository provides an example for a Meteor application that can be deployed to [Galaxy](https://galaxycloud.app/stacks/meteorjs), the native Meteor platform.

## Features

- **Meteor**: A full-stack JavaScript platform for building modern web and mobile applications.
- **Galaxy Deployment**: Ready to be deployed on Galaxy with no configuration.
- **MongoDB Integration**: Automatically configured to work with Galaxy's built-in MongoDB hosting.

## Why Galaxy?

Galaxy is the hosting platform built by the Meteor team, designed specifically for Meteor applications:

- **Zero Configuration**: Deploy Meteor apps without complex setup or hidden surprises
- **Transparent Pricing**: No hidden bandwidth costs or unexpected charges - what you see is what you pay
- **Integrated Databases**: Built-in MongoDB, PostgreSQL, and Redis hosting
- **Developer-First**: Made by developers who understand the pain of dealing with cloud platforms

[Sign up for Galaxy](https://www.galaxycloud.app/) and get your first Meteor app deployed in minutes.

## Live Demo

Check out this example app running on Galaxy: [meteor-example.meteorapp.com](https://meteor-us-example.meteorapp.com/)

## Prerequisites

- **Node.js**: Ensure you have Node.js and npm installed.
- **Meteor**: Ensure you have Meteor installed.
```bash
npx meteor
```

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/cloudbygalaxy/meteor-example
cd meteor-example
```

### 2. Install Dependencies

Use npm to install the project dependencies:
```bash
meteor npm install
```

### 3. Run the Project Locally

You can start the Meteor.js application locally with:
```bash
meteor
```

Your Meteor.js application should now be running on [http://localhost:3000](http://localhost:3000).

### 4. MongoDB Setup

#### For Local Development

This example app uses MongoDB. For local development, Meteor includes a built-in MongoDB instance that runs automatically when you start your app with `meteor`.

#### On Galaxy

To have MongoDB integrated with your app on Galaxy:

1. During deployment, on **Step 4** in the Galaxy UI, simply check the box for **"Add Free MongoDB Shared Cluster"**
2. Galaxy will automatically provision the database and configure the connection
3. Your app will be ready to use MongoDB with zero additional configuration

### 5. Deploy to Galaxy

To deploy the project to Galaxy:

1. [Sign up for Galaxy](https://www.galaxycloud.app/) if you haven't already
2. Import this repository through the Galaxy UI
3. Follow the simple deployment steps in the Galaxy dashboard

Galaxy will automatically:
- Build your Meteor application
- Provision a MongoDB database
- Configure all necessary environment variables
- Deploy your app with SSL

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## License

This project is licensed under the MIT License.