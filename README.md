# Ricky and Morty Wiki

Is a project that brings you rick and morty characters information includes location, episodes.

See demo here [https://rick-and-morty-wiki-ebon.vercel.app/).

## 🔗 Reference

All web services provided by [http://rickandmortyapi.com/](http://rickandmortyapi.com/) and the base url configured in `.env` file at root directory

## 💻 Getting started in Developer mode

First, install the dependencies:

```bash
npm run install
# or
yarn install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

## 🌐 Launch the Project locally

For building the project and start it on your local machine use:

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## 🚀 Launch the Project

Use `Dockerfile` at the root directory

## 🧰 Libraries and tools

- ✅ Programming Language: **JavaScript**
- ✅ Typecheck: **Typescripy**
- ✅ Dom Manipulation: **React**
- ✅ SSR: **Next.js**
- ✅ Network Layer: **[React Query](https://react-query.tanstack.com/), Axios**
- ✅ UI Library: **[UI Kit](https://getuikit.com/)**
- ✅ Styling: **SCSS**
- ✅ Code Quality: **ESLint, Prettier, Husky**

## Pages

Each page wrapped in `MainLayout` container component.

#### 🏠 Home Page

List of characters with summary information renderd with [`CharacterCard`](https://github.com/milixov/ricky-morty-wiki#charactercard) components wrapped by grid layout. The list also fetch more data by scrolling to the end (Infinite scroll list)

#### 🤡 Character Profile

The character information in detail shows [`LocationCard`](https://github.com/milixov/ricky-morty-wiki#locationcard) component for rendering location and origin of the character in the left side of the page. Episode list that chracter palyed role rendered with [`EpisodeCard`](https://github.com/milixov/ricky-morty-wiki#episodecard) compoenent with accordion behaviour. After clicking on `More Info` button in home page you can reach this route `/character?id={chracterId}`

## Types and Interfaces

#### Global

- Global Types are located in `global.d.ts` at the root directory

#### Specific

Specific interfaces related to fetched data located at `src/lib/interfaces` includes:

- [ICharacter](https://github.com/milixov/ricky-morty-wiki/blob/main/src/lib/interfaces/ICharacter.ts)
- [IEpisodes](https://github.com/milixov/ricky-morty-wiki/blob/main/src/lib/interfaces/IEpisode.ts)
- [ILocation](https://github.com/milixov/ricky-morty-wiki/blob/main/src/lib/interfaces/ILocation.ts)

## Components

#### 📝 CharacterCard

| Title          | Type                                                                                                 | Default | Description                     |
| -------------- | ---------------------------------------------------------------------------------------------------- | ------- | ------------------------------- |
| data           | [ICharacter](https://github.com/milixov/ricky-morty-wiki/blob/main/src/lib/interfaces/ICharacter.ts) |         |                                 |
| skeleton       | boolean                                                                                              | false   | For showing skeleton on loading |
| showMoreButton | boolean                                                                                              | true    | For showing `More Info` button  |

#### 🍿 EpisodeCard

| Title    | Type                                                                                              | Default | Description                     |
| -------- | ------------------------------------------------------------------------------------------------- | ------- | ------------------------------- |
| data     | [IEpisodes](https://github.com/milixov/ricky-morty-wiki/blob/main/src/lib/interfaces/IEpisode.ts) |         |                                 |
| skeleton | boolean                                                                                           | false   | For showing skeleton on loading |

#### 📍 LocationCard

| Title    | Type                                                                                               | Default | Description                     |
| -------- | -------------------------------------------------------------------------------------------------- | ------- | ------------------------------- |
| data     | [ILocation](https://github.com/milixov/ricky-morty-wiki/blob/main/src/lib/interfaces/ILocation.ts) |         |                                 |
| skeleton | boolean                                                                                            | false   | For showing skeleton on loading |
| title    | string                                                                                             |         | title of the component          |



## API Reference

#### Get all charachters

You can access the list of characters by using the `/character` endpoint.

```http
  GET https://rickandmortyapi.com/api/character
```

You should get the response like this.

‍‍‍

```bash
   {
    "info": {
      "count": 671,
      "pages": 34,
      "next": "https://rickandmortyapi.com/api/character/?page=2",
      "prev": null
    },
    "results": [
      {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
          "name": "Earth",
          "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
          "name": "Earth",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
          // ...
        ],
        "url": "https://rickandmortyapi.com/api/character/1",
        "created": "2017-11-04T18:48:46.250Z"
      },
      // ...
    ]
  }
```

### Get a single character

You can get a single character by adding the id as a parameter: `/character/2`

You should get the response like this.

‍‍‍

```bash
   {
    "id": 2,
    "name": "Morty Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
      "name": "Earth",
      "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
      "name": "Earth",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      // ...
    ],
    "url": "https://rickandmortyapi.com/api/character/2",
    "created": "2017-11-04T18:50:21.651Z"
  }
```




## 🪝 Hooks

#### General

- Event listener hook for imlementing event and managing the mount/unmount outside the components. This helps for detecting when the scroll ends. Located in `src/hooks` directory

#### Web Services

- React-query queries for fetch API. Located in `src/services/index.ts` directory


## RoadAhead

If it was a real task and project, I could create CI/CD and some more tests like cypress for that.
