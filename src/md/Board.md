#

```jsx
npx create-next-app board
```

# 기본페이지
localhost:3000/board
route.js와 page.js가 같이 있을때
route.js의 우선순위가 더 높아서 route.js가 실행된다.


## front
- page.js

## back
- route.js

# App router
- 폴더를 생성하면 알아서 라우터를 설정한다.

# board

# front
- page.js
- src/app/board/page.js : 게시판 목록 보여주기
// localhost:3000/board

- src/app/board/create/page.js : 게시판 글쓰기
// localhost:3000/board/create : 글쓰기와 관련한 form 태그 넣기

- src/app/board/[id]/page.js
// localhost:3000/board/1
// localhost:3000/board/2
// localhost:3000/board/3

- src/app/board/[id]/edit/page.js
// localhost:3000/board/1/edit
// localhost:3000/board/2/edit
// localhost:3000/board/3/edit

// 설계를 달리 할 수 있음
- src/app/board/edit/[id]/page.js
// localhost:3000/board/edit/1
// localhost:3000/board/edit/2
// localhost:3000/board/edit/3



- src/app/board/components/...(이름 각각)

# back
- src/app/api/board/route.js
// localhost:3000/api/board

- src/app/api/board/[id]/route.js
// localhost:3000/api/board/1
// localhost:3000/api/board/2
// localhost:3000/api/board/3


- src/app/api/model/board/data.js
