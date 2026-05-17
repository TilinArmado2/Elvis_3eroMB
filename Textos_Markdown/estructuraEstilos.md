# Estructura de Estilos CSS

## Selectores y Propiedades

### body
- `body`: Define el estilo general del cuerpo de la página.

### nav
- `nav`: Estiliza la barra de navegación.

### nav a
- `nav a`: Estiliza los enlaces dentro de la navegación.

### h1, h2, h3
- `h1, h2, h3`: Estiliza los encabezados de nivel 1, 2 y 3.

### p, label, input, textarea, select, button, a
- `p, label, input, textarea, select, button, a`: Establece el tamaño de fuente para párrafos, etiquetas, inputs, entre otros.

### nav a:hover
- `nav a:hover`: Estilo al pasar el mouse sobre los enlaces de navegación.

### button
- `button`: Estiliza los botones.

### button:hover
- `button:hover`: Estilo al pasar el mouse sobre los botones.

### a:hover
- `a:hover`: Estilo al pasar el mouse sobre los enlaces.

### section, form
- `section, form`: Estiliza las secciones y formularios.

### p
- `p`: Establece la altura de línea para los párrafos.

### div
- `div`: Agrega margen inferior a los divs.

### input, textarea, select
- `input, textarea, select`: Agrega espacio de relleno interno a los campos de entrada.

### section
- `section`: Agrega borde a las secciones.

### .sections
- `.sections`: Estiliza el contenedor de secciones.

### .section-item
- `.section-item`: Estiliza los elementos de sección.

### table
- `table`: Estiliza las tablas.

### th
- `th`: Estiliza las celdas de encabezado de tabla.

### td, th
- `td, th`: Agrega espacio de relleno a las celdas de tabla.

### text_shadow
- `text_shadow`: Permite editar la sombra del texto.

# FlexBox

### justify-content
- `justify-content`: Alinea los elementos horizontalmente dentro del contenedor flexible.


- `flex-start`: Coloca los elementos al inicio.
- `flex-end`: Coloca los elementos al final.
- `center`: Centra los elementos.
- `space-between`: Deja espacio entre los elementos.
- `space-around`: Deja espacio alrededor de los elementos.
- `space-evenly`: Deja el mismo espacio entre todos los elementos.

### align-items
- `align-items`: Alinea los elementos verticalmente dentro del contenedor flexible.


- `flex-start`: Alinea los elementos arriba.
- `flex-end`: Alinea los elementos abajo.
- `center`: Centra los elementos verticalmente.
- `baseline`: Alinea los elementos según la línea base del texto.
- `stretch`: Estira los elementos para ocupar el alto disponible.

### flex-direction
- `flex-direction`: Define la dirección en la que se colocan los elementos flexibles.


- `row`: Ordena los elementos en fila, de izquierda a derecha.
- `row-reverse`: Ordena los elementos en fila, de derecha a izquierda.
- `column`: Ordena los elementos en columna, de arriba hacia abajo.
- `column-reverse`: Ordena los elementos en columna, de abajo hacia arriba.

### order
- `order`: Cambia el orden de aparición de un elemento flexible.


- Números enteros como `1`, `2`, `3`, entre otros.
- También se pueden usar valores negativos como `-1`.


### align-self
- `align-self`: Permite alinear un elemento individual de forma diferente al resto.


- `flex-start`: Alinea ese elemento arriba.
- `flex-end`: Alinea ese elemento abajo.
- `center`: Centra ese elemento verticalmente.
- `baseline`: Alinea el elemento según la línea base del texto.
- `stretch`: Estira el elemento.
- `auto`: Usa la alineación definida por `align-items`.

### flex-wrap
- `flex-wrap`: Indica si los elementos flexibles deben mantenerse en una sola línea o pasar a otra.


- `nowrap`: Mantiene todos los elementos en una sola línea.
- `wrap`: Permite que los elementos pasen a la siguiente línea.
- `wrap-reverse`: Permite que pasen a otra línea, pero en sentido inverso.

### flex-flow
- `flex-flow`: Es una forma abreviada para combinar `flex-direction` y `flex-wrap`.


- `row`
- `row-reverse`
- `column`
- `column-reverse`
- `nowrap`
- `wrap`
- `wrap-reverse`


### align-content
- `align-content`: Alinea varias líneas de elementos dentro del contenedor flexible cuando hay espacio disponible.


- `flex-start`: Junta las líneas al inicio.
- `flex-end`: Junta las líneas al final.
- `center`: Centra las líneas.
- `space-between`: Deja espacio entre las líneas.
- `space-around`: Deja espacio alrededor de las líneas.
- `stretch`: Estira las líneas para ocupar el espacio disponible.


# Box Model


- `padding`: Espacio interno entre el contenido y el borde del elemento.

- `padding-top`: Espacio interno superior.
- `padding-right`: Espacio interno derecho.
- `padding-bottom`: Espacio interno inferior.
- `padding-left`: Espacio interno izquierdo.

- Se puede usar:
- `padding: 10px;`
- `padding: 10px 20px;`
- `padding: 10px 20px 15px 5px;`

- `border`: Define el borde del elemento.

- Ejemplo:
- `border: 2px solid black;`

- Se puede usar:
- `solid`
- `dashed`
- `dotted`
- `double`
- `none`


- `margin`: Espacio externo entre un elemento y otros elementos.

- `margin-top`: Margen superior.
- `margin-right`: Margen derecho.
- `margin-bottom`: Margen inferior.
- `margin-left`: Margen izquierdo.

- Se puede usar:
- `margin: 10px;`
- `margin: auto;`
- `margin: 10px 20px;`

- `auto`: Para centrar elementos de forma horizontal.

- `box-sizing`: Define cómo se calcula el ancho y alto del elemento.

- `content-box`: El tamaño solo incluye el contenido.
- `border-box`: El tamaño incluye contenido, padding y borde.

- Ejemplo:
- `box-sizing: border-box;`


# Unidades Absolutas y Relativas


## Unidades Absolutas

- `px` (pixels):
- Unidad fija y exacta.
- Para bordes, tamaños pequeños y diseños precisos.

- `cm`:
- Centímetros.
- Conveniente para impresión.

- `mm`:
- Milímetros.
- Útil para impresión detallada.

- `in`:
- Pulgadas.
- Usado principalmente en impresión.

- `pt`:
- Puntos tipográficos.
- Para documentos e impresión.


## Unidades Relativas

- `%`:
- Se basa en el tamaño del elemento.
- Conveniente para diseños responsive.

- `em`:
- Relativo al tamaño de fuente del elemento.
- Para escalado flexible.

- `rem`:
- Relativo al tamaño de fuente.
- Para tipografías consistentes.

- `vw`:
- Relativo al ancho de la ventana.
- Útil para diseños adaptables al ancho de pantalla.

- `vh`:
- Relativo al alto de la ventana.
- Para secciones fullscreen.

- `vmin`:
- Usa el valor más pequeño entre ancho y alto de pantalla.
- Para elementos adaptables.

- `vmax`:
- Usa el valor más grande entre ancho y alto de pantalla.
- Útil para escalados grandes.

- `fr`:
- Unidad usada en CSS Grid.
- Divide el espacio disponible en fracciones.

- `ch`:
- Basado en el ancho del carácter `0`.
- Conveniente para controlar ancho de texto.

- `auto`:
- El navegador calcula automáticamente el tamaño o espacio.
- Para márgenes y grids.