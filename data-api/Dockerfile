FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# The port must match the one in the corresponding index.js file
# Manually change this for each API: 5001, 5002, 5003
EXPOSE 5001 
CMD ["node", "index.js"]