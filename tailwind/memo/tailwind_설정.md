## TailWind를 사용해보자!

CSS에 대해 공부하면서 여러 가지 스타일링 방법들을 시도해 보았다.

처음에는 인라인 스타일과 내부 스타일시트를 사용해 보았다. 이 방법들은 직관적이고 쉽게 접근할 수 있었지만, 중복 코드가 빈번히 발생하고, 태그마다 스타일을 일일이 작성해야 하는 불편함이 있었다. 또한, CSS 우선순위로 인해 예상치 못한 스타일링 문제들이 종종 발생하기도 했다.

그 다음으로 접한 방법은 module.css였다. 각 컴포넌트마다 CSS를 모듈화하여 적용하는 이 방법은 중복 코드 없이 스타일을 관리할 수 있었고, 수정하기에도 편리했다. 하지만 이 방법을 사용하면서 폴더 내에 파일 수가 급증하고 이로 인해 프로젝트의 파일구조가 복잡해지는 걸 느꼈다.

이후 styled-components를 알게 되었는데, 이는 컴포넌트 기반의 스타일링을 가능하게 해주었다. 이로 인해 스타일의 재사용성과 유지 관리가 매우 용이했다. 게다가 JavaScript 변수를 사용하여 스타일을 동적으로 설정할 수 있어, 컴포넌트의 상태나 속성에 따라 스타일링하기가 더욱 편리했다. 하지만, 컴포넌트마다 이름을 설정해 주는 것이 다소 번거롭게 느껴졌다.

최근에는 tailwind CSS를 사용하게 되었다. 이전 방법들의 장점을 대부분 가져오면서, 동시에 각각의 단점을 상당 부분 해결해 준 것이 인상적이었다. 미리 정의 된 유틸리티 클래스를 사용하기 때문에 빠르게 디자인을 완성할 수 있었고, 간단하게 커스터마이징까지 가능해 완성도도 높일 수 있었다. 그리고 네이밍과 반응형 디자인에 대한 부담감도 없앨 수 있었다.
물론 태그의 길이가 길어지고 어떤 요소에 적용된 스타일인지 한눈에 파악하기 어렵다는 단점도 있지만 장점이 더 크게 느껴지기 때문에 당분간은 tailwind를 깊게 공부하며 더 잘 활용해야겠다.

## TailWind 기본 설정 및 설치

1.  노드패키지 다운
    npm install -D tailwindcss
2.  npx tailwindcss init
    tailwind.config.js 파일 생성
3.  템플릿 경로 구성
    ```js
    module.exports = {
      content: ["./src/**/*.{html,js}"],
      theme: {
        extend: {},
      },
      plugins: [],
    };
    ```
4.  루트 css파일에 지시어 추가
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

5.  postcss 및 autoprefixer 설치:
    npm install -D postcss autoprefixer
    PostCSS는 CSS를 변환하는 JavaScript 도구로, 여러 플러그인을 통해 CSS를 분석하고 변환합니다.
    Autoprefixer는 PostCSS의 플러그인 중 하나로, CSS에 자동으로 Vendor Prefix를 추가해주는 도구입니다.
    이를 사용하면 브라우저 간의 호환성 문제를 해결하는데 도움이 됩니다.

6.  postcss.config.js 파일 생성 및 설정:
    PostCSS 설정 파일입니다.
    여기에서는 Tailwind CSS와 Autoprefixer 플러그인을 사용하도록 설정했습니다.
    ```js
    module.exports = {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    };
    ```
7.  tailwind.config.js 파일에서 purge 설정 추가:

    Tailwind CSS 설정 파일입니다.
    여기에서는 purge 옵션을 사용하여 production build에서 사용되지 않는 CSS를 제거하도록 설정했습니다.
    이를 통해 최종 CSS 파일의 크기를 줄일 수 있습니다.

    ```js
    module.exports = {
      purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
      theme: {
        extend: {},
      },
      plugins: [],
    };
    ```

8 .CSS 파일에 Tailwind CSS의 지시어 추가:

    Tailwind CSS의 지시어를 추가합니다.
    이 지시어를 통해 Tailwind CSS의 스타일을 사용할 수 있습니다.

    ```js
        @import 'tailwindcss/base';
        @import 'tailwindcss/components';
        @import 'tailwindcss/utilities';
    ```

필요에 따라 다른 플러그인 추가:

// @tailwindcss/forms는 Tailwind CSS로 폼 스타일링을 할 때 유용한 플러그인입니다.
// 이 플러그인을 설치하면, Tailwind CSS의 유틸리티 클래스를 사용하여 폼 요소를 스타일링할 수 있습니다.
npm install @tailwindcss/forms
그리고 tailwind.config.js 파일에 다음과 같이 추가합니다.

```js
module.exports = {
  theme: {
    extend: {},
  },
  // 여기에 플러그인을 추가합니다.
  // 이 예제에서는 @tailwindcss/forms 플러그인을 추가했습니다.
  plugins: [require("@tailwindcss/forms")],
};
```
