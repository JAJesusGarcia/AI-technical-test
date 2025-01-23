# AI-technical-test

## Frontend para la Aplicación de Detección de Cáncer

Este proyecto implementa un frontend avanzado para análisis de imágenes histológicas de cáncer de mama y próstata, utilizando **Next.js** y **React**.

### Contenido

1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Tecnologías](#tecnologías)
3. [Instalación](#instalación)
4. [Ejecución con Docker](#ejecución-con-docker)
5. [Mejoras](#mejoras)

### Descripción del Proyecto

Herramienta de diagnóstico de cáncer que utiliza redes neuronales para identificar marcadores clave:

- **Mama**: KI67, Her2, Estrógeno, Progesterona
- **Próstata**: Gleason

Funcionalidades principales:

- Carga de imágenes para análisis
- Visualización de resultados de IA
- Correcciones manuales
- Asociación de datos procesados con imágenes originales

### Tecnologías

- Next.js
- React
- Tailwind CSS
- Docker
- ESLint
- Prettier

### Instalación

#### Prerrequisitos

- Node.js (v18+)
- npm (v8+)

#### Pasos de Instalación

```bash
git clone https://github.com/JAJesusGarcia/AI-technical-test.git
cd tu-repo
npm install
```

#### Configuración de Variables de Entorno

Crea un archivo `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

#### Ejecución en Desarrollo

```bash
npm run dev
```

Accede a: http://localhost:3000

### Ejecución con Docker

#### Construcción de Imagen

```bash
docker build -t frontend-app .
```

#### Ejecución del Contenedor

```bash
docker run -d -p 3000:80 --name frontend-container frontend-app
```

#### Detención del Contenedor

```bash
docker stop frontend-container && docker rm frontend-container
```

### Mejoras

#### Funcionalidad

- Navegación simplificada
- Redirección automática para usuarios no autenticados
- Gestión de estado con AuthContext

#### Experiencia de Usuario

- Diseño limpio y accesible
- Feedback instantáneo
- Totalmente responsive

#### Despliegue

- Dockerfile para portabilidad
- Documentación detallada

### Demostración y Despliegue

- [Video de Demostración]
- Accede a la aplicación: https://ai-technical-test.vercel.app/

---

_Proyecto diseñado para ser mantenible y escalable. ¡Cualquier duda, no dudes en contactar!_ 🚀
