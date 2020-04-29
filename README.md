# Monter Reader

This is the monsterreader.io a tool to help reading translations thta uses React as a framework.

## Table of Contents

- [Initial Setup](#🚀-initial-setup)
- [Available Scripts](#📃-available-scripts)
- [Icons](#🧐-update-the-icon-fonts)

## 🚀 Initial Setup

1.  **Install**

    ```sh
    npm i
    ```

2.  **Start developing.**

    ```sh
    npm run develop
    ```

## 📃 Available Scripts

In the project directory, you can run the following scripts.

| Command         | Description                                                            |
| :-------------- | :--------------------------------------------------------------------- |
| `start`         | Starts the development server and the planner app                      |
| `build`         | Create a production build                                              |
| `test`          | Run tests                                                              |
| `test:coverage` | Run tests coverage                                                     |
| `cy:dev`        | Run E2E opening select test screen                                     |
| `cy:ci`         | Run all E2E tests without interface                                    |
| `cz`            | Create standardized commits                                            |
| `codegen:watch` | Generate graphql hooks/types by reading .qgl file inside /src/services |

<br/>

## 🧐 Update the icon fonts

The font set was created using [Fontello](http://fontello.com/) website, if you need to include any icon you can upload [this file](./src/assets/defaultTheme.svg) and customize it.

The font-face it's included [here](./src/global.styles.ts).

1. Update the new downloaded file inside `./src/assets/fontello.{.svg, .woff2}`
2. Include your custom icon content code inside the [Icon component style](./src/components/Icon/Icon.styles.tsx)
   ```css
   &.icon-arrow-right:before {
     content: "\u2192";
   }
   ```
3. Include the new icon name inside the [interface](./src/components/Icon/Icon.tsx)
