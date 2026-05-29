# 🚀 Proyecto ABP - Backend & Seguridad

Este repositorio contiene la infraestructura de backend, base de datos y seguridad desarrollada para la defensa del proyecto ABP (Aprendizaje Basado en Proyectos) del módulo de **Programación Back End**.

## 🛠️ Stack Tecnológico (Infraestructura)

El proyecto está construido bajo una arquitectura moderna Serverless y DBaaS, utilizando las siguientes herramientas de la industria:

* **Control de Versiones:** GitHub
* **Despliegue y Hosting (Serverless):** [Vercel](https://vercel.com/) (Node.js API)
* **Base de Datos (DBaaS):** [Supabase](https://supabase.com/) (PostgreSQL)
* **Autenticación y Seguridad:** Google OAuth 2.0 integrado vía Supabase Auth.

## ✨ Características Principales

1. **Deploy Continuo:** Configurado mediante Vercel. Cualquier `commit` en la rama principal actualiza el proyecto en producción automáticamente.
2. **Endpoint de Prueba:** API básica en `api/index.js` que retorna el estado del servidor.
3. **Seguridad OAuth 2.0:** Inicio de sesión seguro con Google, eliminando la necesidad de almacenar contraseñas.
4. **Sincronización de Datos:** Los usuarios autenticados se registran de forma segura en la bóveda de *Authentication* y se sincronizan automáticamente con la tabla pública `usuarios` en PostgreSQL.
