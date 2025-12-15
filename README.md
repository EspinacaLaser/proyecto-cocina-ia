# Cocina IA — Prototipo web  
### IA generativa en el entorno multimedia

**Cocina IA** es un prototipo web académico desarrollado para la asignatura **IA generativa en el entorno multimedia**.  
El proyecto explora un uso **crítico, consciente y ético** de la inteligencia artificial dentro de una experiencia culinaria digital.

La IA no se utiliza como autora ni como sistema autónomo, sino como **asistente creativo** integrado bajo control humano explícito.

---

## Demo (GitHub Pages)

Prototipo desplegado en GitHub Pages:  
👉 https://TU_USUARIO.github.io/proyecto-cocina-ia/

> **Nota**  
> El proyecto está configurado como una **SPA (Single Page Application)**.  
> En GitHub Pages se utiliza enrutado compatible (`HashRouter`), por lo que las rutas se acceden como:
>
> - `/#/`
> - `/#/chat`
> - `/#/despensa`

---

## Descripción general

El prototipo se articula en tres espacios principales:

### Inicio (Home)
Introducción editorial al proyecto, su contexto académico y su enfoque conceptual.

### Asistente culinario
Generación de recetas estructuradas a partir de entradas guiadas:
- Ingredientes
- Tiempo disponible
- Número de porciones

El sistema **no utiliza modelos externos ni APIs**.  
Funciona mediante un **motor híbrido propio** basado en reglas, diccionarios y plantillas predefinidas.

### Despensa
Biblioteca curada de ingredientes (muestra inicial) que incluye:
- Combinaciones habituales
- Valores nutricionales orientativos por 100 g

---

## Tecnologías utilizadas

- React + Vite
- React Router
- JavaScript
- CSS modular con variables de diseño
- Despliegue estático en GitHub Pages

> En esta fase del proyecto **no se utiliza backend ni base de datos**.

---

## Ejecutar el proyecto en local

### Requisitos
- Node.js
- npm

### Instalación
npm install

### Modo desarrollo
npm run dev

### Buildd de producción
npm run build
npm run preview

### Estructura del proyecto (resumido)
src/
├─ pages/
│  └─ Páginas principales (Home, Chat, Despensa, Filosofía)
│
├─ services/
│  └─ assistant/
│     └─ Motor híbrido del asistente culinario (reglas + plantillas)
│
├─ data/
│  └─ Datos del prototipo (ingredientes, información nutricional, etc.)
│
├─ assets/
│  └─ ia/
│     └─ Recursos generados con IA, organizados por sección

### Nota sobre recursos generados por IA
Los recursos almacenados en src/assets/ia/ han sido generados como apoyo creativo durante el desarrollo del proyecto y se integran en el prototipo como elementos editoriales.

Las decisiones finales (selección, corrección y uso) se han realizado de forma humana, crítica y documentada en la memoria del proyecto.

### Enfoque ético
Este proyecto adopta una aproximación human-in-the-loop, donde:

La IA actúa como asistente, no como autora.

El criterio creativo y técnico es siempre humano.

El uso de IA está justificado, documentado y limitado.

Se prioriza la claridad, coherencia y transparencia frente a la automatización.

## Copyright

© 2025 Ignacio Ramos Martin.

Este proyecto ha sido desarrollado con fines **educativos y académicos** como parte de la asignatura **IA generativa en el entorno multimedia**.

El código fuente, la estructura del prototipo y los contenidos editoriales son propiedad del autor, salvo que se indique lo contrario.  
No se autoriza su uso comercial sin consentimiento expreso.

Los recursos generados con apoyo de inteligencia artificial se utilizan como **material auxiliar** y no constituyen autoría autónoma de la IA.  
Todas las decisiones creativas y técnicas han sido realizadas bajo **control humano explícito**.
