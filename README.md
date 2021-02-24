# Módulo 01: JAMStack e layout com React

Começaremos mergulhando na JAMStack, aprendendo a fundo manipulação e criação de componentes e estado que juntos formam a essência do ReactJS. O desafio já começa ao partirmos para a prática e usar esse conhecimento para criar as primeiras funcionalidades do Instalura. Como nossa missão é ir cada vez mais a fundo na tecnologia, não podemos deixar de falar sobre os conceitos que envolvem uma SPA, as diferenças entre Server Render e Client Render e também como funciona o Webpack que é responsável pelo sistema de build do ReactJS.

Além da parte lógica, vamos estudar bastante sobre estilização e responsividade, passando por media-query, CSS modules e Styled Components que é a biblioteca que iremos utilizar para dar vida a nossa aplicação. Por fim, faremos o build e deploy do projeto e teremos o Instalura rodando em produção e hospedado na Vercel para que qualquer pessoa consiga acessar. Pegue bastante fôlego porque o mergulho vai ser profundo!

## Live Demo

https://instalura.guipacheco2.vercel.app

## Aulas

### Módulo 01: JAMStack e layout com React

#### Aula 01: JAMStack, o que é

##### Links

- https://www.figma.com/file/Veefm1pjkeTFcJC7BUqHge/Instalura
- https://jamstack.org
- https://nextjs.org/
- https://almanac.httparchive.org/en/2020/jamstack

#### Aula 02: Vale a pena usar React para qualquer tipo de projeto

##### Inicializando o projeto instalura

```sh
yarn create next-app --example with-styled-components instalura
```

Além do conteúdo proposto no curso, também foi adicionado Typescript, ESLint e Prettier.

A pasta pages foi movida para src. https://nextjs.org/docs/advanced-features/src-directory

##### Links

- https://styled-components.com/
- https://github.com/vercel/next.js/tree/canary/examples/with-styled-components
- https://github.com/vercel/next.js/tree/canary/examples/with-typescript
- https://yarnpkg.com/
- https://2020.stateofjs.com/en-US/technologies/front-end-frameworks/
- https://babeljs.io/repl
- https://prettier.io/
- https://eslint.org/

#### Aula 02: Criando Component com Styled Components

##### Links

- https://github.com/alexpate/awesome-design-systems
- https://material-ui.com/
- https://gestalt.netlify.app/

#### Aula 03: Componente de botão com temas

##### Links

- https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components

#### Aula 04: O Reset CSS com Styled Components

- Reset CSS

#### Aula 05: O componente Text, padronizando a tipografia do projeto

Em alternativa a composição de tipografia como css no botão, realizei a composição no componente `<Menu>`.

```diff
src/components/commons/Button.tsx

- ${TextStyleVariants.paragraph1}
```

```diff
src/components/commons/Menu.tsx

+ <Button type="button" ghost variant="secondary.main">
+   <Text variant="paragraph1">Entrar</Text>
+ </Button>
```

- https://www.benmvp.com/blog/polymorphic-react-components-typescript

#### Aula 06: Trabalhando com breakpoints via Styled Components

Na aula anterior segui pelo caminho de manter a estilização do texto em seu próprio componente. Desse modo, os breakpoints sugeridos também foram alterados, para que os componentes `Text` utilizados no menu se comportassem como o desejado.

Foi utilizada uma estratégia para aceitar o `variant` como array, considerando os indices em ordem xs -> xl.

```diff
 <Button type="button" variant="primary.main">
-  <Text variant="paragraph1">Entrar</Text>
+  <Text variant={['smallestException', 'paragraph1']}>Cadastrar</Text>
 </Button>
```

##### Links

- https://xstyled.dev
- https://quokkajs.com

#### Aula 07: Componentes com Props via Breakpoints

##### Substitui o uso de css`` por css() em algum casos.

```js
paragraph1 = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`
```

```js
paragraph1: css(({ theme }) => theme.typographyVariants.paragraph1),
```

##### Adiciona props que atuam diretamente no style do componente

```diff
 <Text
     variant="title"
     as="h1"
     color="tertiary.main"
+    textAlign={['center', 'left']}
 >
```

```diff
 <Button
     variant="primary.main"
+    margin={['auto', 'initial']}
+    display="block"
 >
```

#### Aula 08: Criando o componente Grid com Styled Components

Introdução aos conceitos de grid no design system.

- Criado foundation -> layout -> grid
- Container > Row > Col

##### Dicas

- Primeiro escrever como se espera utilizar (output), e depois ir programando (procedimento). Principio de input -> [] -> output.
- Reuso antes do uso.
- Uma vez que se tem clareza o que precisa para funcionar minimante, com o tempo vai evoluir naturalmente. Código não é algo estático, está sempre evoluindo.

##### Links

- https://www.alura.com.br/artigos/como-fazer-grids-e-a-responsividade-na-web
- https://getbootstrap.com/docs/4.0/layout/grid/
- https://material.io/design/layout/responsive-layout-grid.html
- https://material.io/design/layout/spacing-methods.html

#### Aula 09: Componente Box, ESLint e o desafio do módulo

Adiciona componente Box para auxiliar na composição de elementos na pagina, considerando breakpoints css.

Nessa aula também foi proposta a adição do ESLint.

##### Links

- https://material-ui.com/components/box
- https://gestalt.netlify.app/Box

### Módulo 02: State e Forms + boas práticas de Git e GitHub

#### Aula 01:

Foi mostrado o uso do eslint com a opção, `--ignore-path`. Com isso foi possível remover o `.eslintcache` e `.prettierignore`.

```diff
- "format": "prettier --loglevel warn --write \"**/*.{js,ts,css,md,json}\"",
+ "format": "prettier --ignore-path .gitignore --loglevel warn --write \"**/*.{js,ts,css,md,json}\"",
```

```diff
- "lint": "eslint . --cache --fix"
+ "lint": "eslint . --ignore-path .gitignore --cache --fix"
```

##### Links

- [Visualizando o Git](https://www.youtube.com/watch?v=4-tfJ-ZyA0Q)
- [Git e GitHub para Sobrevivência](https://www.youtube.com/watch?v=BAmvmaKQklQ&list=PLh2Y_pKOa4Uf-cUQOVNGlz_GVHx8QYoE6)
- [Padronizando seus commits](https://www.youtube.com/watch?v=1eTofdmfq1g)
- [Virtual DOM e ReactDev tools](https://cursos.alura.com.br/virtual-dom-e-react-devtools-c309)
- [Como fazer efeito de desenhar com CSS e JavaScript](https://www.youtube.com/watch?v=4cEMgap9wpk)
- [Como fazer animação em scroll com JavaScript.](https://www.youtube.com/watch?v=ql0-0_taZpk)
- [Formulários em React com Engenharia Reversa no Formik](https://www.youtube.com/watch?v=cMq6k7ymv2s)
- [Lottie: Animações com React](https://www.youtube.com/watch?v=dZH9aDX8T-0)
- [Executor de código universal via JavaScript](https://www.youtube.com/watch?v=LQtclpxQrNQ)
- [Hipsters Ponto Tech: Primeiros passos com Devops](https://podcasts.google.com/feed/aHR0cHM6Ly9oaXBzdGVycy50ZWNoL2ZlZWQvcG9kY2FzdC8/episode/aHR0cHM6Ly9oaXBzdGVycy50ZWNoLz9wPTE1NzE?hl=en-BR&ved=2ahUKEwjC9violavuAhXYJrkGHStGCo0QjrkEegQIBRAF&ep=6)
- [Hipsters Ponto Tech: Containers e Docker](https://www.alura.com.br/podcast/hipsterstech-containers-e-docker-hipsters-75-a511)

#### Aula 08:

Dependabot sub dependencies

https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events
https://www.framer.com/motion/
http://latentflip.com/loupe
https://lottiefiles.com/50465-done
https://www.conventionalcommits.org/en/v1.0.0/
https://github.com/commitizen/cz-cli
https://github.com/conventional-changelog/commitlint
https://blog.appsignal.com/2020/04/09/ride-down-the-javascript-dependency-hell.html

## Links mencionados na comunidade do bootcamp

- https://flexboxfroggy.com/
- http://www.flexboxdefense.com/
- https://flukeout.github.io/
- https://cssgridgarden.com/

- https://cssreference.io/
- https://css-tricks.com/almanac/
- https://devdocs.io/css/
- https://developer.mozilla.org/pt-BR/docs/Web/CSS
- http://html5doctor.com/
