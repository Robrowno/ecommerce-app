# Use Node.js image to build React app
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy dependencies
COPY package.json ./
RUN npm install

# Copy all files and build the app
COPY . .
RUN npm run build

# Use Nginx to serve the app
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
