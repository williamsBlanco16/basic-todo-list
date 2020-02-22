import React from 'react'
import ReactDom from 'react-dom'

ReactDom.render(
  <div> Hello World!</div>,
  document.getElementById("root")

);

/*
*Por convencion index.js es el punto de entrada de la aplicacion
however we can't just take this file and run it directly in the browser, there are few rason for this
*en este punto las siguientes consideraciones:
-no entiende el jsx

-no interpreta todos los navegadores las ultimas caracteristicas javascript como import syntax ES6

es inefinciente cargar los cientos de lineas de codigo correspondiente a las dependencias react y reactDom
so, isntead we want to bundle all our code, including the libraries, into a single javacript to do this we need tool
babel and webpack 

npm isntall --global babel babel-cli

we try babel index.jsx
we'll get an error, we need to tell it that our code is ES6 AND JSc for this we need PRESET

npm install --save-dev babel-preset-es2015 babel-preset-react

we also need to tell babel babel to actually we use the preset we installed 
for this .babelrc 

so now we have a way to convert our ES6 and jsx back to vanilla js but
we haven't yet got a way to bundle the react and reactDom alongside our code 
we also need to install the library which enables webpack to integrate with babel
these libraries are known as loaders
-D shortcup --save-dev

npm intall -D babel-loader
*/