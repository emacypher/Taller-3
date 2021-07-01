# Taller-3
Proyecto del Taller de Practica y Desarrollo e Implementacion

# Descargar el proyecto

# Descargar el programa XAMPP

# Inicializar XAMPP con APACHE y MYSQL

# Realizar npm install en carpeta api y en carpeta client por separado.

# Crear en envirement sample 
 - .env
 - DATABASE = (Nombre sugerido ayudahardware)
 - DATABASE_HOST = (El que le indique el programa XAMPP)
 - DATABSE_PORT = (El que le indique el programa XAMPP)
 - DATABASE_USER = (sugerido "root")
 - DATABASE_PASSWORD = (ninguna)
 
# Realizar los siguientes comandos parado desde la carpeta api para crear la db y migrar los datos
 - npx sequelize-cli db:create
 - npx sequelize-cli db:migrate
 - npx sequelize-cli db:seed:all

# Realizar los siguientes comandos
 - npm start (parado desde api)
 - si todo funciona correctamente deberia tener el siguiente mensaje en la consola
 - [nodemon] 2.0.7
 - [nodemon] to restart at any time, enter `rs`
 - [nodemon] watching path(s): *.*
 - [nodemon] watching extensions: js,mjs,json
 - [nodemon] starting `node app.js`
 - Servidor iniciado en el puerto 5000
 - Executing (default): SELECT 1+1 AS result
 - Connect
 - npm start (parado desde client en una terminal diferente).
 - si todo funciona correctamente se abrira una ventana en su navegador con el sistema funcionando.
