# Scaffold Jekyll Empty - Gulp (Browser-Sync + Sass)

Despues de instalar las dependencias con `$ npm install` hay que ejecutar
la teréa `$ gulp jekyll-build` para hacer el primer complidao del sitio,
despues (y el resto de veces) ya se puede ejecutar el comando `$ gulp`
para trabajar en el proyecto.

El comando `$ gulp` ejecuta los mismos procesos que el comando
`$ jekyll s` con dos diferencias, el servidor local se monta con
*Browser-Sync* y el compilado de los archivos `.scss` lo ejecuta *gulp-sass*.

[**Descripción detallada de las tareas**](https://gist.github.com/BCasal/89e0a0dde82e04c64bf8e74babd0710e#file-gulp-sass-js)

Después de descargar/clonar:

```

// Solo recien descargado/clonado

  // Instalar dependencias

  $ npm install

  // Compilar el proyecto

  $ gulp jekyll-build

// El resto de veces

  // Empezar a trabajar

  $ gulp

```

Y a diviertirse!!!
