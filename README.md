# Amazing To-Do List
## O To-Do List mais incrível do mundo!

### Contexto

O seguinte projeto foi desenvolvido como projeto inicial de Onboard do grupo CodeLab da USP de São Carlos. Como não tinhamos muito tempo no final do semestre, decidimos criar um classico To-Do List, porém colocando novos recursos técnicos bastante interessantes.

### O que temos no front?

O projeto foi desenvolvido utilizando ReactJS com Typescript. Agora falando da parte legal e nova, ele foi configurado com o ESLint e Prettier para manter a beleza do código e estilizado com o Styled Components. Para o CI/CD, foi utilizado Github Actions: a cada novo PR, o código passa por um Lint, após isso ele é testado utilizando o Cypress e o projeto sobe para o Vercel. A cada commit/pr é feito um novo link de preview, e ao subir na main, é atualizado a versão de produção! Alguns componentes também foram documentados no Storybook.

### Como rodar?

Para rodar basta dar os simples comandos:

```bash
npm install
npm start
```

Caso queira testar utilizando o Cypress com o modo UI:

```bash
npm install
npm start
npx cypress open
```

Caso queira visualizar o Storybook:

```bash
npm install
npx storybook dev
```

### Onde o Webapp está disponível?

Pode ser acessado [clicando aqui](https://amazing-to-do-list-kappa.vercel.app/). Aqui uma print do webapp:

![image](https://github.com/Windows87/amazing-to-do-list/assets/25728217/4b59c27b-ca68-424f-bfd3-6f96c18d437d)

### Contribuições

Desenvolvido por [Yuri Faria](https://www.linkedin.com/in/yfaria/), [Victor Hugo](https://github.com/otorugo) e [Theo](https://github.com/theosant).
