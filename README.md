# persons generator

Instructions to run the app:

From node-js folder:
- npm install

For nginx: from my-react-app 
- npm run build 
- npm start
- npm install

From parent app:
- docker build -t my-react-app:latest ./my-react-app
- docker build -t node-js:latest ./node-js
- docker-compose up