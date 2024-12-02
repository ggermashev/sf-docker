# Образ
FROM node:18

# Создание рабочей директории
RUN mkdir -p ./app

# Переход в рабочую директорию
WORKDIR ./app

# Копируем зависимости
COPY package.json package.json

#Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY ./src ./src

# Запускаем проект
CMD npm run dev