# 🎯 Netfling

![GitHub](https://img.shields.io/badge/GitHub-Netfling-blue?logo=github)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=next.js)
![Flask](https://img.shields.io/badge/Flask-2.0.1-000000?logo=flask)
![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?logo=mysql&logoColor=white)
![Educational](https://img.shields.io/badge/Propósito-Educativo-green)

## 📋 Descripción

**Netfling** es un proyecto educativo diseñado para demostrar cómo funcionan los ataques de phishing. Recrea una interfaz de inicio de sesión similar a Netflix que captura credenciales. Este proyecto se creó **ÚNICAMENTE CON FINES EDUCATIVOS** para entender los mecanismos del phishing y mejorar la concientización sobre ciberseguridad.


## 🧩 Estructura del Proyecto

```
netfling/
├── frontend/             # Aplicación frontend con Next.js
│   ├── app/              # Estructura del App Router
│   │   └── login/        # Página de inicio de sesión tipo Netflix
│   │       └── page.tsx  # Componente principal de inicio de sesión
│   └── public/           # Activos estáticos
│       └── netflix-logo.png
│
├── backend/              # Aplicación backend con Flask
│   └── app.py            # Servidor API con conexión a la base de datos
│
└── README.md             # Documentación del proyecto
```

## 🛠️ Tecnologías Utilizadas

- **Frontend**:
    - Next.js 14 con App Router
    - React 18
    - TypeScript
    - Tailwind CSS

- **Backend**:
    - Python 3.9+
    - Flask
    - Flask-CORS
    - MySQL Connector

- **Base de Datos**:
    - MySQL

## 📦 Instalación

### Prerequisitos

- Node.js 18+
- Python 3.9+
- Base de datos MySQL

### Configuración del Backend

1. Crear una base de datos MySQL llamada `netfling`:

```sql
CREATE DATABASE netfling;
USE netfling;
CREATE TABLE victims (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        ip VARCHAR(45),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

2. Instalar las dependencias de Python:

```bash
cd backend
pip install flask flask-cors mysql-connector-python
```

3. Configurar la conexión a la base de datos en `app.py` si es necesario.

### Configuración del Frontend

```bash
cd frontend
npm install
```

## 🚀 Uso

1. **Iniciar el servidor backend**:

```bash
cd backend
flask run
```

El servidor Flask se ejecutará en http://localhost:5000

2. **Iniciar el servidor de desarrollo frontend**:

```bash
cd frontend
npm run dev
```

La aplicación Next.js se ejecutará en http://localhost:3000

3. **Acceder a la aplicación**:
     - Navega a http://localhost:3000/login para ver la demostración de phishing
     - Cuando se envían las credenciales, se almacenan en la base de datos MySQL
     - Los usuarios son redirigidos a la página de inicio de sesión real de Netflix

## 🔍 Cómo Funciona

1. El usuario visita la página falsa de inicio de sesión de Netflix
2. El usuario introduce sus credenciales (correo electrónico y contraseña)
3. Al enviarlas, el frontend manda las credenciales a la API backend
4. El backend almacena las credenciales en la base de datos MySQL
5. El usuario es redirigido a la página de inicio de sesión real de Netflix

## 🎓 Valor Educativo

Este proyecto demuestra:
- Cómo los sitios de phishing pueden imitar sitios web legítimos
- Flujo de datos de frontend a backend en aplicaciones web
- Validación y envío de formularios
- Técnicas de redirección utilizadas en phishing
- La importancia de verificar las URL antes de introducir credenciales

---

