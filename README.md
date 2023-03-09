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

## Что используется

В качестве API используется сервис [{JSON}Placeholder](https://jsonplaceholder.typicode.com/)

Для тестирования используются библиотеки [Jest](https://jestjs.io/) и [Testing Library](https://testing-library.com/)

Для коммит проверки добавлен [Husky](https://www.npmjs.com/package/husky)

Для screenshot тестирования используются [Storybook](https://storybook.js.org/) и [Loki](https://loki.js.org/)
