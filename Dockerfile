# Use an official Node runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY mvpteam3/package*.json ./

# Install project dependencies
RUN npm install

# Copy the remaining application code to the working directory
COPY mvpteam3/. .

# Build the app for production
RUN npm run build

# Use a lightweight Node.js runtime for the production environment
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the build output from the previous stage
COPY --from=0 /app/build ./build

# Install serve to serve the app
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 80

# Start the app
CMD ["serve", "-s", "build", "-l", "80"]
