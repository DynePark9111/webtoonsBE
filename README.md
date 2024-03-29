# webtoons

## About

- webtoonsCombinded BE server

## Stack

- Nodejs (BE)

## Get started

1. git clone
2. npm install
3. create .env file
4. get MONGODB_URI [MongoDB](https://cloud.mongodb.com/)
5. get keys from reCaptcha [reCaptcha v3](https://www.google.com/recaptcha/about/)
6. npm run dev

### .env

```
.env.local
PORT=
ORIGIN=
JWT_TOKEN_SECRET=
MONGODB_URI=
NEXT_PUBLIC_RECAPTCHA_SITE=
RECAPTCHA_SECRET=
```

## API

| Method | URL                   | request body(required\*)                         | Description                      |
| ------ | --------------------- | ------------------------------------------------ | -------------------------------- |
| GET    | /                     | -                                                | displays port                    |
| POST   | /auth/signup          | username\*, email*, password*, confirmPassword\* | create user                      |
| POST   | /auth/login           | email*, password*                                | login                            |
| GET    | /auth/logout          | -                                                | logout                           |
| GET    | /auth/check           | jwt\*                                            | check user using jwt             |
| GET    | /new                  | platform                                         | get new webtoons (new)           |
| GET    | /new/bookmark         | jwt\*                                            | get new webtoons (bookmarked)    |
| GET    | /new/watchlater       | jwt\*                                            | get new webtoons (watchlater)    |
| GET    | /new/liked            | jwt\*                                            | get new webtoons (liked)         |
| GET    | /webtoon              | category, paltform, genre                        | get webtoons (filtered)          |
| POST   | /webtoon              | -                                                | post webtoon (for admin)         |
| GET    | /webtoon/updated      | -                                                | get newest updated webtoon       |
| GET    | /webtoon/recommended  | genre                                            | get recommended webtoons         |
| GET    | /webtoon/:id          | -                                                | get webtoon detail by id         |
| GET    | /webtoon/search/:name | -                                                | search webtoon by title, author  |
| GET    | /comment/:id          | -                                                | get comments by id               |
| DELETE | /comment/:id          | jwt\*                                            | delete comment by id             |
| POST   | /comment              | jwt\*, comment\*, parentId                       | post comment                     |
| PATCH  | /comment/like         | jwt\*,                                           | like comment                     |
| GET    | /comment/nested/:id   | parentId\*                                       | get nested comments by id        |
| GET    | /article              | -                                                | get articles(=posts)             |
| POST   | /article              | jwt\*, title\* content\*                         | create article                   |
| GET    | /article/:id          | -                                                | get articles by id               |
| DELETE | /article/:id          | jwt\*                                            | delete article by id             |
| PATCH  | /article/like/:id     | -                                                | like article by id               |
| GET    | /user                 | jwt\*                                            | get user                         |
| PATCH  | /user/bookmark        | jwt\*, bookmark\*                                | add webtoon to user's bookmark   |
| PATCH  | /user/watchlater      | jwt\*, watchlater\*                              | add webtoon to user's watchlater |
| PATCH  | /user/liked           | jwt\*, liked\*                                   | add webtoon to user's liked      |
