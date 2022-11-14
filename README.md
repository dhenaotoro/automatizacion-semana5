"# automatizacion-semana5-kraken" 

Conformación:

| Apellidos | Nombres | Correo @uniandes | Usuario de GitHub | Funcionalidades con pruebas E2E |
| --------- | ------- | ---------------- | ----------------- | ----------------- |
| Beltran Beltran | Laura Andrea | la.beltranb1@uniandes.edu.co |  laubeltranandes | Dashboard |
| Buitrago Corredor | Dario Alexander | da.buitragoc1@uniandes.edu.co |  dario-buitrago-andes | Pages |
| Cardenas Castañeda | Andres Camilo | ac.cardenasc1@uniandes.edu.co | accardenasc1 | Tags | 
| Henao Toro | Daniel Felipe | df.henaot1@uniandes.edu.co | dhenaotoro | Post |

Pasos previos para el lanzamiento de las pruebas:

Cuando se ejecute por primera vez la aplicación de administración de Ghost, se mostrará la pantalla de setup (onboarding).

![image](https://user-images.githubusercontent.com/78186561/201494518-6050f870-f547-4938-8a2b-f56869a7adfc.png)

En esa pantalla es necesario que manualmente se defina un usuario con los siguientes campos:

1) Campo Set tile.
2) Campo Full name.
3) Campo Email address (Guarda este dato porque lo usarás más adelante).
4) Campo Password (Guarda este dato porque lo usarás más adelante).

Posteriormente, se debe dar clic en el botón "Create account & start publishing ->"

Luego, CLick en el botón "Write your first post".

Luego, clic en el botón "Posts".

Finalmente se ubicará sobre el dashboard, mostrando los posts actuales.

Ahora, debes tener en cuenta que los datos de "Email address" y "Password", deben ponerse según corresponda en el archivo properties.json que se encuentra en la raiz del proyecto.

Para más detalle ver el siguiente gif:

![Evidence_Start_Test_With_Kraken](https://user-images.githubusercontent.com/78186561/201480561-5988d7d7-4b10-420a-ae27-5b56845b7688.gif)

Pasos para el lanzamiento de las pruebas:

Cuando el usuario se encuentre creado, se proceden a lanzar los casos de prueba ejecutando el comando desde la raiz de este proyecto usando una consola de comandos preferiblemente, para ello se debe:

Clonar este repositorio desde la opción de git ejecutando:

`git clone https://github.com/dhenaotoro/automatizacion-semana5-kraken.git`

Posteriormente, se debe asegurar antes de que:

1) Si es windows, tener instalado android studio y definir las siguientes rutas en la variable de ambiente principal path del sistema de windows:

- C:\Program Files\nodejs
- C:\Users\daniel.henao\AppData\Roaming\npm
- C:\Program Files\Android\Android Studio
- C:\Users\daniel.henao\AppData\Local\Android\Sdk\platform-tools

2) Tener instalada la versión de node js 16.13.0 ya instalada

3) Tener instalado globalmente kraken en la maquina, en caso de que no, entonces ejecutar: npm install kraken-node -g

4) Tener instalado localmente kraken en la maquina, en caso de que no, entonces ejecutar: npm install kraken-node

5) Tener instalada la librería appium a nivel global, en caso de que no, entonces ejecutar: npm install -g appium

Cuando todo lo anterior esté asegurado. Se requiere ejecutar: npm install

Y de esta forma es posible lanzar las pruebas, por tanto, se debe ejecutar el siguiente comando, con uso de gitbash (Si es windows):

`.\node_modules\kraken-node\bin\kraken-node run`

Abrir el archivo index.html de la ultima carpeta de reportes generada en reports. Allí se verán los resultados de la ejecución de forma estadística.

<H2><b>Ejecución pruebas de tags:</b></H2>
Para las pruebas que corresponden a tags se realizó lo siguiente:
<ul>
 <li> Clonar el repositorio. </li>
 <li> Instalar las librerías de node js </li>
 <li> Creación de nuevo feature tag.feature </li>
 <li> Creación de los 5 escenarios como: 
      <ul><li> Login y creación de un tag y posteriormente sea visible dentro del listado de tags </li>
          <li> Login y edición del tag recién creado editando el titulo y el color, posteriormente se regresa al listado de tags y se valida que el nombre cambio </li>
          <li> Login y tratar de eliminar el tag creado dando en el modal el rechazo de esta acción, posteriormente se regresa al listado de tags </li>
          <li> Login y creación de un tag sin nombre dando como resultado un mensaje de error como el siguiente "You must specify a name for the tag". </li>
          <li> Login y eliminación del tag aceptando la confirmación del modal, posteriormente se regresa al listado de tags </li>
      </ul>
  </li>
 </ul>
 <h4><b> Es importante resaltar que para el flujo de las pruebas E2E se manejan 5 usuarios diferentes lo cual con la función wait se espera a que el primer usuario termine la acción para que el siguiente usuario empiece con el escenario es decir: Usuario 2 espera a que finalice el Usuario 1, El usuario 3 espera a que finalice el usuario 2 y así sucesivamente hasta llegar al último usuario. <b></h4>

  
