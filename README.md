# Aprenda Front-end com o Bootcamp JAMStack da Alura

Ola, Frontender!

Boas vindas ao Bootcamp Front-end JAMStack da Alura! Vamos mergulhar fundo no oceano do front-end e da JAMStack desenvolvendo projetos reais com as melhores práticas do mercado, dividido em seis módulos.

Você aprenderá ReactJS, NextJS, Styled-Components e tudo que gira ao redor da JAMStack, saberá como estruturar uma arquitetura front-end com, compreenderá o processo de deploy da aplicação utilizando a CDN da vercel juntamente com fluxos de integração contínua e deploy contínuo (CI/CD) do projeto.

Nos aprofundaremos em gerenciamento de estado, navegação e rotas, estratégias de cache e SEO, testes de componentes, automatizados e de unidade, autenticação e toda a parte de build do NextJS. Sempre alinhando a base teórica com a aplicação prática dos conceitos, escalando assim seu conhecimento para trazer novas oportunidades, seja na empresa onde você trabalha, seja no seu próprio negócio ou em uma nova carreira. Puxe bastante fôlego que o mergulho vai ser profundo!

Antes de qualquer mergulho precisamos colocar a roupa de banho, passar protetor solar e nos preparar para aproveitar ao máximo o mar. Por isso mesmo, antes de você cair de cabeça nas aulas do bootcamp, separamos essa série de conteúdos que irão te preparar para aproveitar ao máximo o que vem pela frente.

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

### Módulo 04: Testes com Cypress, Jest e React Testing Library

Prosseguiremos adicionando novas funcionalidades no Instalura, agora com a página de Login entenderemos mais a fundo qual a responsabilidade do front=end em manter as informações seguras e aprenderemos como utilizar Tokens JWT para garantir acesso a recursos privados do servidor. Com o crescimento da complexidade do projeto, testes manuais causam lentidão e não evitam totalmente que falhas ocorram. Portanto, vamos aprender sobre testes automatizados para garantir a qualidade das funcionalidades usando o Cypress para testar a integração, React Testing Library para os componentes e Jest para o código JS mais simples.Também adicionaremos o mecanismo de testes ao padrão de qualidade do ESLint e a integração contínua do projeto.

#### Aula 01 - A tela de login:

Adicionado cypress: `yarn add -D cypress eslint-plugin-cypress`

Adicionado script: `"test:integration:open": "cypress open"`

Com a execução do `test:integration:open`, o cypress é iniciado pela primeira vez criando alguns arquivos com exemplos, e o arquivo de configuração vazio.

No arquivo de configuração (cypress.json), foi adicionado:

```json
{
  "baseUrl": "http://localhost:3000",
  "video": false
}
```

##### Links

- https://www.betterspecs.org/

#### Aula 02 - Custom hooks no React + Lógica Inicial do Login

Adicionado conexão com o backend no form de login, armazenando o token em cookies com uso da lib nookies.

##### Links

- https://formik.org/
- https://react-hook-form.com/
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
- https://github.com/maticzav/nookies

##### Citações

- Domain-driven Design (DDD): Infra
- Hexagonal architecture

#### Aula 03 - Page Objects e padronização nos testes de integração

Cria um **PageObject** para o LoginScreen.

##### Links

- https://martinfowler.com/bliki/PageObject.html

#### Aula 04 - Conhecendo o Jest e os testes de unidade

Adiciona `jest`, e alguns testes unitários.

#### Aula 05 - Testando Componentes com React Testing Library

Cria um customRender para lidar com os providers, e adiciona um teste com snapshot no TextField.

##### Links

- https://testing-library.com/docs/react-testing-library/intro
- https://testing-library.com/docs/react-testing-library/setup

#### Aula 06 - Validação Fluente + Testes do TextField

Adiciona validação no form de login com yup.

##### Links

- https://github.com/jquense/yup
- https://www.casadocodigo.com.br/products/livro-oo-solid

#### Aula 07 - Finalizando o Form + Testes do Form

##### Links

- https://kentcdodds.com/blog/common-mistakes-with-react-testing-library/
- https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning

#### Aula 08 - Testando Hooks e Services

- Adiciona teste nos serviços e hooks, com injeção de dependências

#### Aula 09 - Integrando nossos testes no CI com Cache

- Executa yarn test e yarn test:integration:build no CI

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
