# Use the official Node.js 18 image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
ARG NODE_ENV
RUN if ["$NODE_ENV" = "production"]; \
    then npm install --only=production; \
    else npm install;\
    fi

# Copy the rest of the app's source code to the working directory
COPY . .

# The Port
EXPOSE 4000

# Set the command to start the app
CMD ["npm", "run", "dev"]
