# Criando Apps Web com Angular 8 e Ionic 4

Extensão dos cursos **Começando com Angular** e **Criando AppsWeb com Angular e UiKit**.

Projeto para um Petshop utilizando componentes do Ionic para a construção do frontend em Angular.

O foco é a construção de uma área com funções administrativas do Petshop utilizando o Ionic.

Desenvolvimento de funcionalidades comuns para área de gestão de vendas utilizando componentes do Ionic com funcionalidades condicionadas ao perfil do usuário logado e gráfico de vendas utilizando **jsChart**

## Aprendizado

1. Criar um projeto Angular utilizando Ionic
2. Trabalhar com Temas do Ionic
3. Básico de SCSS para construir aplicativos Angular
4. Criar componentes utilizando o Ionic
5. Criar autenticação/ login
6. Criar área Administrativa com Angular
7. Criar fluxo de reset de senha com Angular
8. Importar componente sem **npm install**
9. Criar gráfico de vendas com **jsChart**
10. Armazenar dados do usuário no **localStorage**
11. Limitar funcionalidades de acordo com o perfil do usuário logado
12. Construir rotas e trabalhar com Routing no Angular
13. Proteger rotas implementando um guardião (Route Guard)
14. Implementar navegação com Angular
15. Implementar formulários simples com Ionic
16. Aprender a formatar moedas utilizando pipe no Angular

## Tecnologias e versões utilizadas

1. Node.js v16.14.0
2. Ionic 5.2.4
3. Angular CLI 12.2.12
4. Mockoon v1.17.0
5. Visual Studio Code

## Tópicos

> Tópicos organizados nos **commits**

- Apresentação

<details><summary>Ferramentas</summary>

<br>

```ps
npm install -g @angular/cli
npm install -g ionic@5.2.4
```

```
ng version

Angular CLI: 12.2.12
Node: 16.14.0 (Unsupported)
Package Manager: npm 8.1.1
OS: win32 x64

Angular:
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1202.12 (cli-only)
@angular-devkit/core         12.2.12 (cli-only)
@angular-devkit/schematics   12.2.12 (cli-only)
@schematics/angular          12.2.12 (cli-only)
```

```
ionic --version
5.2.4
```

</details>

<details><summary>Startup do Projeto</summary>

<br>

Mockoon

    Import/Export > Mockoon´s Format > Import from a file (JSON)
        ./assets/mockoon.json

Criar projeto com o nome **eshop** com o modelo **blank**

```
ionic start eshop blank
```

Arquivos diferenciados:

    src/
        theme/
            variables.scss
        global.scss

SCSS - Syntactically Awesome Style Sheet

</details>

<details><summary>Temas</summary>

<br>

```ps
ionic serve
```

https://ionicframework.com/

</details>

- Models
- Date Service

<details><summary>Tela de Login: Parte 1</summary>

<br>

```ps
ionic generate page pages/account/login
```

http://localhost:8100/login

</details>

- Tela de Login: Parte 2
- Tela de Login: Parte 3

<details><summary>Botões e Cores</summary>

<br>

https://ionicframework.com/docs/

https://animate.style/

</details>

- Autenticando

<details><summary>Salvando dados do usuário</summary>

<br>

Inspecionar > Dev Tools > Aplicativo > Armazenamento Local

```
Chave: shop.data
Value:
eyJ1c2VybmFtZSI6ImJhdG1hbiIsIm5hbWUiOiJCcnVjZSBXYXluZSIsImltYWdlIjoiaHR0cHM6Ly9iYWx0YWRlbW9zLmJsb2IuY29yZS53aW5kb3dzLm5ldC9lc2hvcC9iYXRtYW4ucG5nIiwiZW1haWwiOiJiYXRtYW5AYmFsdGEuaW8iLCJ0b2tlbiI6ImFIUjBjSE02THk5aVlXeDBZV1JsYlc5ekxtSnNiMkl1WTI5eVpTNTNhVzVrYjNkekxtNWxkQzlsYzJodmNDOWlZWFJ0WVc0dWNHNW4iLCJyb2xlcyI6WyJlbXBsb3llZSIsIm1hbmFnZXIiXX0=

```

Decodificação Base 64

```json
{
  "username": "batman",
  "name": "Bruce Wayne",
  "image": "https://baltademos.blob.core.windows.net/eshop/batman.png",
  "email": "batman@balta.io",
  "token": "aHR0cHM6Ly9iYWx0YWRlbW9zLmJsb2IuY29yZS53aW5kb3dzLm5ldC9lc2hvcC9iYXRtYW4ucG5n",
  "roles": ["employee", "manager"]
}
```

</details>

- Reset Password

<details><summary>Componentes</summary>

<br>

```ps
ionic generate module components
ionic generate component components/loading
```

http://localhost:8100/home

</details>

<details><summary>Gráfico de Vendas: Parte 1</summary>

<br>

```ps
ionic generate component components/monthly-sales-chart
```

https://www.chartjs.org/

</details>

- Gráfico de Vendas: Parte 2

<details><summary>Estrutura das Páginas</summary>

<br>

```ps
ionic generate page pages/frame
ionic generate page pages/frameless
```

</details>

<details><summary>User Card</summary>

<br>

```ps
ionic generate component components/navbar
ionic generate component components/user-card
```

</details>

- Configurando as Rotas
- Route Guard

<details><summary>Order List Component</summary>

<br>

```ps
ionic generate page pages/store/orders
ionic generate page pages/store/orders-details

ionic generate component components/order-list
```

</details>

<details><summary>Order Status Component</summary>

<br>

```ps
ionic generate component components/order-status-badge
```

</details>

- Order Details
- Habilitando Botões por Perfil

<details><summary>Finalizando</summary>

```ps
ionic build --prod
```

```
www/
```

</details>

<br>

# Links

https://animate.style/

https://ionicframework.com/

https://www.chartjs.org/

# Referência

[Carreira Desenvolvedor Frontend Angular - Balta.io](https://balta.io/carreiras/desenvolvedor-frontend-angular)
