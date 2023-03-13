Перед вами тестовое приложение на [Next.js](https://nextjs.org/), которое доступно по [ссылке](https://next-app-peach-zeta.vercel.app/)

## Как запустить локально

Необходимо создать .env.local файл и добавить

```
API_HOST=http://localhost:3000/api
```

Для запуска используйте команду

```
yarn dev
```

## Особенности проекта

### Проект написан на фреймворке NextJS. В проекте продемонстрированы основыне инструменты фреймворка:

-   работа с роутингом

    -   создание страниц в директории pages
    -   генерация динамических роутов
    -   использование нативного компонента Link для роутинга

-   Работа с данными
    -   SSR
    -   SSG
    -   ISR
    -   CSR
-   Работа с нативными компонентами:
    -   Image
    -   Link
    -   Head, etc

### В рамках проекта также продемонстрированы навыки тестирования

Для unit- и snapshot-тестирования используется библиотека [Jest](https://jestjs.io/), для тестирования компонентов - [Testing Library](https://testing-library.com/), а так же [Loki](https://loki.js.org/) ([Storybook](https://storybook.js.org/), как вспомогательный инструмент) - для screenshot-тестирования

### Дополнительно

В качестве API используется сервис [{JSON}Placeholder](https://jsonplaceholder.typicode.com/)

[Husky](https://www.npmjs.com/package/husky) для запуска jest при коммите
