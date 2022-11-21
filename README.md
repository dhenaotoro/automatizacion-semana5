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

<h4><b>Nota: Es importante resaltar que para el flujo de las pruebas E2E se realizó de forma secuencial así se que se recomienda ir apagando feauture y ejecutando cada escenario independiente para apagar las pruebas se realizo la estrategia de cambiar la extensión de cada archivo es decir de .feature se paso a .txt dejando solo el feature del escenario que se quiere probar. <b></h4>
 

<h1>Pruebas E2E GhostV5.22</h1>
 Para ejecutar los escenarios y teniendo clonado el repositorio se debe revisar el ambiente local este ubicado sobre la rama <i>"Main"</i> de no ser así se debe ejecutar el siguiente comando <i>"git checkout main"</i> allí se encontrará los escenarios respectivos y los screenshots de cada escenario ejecutado. 
 
 Para tomar los screenshots de cada escenario dentro de la herramienta de kraken se utilizó el generador de resultados que kraken nos facilita, dentro de cada ejecución del comando <i>"./node_modules/kraken-node/bin/kraken-node run en un gitBash"</i> se genera un reporte dentro de la carpeta <i>"reports"</i> de tal forma se copiaban las imágenes generadas y se almacenaban de forma organizada en la carpeta <i> Screenshots </i>. Las funciones y escenarios fueron las siguientes:


<H2><b>Ejecución pruebas de page:</b></H2>
Para la ejecucion de las pruebas correspondientes a pages se debe:
<ul>
<li> Tener clonado el repositorio </li>
<li> Tener instalado previamente las librerias de Node Js </li>
<li> Ejecucion secuencial de los siguientes features se recomiendo apagar (Cambian la extensión de las otras pruebas a .txt) las demas pruebas mientras se va probando cada escenario  </li>
 <ul><li> Crear una nueva pagina</li>
     <li> Editar una pagina </li>
     <li> Marcar en UnPublish la nueva pagina </li>
     <li> Borrar pagina </liZ
     <li> Marcar en Scheadule la pagina </li> 
 </ul>
 </ul>
<H2><b>Ejecución pruebas de post:</b></H2>
Para la ejecucion de las pruebas correspondientes a pages se debe:
<ul>
<li> Tener clonado el repositorio </li>
<li> Tener instalado previamente las librerias de Node Js </li>
<li> Ejecucion secuencial de los siguientes features se recomiendo apagar (Cambian la extensión de las otras pruebas a .txt) las demas pruebas mientras se va probando cada escenario  </li>
 <ul><li> Crear un nuevo post</li>
     <li> Marcar como Scheadule el post</li>
     <li> Marcar como draft el post </li>
     <li> Marcar como draft el post y borrarlo </liZ
     <li> Marcar como publis el nuevo post </li> 
 </ul>
 </ul>

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

<h1>Pruebas E2E GhostV3.42</h1>
Para ejecutar las funciones y escenarios en la versión 3.42 se debe:
<ul>
 <li> Instalar de forma local ghost para ello se ubica la carpeta donde se realizará la instalación y ejecutamos <i> ghost install 3.42 local </i>
 <li> Ejecutar el comando <i>npm install sqlite3 --save</i> para isntalar el motor de base de datos Sqllite3. </li>
 <li> Ubicarse en la rama <i>main_Ghost_3.42</i> para ello se debe realizar el comando <i>Git checkout main_Ghost_3.42</i>
 <li> Cambiar las credenciales y URL segpun corresponda a la instalación para ello se debe modificar el archivo <i> Properties.json</i>
 </ul>
 
 al igual que la versión 5.22 se recomienda la siguiente nota:
 
<h4><b>Nota: Es importante resaltar que para el flujo de las pruebas E2E se realizó de forma secuencial así se que se recomienda ir apagando feauture y ejecutando cada escenario independiente para apagar las pruebas se realizo la estrategia de cambiar la extensión de cada archivo es decir de .feature se paso a .txt dejando solo el feature del escenario que se quiere probar. <b></h4>
 
 Para tomar los screenshots de cada escenario dentro de la herramienta de kraken se utilizó el generador de resultados que kraken nos facilita, dentro de cada ejecución del comando <i>"./node_modules/kraken-node/bin/kraken-node run en un gitBash"</i> se genera un reporte dentro de la carpeta <i>"reports"</i> de tal forma se copiaban las imágenes generadas y se almacenaban de forma organizada en la carpeta <i> Screenshots_V3.42</i>. Las funciones y escenarios son los mismos descritos anteriormente.
 
 Ventajas y desventajas en la wiki del proyecto 
  
