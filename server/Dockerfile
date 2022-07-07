# основать свой образ на этом
FROM node:16-alpine3.16

# добавить env переменные
ENV APP_NAME=mongo_server

# запустить второстепенную команду
# создания папки /app
RUN mkdir /app

# копировать файлы при создании образа внутрь образа
COPY ./ /app

# запуск команд относительно пути /app
WORKDIR /app

# открыть порт
EXPOSE 5000

RUN ["npm", "install"]

# команда запуска приложения
CMD ["npm", "run", "start"]
