# Problemas instalación

Al intentar ejecutar por la consola del propio VSC los comandos de Angular (ng), lanzará una excepción, ya que, la consola abierta a través
del editor se abre en modo Restricted y tiene deshabilitada la ejecución de comandos.

Por tanto, deberemos utilizar la consola del propio windows a través del comando cmd y abrirla con permisos de administrador.

Si seguimos los pasos indicados en https://www.alexmedina.net/habilitar-la-ejecucion-de-scripts-para-powershell/, podremos habilitar la consola
para que se ejecute con permisos de administrador a través del editor.

# Instalación

// Con la opción prefix cambiaremos el prefijo por defecto app a los componentes por kc
ng new angular-kc --prefix kc

# Deployment

despues de hacer ng build (--prod para producción), se puede acceder a la carpeta dist y ejecutar http-server para visualizar como
se ve nuestra aplicación ejecutándose.

# Git

Valorar la posibilidad de realizar pull request.

https://opensource.com/article/19/7/create-pull-request-github

# Bootstrap

npm install Bootstrap
(incluimos css en angular.json con la ruta del node_modules en la sección de styles)

# Extensiones

## Especificos para angular
Angular Essentials (Jonh Papa). Se accede mediante a- y despliega elementos.
Angular Language Service


## Otros que son interesantes/complementarios

Bootstrap 4, Font awesome 4, Font Awesome 5 Free & Pro snippets (Ashok Koyi)
Git Graph
Live Server
Prettier
Winter is Comming Theme (dark/ligth theme)

# Comandos

ng g m core -m app (Creación de módulo donde el padre es app)
ng g c core/header --export -m core (Creación de componente header dentro de core y exportación)
