"# automatizacion-semana5-kraken" 

Conformación:

| Apellidos | Nombres | Correo @uniandes | Usuario de GitHub |
| --------- | ------- | ---------------- | ----------------- |
| Beltran Beltran | Laura Andrea | la.beltranb1@uniandes.edu.co |  laubeltranandes |
| Buitrago Corredor | Dario Alexander | da.buitragoc1@uniandes.edu.co |  dario-buitrago-andes |
| Cardenas Castañeda | Andres Camilo | ac.cardenasc1@uniandes.edu.co | accardenasc1 |
| Henao Toro | Daniel Felipe | df.henaot1@uniandes.edu.co | dhenaotoro |

Pasos previos para el lanzamiento de las pruebas:

Cuando se ejecute por primera vez la aplicación de Ghost, se mostrará la pantalla de setup (onboarding).
En esa pantalla es necesario que manualmente se defina un usuario con los siguientes datos:

-Campo Set tile
-Campo Full name
-Campo Email address (Guarda este dato porque lo usarás más adelante)
-Campo Password (Guarda este dato porque lo usarás más adelante)

Posteriormente, se debe dar clic en el botón "Create account & start publishing ->"

Luego, CLick en el botón "Write your first post"

Luego, clic en el botón "Posts"

Finalmente se ubicará sobre el dashboard.

Ahora, debes tener en cuenta que los datos de "Email address" y "Password", deben ponerse en el archivo properties.json que se encuentra en la raiz del proyecto, según corresponda.

Para más detalle ver el siguiente gif:


Pasos para el lanzamiento de las pruebas:

Cuando el usuario se encuentre creado, se proceden a lanzar los casos de prueba ejecutando el comando desde la raiz de este proyecto usando la consola
de comandos gitBash preferiblemente, para ello se debe:

Clonar este repositorio desde la opción de git ejecutando:

git clone https://github.com/dhenaotoro/automatizacion-semana5-kraken.git

Posteriormente, se debe ejecutar:

npm install

Finalmente, se debe ejecutar el comando:

.\node_modules\kraken-node\bin\kraken-node run

Abrir el archivo index.html de la ultima carpeta de reportes generada en reports. Allí se verán los resultados de la ejecución de forma estadística.