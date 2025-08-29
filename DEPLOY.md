# Guía de Despliegue - TecnoFact Website

## Preparación Completada ✅

El proyecto está completamente preparado para despliegue con:
- ✅ Plantilla Finatex configurada para TecnoFact
- ✅ Next.js 14 con TypeScript
- ✅ Configuración de Netlify (`netlify.toml`)
- ✅ Variables de entorno de ejemplo (`.env.example`)
- ✅ `.gitignore` optimizado para Next.js
- ✅ Metadatos actualizados (SEO)

## Opción 1: Despliegue Directo en Netlify (Recomendado)

### Paso 1: Preparar archivos
1. Comprimir todo el proyecto en un ZIP
2. **Excluir**: carpeta `Main/` (opcional, es solo el template original)
3. **Incluir**: todos los demás archivos y carpetas

### Paso 2: Desplegar en Netlify
1. Ir a [netlify.com](https://netlify.com)
2. Crear cuenta gratuita o iniciar sesión
3. En el dashboard: arrastrar el archivo ZIP a "Want to deploy a new site without connecting to Git?"
4. Netlify detectará automáticamente Next.js y usará la configuración de `netlify.toml`

### Configuración Automática
- **Build Command**: `npm run build`
- **Publish Directory**: `.next`
- **Node Version**: 18
- **Framework**: Next.js (detectado automáticamente)

## Opción 2: Despliegue con Git (Para actualizaciones automáticas)

### Paso 1: Subir a repositorio
```bash
git init
git add .
git commit -m "Initial commit - TecnoFact website"
git branch -M main
git remote add origin [URL_DEL_REPOSITORIO]
git push -u origin main
```

### Paso 2: Conectar en Netlify
1. En Netlify: "New site from Git"
2. Conectar repositorio (GitHub/GitLab/Bitbucket)
3. Netlify usará automáticamente `netlify.toml`

## Variables de Entorno (Opcional)

Si necesitas configurar variables de entorno:
1. En Netlify: Site settings → Environment variables
2. Usar `.env.example` como referencia
3. Agregar variables que comiencen con `NEXT_PUBLIC_`

## URL Final

Después del despliegue:
- URL temporal: `https://[random-name].netlify.app`
- Cambiar nombre: Site settings → Site details → Change site name
- Dominio personalizado: Site settings → Domain management

## Verificación Post-Despliegue

✅ Verificar que el sitio carga correctamente
✅ Probar navegación entre páginas
✅ Verificar responsive design
✅ Comprobar formularios de contacto
✅ Revisar SEO y metadatos

## Solución de Problemas

### Build Fails
- Verificar que `package.json` esté incluido
- Revisar errores en el log de build de Netlify
- Asegurar que no hay errores de TypeScript

### Páginas no cargan
- Verificar rutas en `src/app/`
- Comprobar imports y exports
- Revisar configuración de Next.js

## Contacto de Soporte

Para problemas técnicos:
- Documentación Netlify: [docs.netlify.com](https://docs.netlify.com)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)

---

**¡El proyecto está listo para desplegar!** 🚀
