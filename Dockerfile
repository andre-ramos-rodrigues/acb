# Use the official Node.js image as the base image
FROM node:18.17.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json .

RUN ls -la

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

RUN ls -la

# Expose port 3000
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "dev"]