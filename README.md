# Criando Apps Web com Angular 8 e Ionic 4

Tópicos organizados nos **commits**

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

<br>

- Models
- Date Service

<details><summary>Tela de Login: Parte 1</summary>

<br>

```ps
ionic generate page pages/account/login
```

http://localhost:8100/login

</details>

<br>

- Tela de Login: Parte 2
- Tela de Login: Parte 3

<details><summary>Botões e Cores</summary>

<br>

https://ionicframework.com/docs/

https://animate.style/

</details>

<br>

- Autenticando

<br>

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

<br>

- Reset Password

<br>

# Referência

[Carreira Desenvolvedor Frontend Angular - Balta.io](https://balta.io/carreiras/desenvolvedor-frontend-angular)
