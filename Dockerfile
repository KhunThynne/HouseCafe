FROM node:16.13
WORKDIR /usr/src/app

# Copy package.json files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files including init.sql
COPY . .

# Switch to Express directory and install its dependencies
WORKDIR /usr/src/app/Express
RUN npm install

# Expose port and start the application
EXPOSE 3000
CMD ["npm","start"]
