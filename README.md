# Primer Parcial 2024 Arquitectura Orientada a Servicios

## Descripción 

Servicio de API REST del primer parcial de la asignatura Arquitectura orientada a servicios (SOA), desarrollado con Node.js , Express y Postgresql.

Esta API permite obtener y almacenar información de productos varios, siempre y cuando el usuario este autenticado, registrando en una base de datos de posgrest. La API cuenta con las siguientes funciones: 

- Autorización con JWT Bearer Auth
- Validación de parametros de entrada
- Manejador de errores


## Instalación

### Clonar el repositorio:
```
    git clone https://github.com/Cactuswow/primer-parcial-arquitectura.git
    cd primer-parcial-arquitectura/
```

### Instalación Manual
```
    npm install
```
## Tabla de contenido
- [Comandos](#Comandos)
- [Variables de Entorno](#Variables-de-Entorno)
- [Estructura del Proyecto](#Estructura-del-Proyecto)
- [API Endpoints](#API-Endpoints)

## Comandos
Run Local:
```
    npm run dev
```
## Variables de Entorno (.env)
```
###> CONFIG SERVER <####
PORT = 8000

###> DB_CONNECTION ### 
BD_URL = postgres://postgres:1234@127.0.0.1:5432/postgres

###> SECRET_KEY ###
JWT_SALT = empanada

```

## Estructura del Proyecto
```
src\
 |--config\         # Variables de entorno y configuración 
 |--controllers\    # Controladores
 |--db\             # Sentencias SQL
 |--middlewares\    # Middleware Personalizados
 |--models\         # Postgres models (data layer) 
 |--routes\         # Rutas del sistema
 |--services\       # Servicios de conexión BD y Token 
 |--validator\      # Esquemas de validación
 |--index.js        # Express app
```


## API Endpoints

<code>POST /auth</code> 
- **body:** 
    - **name**:  requerido
	- **email**: requerido
    - **password**:  requerido

<code>GET /api/product</code> 

- Response
    - **success:** boolean
    - **msg :** string
    - **data :** json
 
<code>GET /api/product/:id</code> 
- Request
    - **params:**
        - **id**:  requerido
- Response
    - **success :** boolean
    - **msg :** string
    - **data :** json
    
<code>POST /api/product</code>
- Request
    - **body:**
        - **name** :  requerido
        - **description** :  requerido
        - **price**: requerido
- Response
    - **success :** boolean
	- **msg :** string
    - **data :** json

<code>PUT /api/product</code>
- Request
	- **params**
		 - **id** :  requerido
    - **body**       
        - **name**: requerido
        - **description**: requerido
        - **price**: requerido
- Response
    - **success :** boolean
    - **msg :** string
	- **data :** json

<code>DELETE /api/product/:id</code> 
- Request
    - **params:**
        - **id** : requerido 
- Response
    - **success :** boolean
    - **msg :** string 
	- **data :** array
