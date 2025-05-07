# Use the official Node.js image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose a port if needed (not required for console apps)
# EXPOSE 3000

# Run the app
CMD ["node", "index.js"]
