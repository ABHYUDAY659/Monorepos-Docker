# Use Node.js base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY apps/ws/package.json apps/ws/package-lock.json* ./
RUN npm install

# Install global ts-node & typescript (optional, or add to devDependencies)
RUN npm install -D ts-node typescript

# Copy full workspace code
COPY . .

# Generate Prisma client
RUN cd packages/db && npx prisma generate

# Set the working directory to the ws app
WORKDIR /app/apps/ws

# Start the WebSocket server
CMD ["npm", "start"]
