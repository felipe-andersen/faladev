FROM node:current-alpine
WORKDIR /usr/share/app
COPY package.json ./ 
RUN npm install
COPY . .
CMD ["npm","run","dev"]
EXPOSE 3000