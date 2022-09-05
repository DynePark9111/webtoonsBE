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

```
* = required
+ = under development
```

| Method | URL                   | Query                     | Params                                           | Description                      |
| ------ | --------------------- | ------------------------- | ------------------------------------------------ | -------------------------------- |
| GET    | /                     | -                         | -                                                | displays port                    |
| POST   | /auth/signup          | -                         | username\*, email*, password*, confirmPassword\* | create user                      |
| POST   | /auth/login           | -                         | email*, password*                                | login                            |
| GET    | /auth/logout          | -                         | -                                                | logout                           |
| GET    | /auth/check           | -                         | jwt\*                                            | check user using jwt             |
| GET    | /new                  | platform, page            | -                                                | get new webtoons (new)           |
| GET    | /new/bookmark         |                           | jwt\*                                            | get new webtoons (bookmarked)    |
| GET    | /new/watchlater       |                           | jwt\*                                            | get new webtoons (watchlater)    |
| GET    | /new/liked            |                           | jwt\*                                            | get new webtoons (liked)         |
| GET    | /webtoon              | category, platform, genre | -                                                | get webtoons (filtered)          |
| POST   | /webtoon              |                           | -                                                | post webtoon (for admin)         |
| GET    | /webtoon/updated      |                           | -                                                | get newest updated webtoon       |
| GET    | /webtoon/recommended  |                           | genre                                            | get recommended webtoons         |
| GET    | /webtoon/:id          |                           | -                                                | get webtoon detail by id         |
| GET    | /webtoon/search/:name |                           | -                                                | search webtoon by title, author  |
| GET    | /comment/:id          |                           | -                                                | get comments by id               |
| DELETE | /comment/:id          |                           | jwt\*                                            | delete comment by id             |
| POST   | /comment              |                           | jwt\*, comment\*, parentId                       | post comment                     |
| PATCH  | /comment/like         |                           | jwt\*,                                           | like comment                     |
| GET    | /comment/nested/:id   |                           | parentId\*                                       | get nested comments by id        |
| GET    | /article              | page, limit, category     | -                                                | get articles(=posts)             |
| POST   | /article              |                           | jwt\*, title\* content\*                         | create article                   |
| GET    | /article/:id          |                           | -                                                | get articles by id               |
| DELETE | /article/:id          |                           | jwt\*                                            | delete article by id             |
| PATCH  | /article/like/:id     |                           | -                                                | like article by id               |
| GET    | /user                 |                           | jwt\*                                            | get user                         |
| PATCH  | /user/bookmark        |                           | jwt\*, bookmark\*                                | add webtoon to user's bookmark   |
| PATCH  | /user/watchlater      |                           | jwt\*, watchlater\*                              | add webtoon to user's watchlater |
| PATCH  | /user/liked           |                           | jwt\*, liked\*                                   | add webtoon to user's liked      |

#### Query

| Query               | Types                                                                                                                    | Default | Description        |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------- | ------------------ |
| page                | number                                                                                                                   | 1       | request page       |
| limit               | number                                                                                                                   | 16      | length of response |
| +category (article) | 전체, 공지, 일반, 질문, 요청                                                                                             | 전체    | webtoon category   |
| category (webtoon)  | ongoing, completed, adult, BL/GL                                                                                         | 전체    | webtoon category   |
| platform            | 전체, naver, kakao, kakaopage                                                                                            | 전체    | webtoon platform   |
| genre               | 감성, 개그, 공포, 드라마, 로맨스 무협, 소년 스실러, 스토리, 스포츠, 시대극, 액션, 애피소드, 옴니버스, 일상, 판타지, 학원 | 전체    | webtoon genre      |
| +day                | 완결(0),일(1),월(2),화(3),수(4),목(5),금(6),토(7)                                                                        | 0       | webtoon day        |
| +age                | 전체이용가(0), 12세(1), 15세(2), 18세(3)                                                                                 | 0       | webtoon age rating |
| +original           | 웹툰원작(0), 드라마원작(1), 소설원작(2)                                                                                  | 0       | webtoon original   |
