# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json to the working directory
COPY package*.json ./

# Copy bun.lockb to the working directory
COPY bun.lockb ./

# Install bun
RUN npm install -g bun

# Install the application dependencies
RUN bun install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Astro project with the Node adapter
RUN bun run build

# Make port 4321 available to the outside world
EXPOSE 4321

# Define environment variable
ENV HOST=0.0.0.0

# Run the application when the container launches
CMD ["node", "dist/server/entry.mjs" ]