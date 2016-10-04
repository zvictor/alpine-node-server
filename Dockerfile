FROM mhart/alpine-node

WORKDIR /app

EXPOSE 9000

COPY . /app

RUN npm install

CMD npm start
