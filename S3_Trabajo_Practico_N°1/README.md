# Nombre de tu tienda

🔗 **Demo:** https://tu-app.netlify.app

## Qué es
Es una aplicacion que permite comprar vinilos. 

## Cómo correrlo
pnpm install && pnpm run dev

## Mis contextos
 1) CarritoContext.jsx
El contexto de carrito guarda todos los valores o props que usa MiCarrito, por ejemplo: 
estaEnElCarrito, quitar, cambiarCantidad, agregarVinilo, etc.
Lo consume App.jsx e hijos (NavBar.jsx, ProductoCard.jsx, CarritoModal.jsx, Checkout.jsx).
El contexto es global, para poder evitar el prop drilling que es pasaje de props
a traves del árbol, sin importar la profundidad del componente. Por ejemplo, un section utiliza un componente que necesita xprop, por tanto, el body, el main (y si hubiera algun div intermedio tambien), deberian pasarse xprop hasta llegar al section. 
El contexto, permite simplificar esto. De manera que section, acceda de forma directa al xprop, sin que body o main se enteren o deban participar.  

 2) ThemeContext.jsx
El contexto de los temas, lo usa app. Permite cambiar la interfaz entre claro y oscuro. 
Se utilizan las clases de @theme, y con IA se redefinieron las clases para los colores claros, siendo el tema oscuro el tema por default. 
Se ubica en la barra de navegacion, la cual luego es invocada en App.jsx.


## Mis hooks
 1) useCarrito.js
 Agrupa diferentes funciones que permiten al usuario gestionar la compra
 de uno o varios vinilos. Estas funciones son devueltas como props, para ser utilizadas por otros componentes. 

 2) useLocalStorage.js
 Contiene la logica del localStorage, el cual tiene como objetivo persistir la informarcion para que aun si se recarga la pagina, los datos puedan ser recuperables. El hook, simplifica el uso de esta funcion, recibiendo la clave y el contenedor (vector u objeto o ''). 

## Decisiones de estado
Qué estado NO puse en un contexto y por qué.

## Prop drilling: antes y después
En app, ya no se pasan miCarrito, agregarVinilo, vaciarLista. Es decir, ya no maneja o coordina las funciones de miCarrito, sino que gestiona los componentes de vistas (Tienda.jsx, Checkout.jsx, Confirmacion.jsx) las cuales agrupan, segun corresponda las diferentes funcionalidades.

## Qué generé con IA
En Card me ayudo con el manejo de la disponibilidad de los vinilos. 

El ThemeSwitcher lo habia hecho sin el context, primero siguiendo el video de la clase 3 del sprint 2. Y despues cuando lo empece a armarlo con el context, y el useEffect no sabia como armarlo y me explico y me lo paso la IA.

La gama de colores del tema claro (.ligth) y sus clases lo armó la IA.

En el formulario me ayudo con los patterns, y con la funcion confirmacion porque no entendia.

En App.jsx, no entendia como hacer que se vea una sola vista...
 "
    {vista === VISTAS.TIENDA && <Tienda />}
        {vista === VISTAS.CHECKOUT && <Formulario onConfirmar={confirmar} />}
        {vista === VISTAS.CONFIRMACION && (
          <Confirmacion nombre={pedido.nombre} atras={atras} />
        )}

 "

Realiza los estilos, que despues puedo o no corregir segun la vista.