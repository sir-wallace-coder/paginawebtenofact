# TecnoFact - Sitio Web Corporativo

Sitio web oficial de TecnoFact, empresa especializada en soluciones tecnológicas para empresas. Basado en la plantilla moderna **Finatex** con Next.js 14 y TypeScript.

## Características

- **Next.js 14**: Framework React moderno con App Router
- **TypeScript**: Tipado estático para mayor robustez
- **Tailwind CSS**: Framework CSS utility-first
- **Responsive Design**: Adaptable a todos los dispositivos
- **Componentes Modernos**: Header, Footer, Sliders, Services, Blog, etc.
- **Animaciones**: Framer Motion para transiciones suaves
- **Carousels**: React Slick y Swiper para contenido dinámico

## Servicios Destacados

- **Facturación Electrónica**: Cumplimiento SAT automatizado
- **Desarrollo Web**: Sitios modernos y aplicaciones
- **Consultoría IT**: Asesoría tecnológica especializada
- **Soporte Técnico**: Asistencia 24/7

## Tecnologías

- Next.js 14 con TypeScript
- Tailwind CSS
- Framer Motion
- React Slick & Swiper
- Phosphor Icons
- SCSS/Sass

## Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

Abrir [http://localhost:3000](http://localhost:3000) para ver el resultado.

## Estructura del Proyecto

```
/
├── src/
│   ├── app/                 # App Router (Next.js 14)
│   │   ├── about/          # Páginas sobre nosotros
│   │   ├── blog/           # Blog y artículos
│   │   ├── contact/        # Páginas de contacto
│   │   ├── service/        # Servicios
│   │   └── page.tsx        # Página principal
│   ├── components/         # Componentes React
│   │   ├── Header/         # Navegación y menús
│   │   ├── Footer/         # Pie de página
│   │   ├── Section/        # Secciones de contenido
│   │   └── Slider/         # Carousels y sliders
│   ├── data/              # Datos JSON
│   ├── styles/            # Estilos SCSS
│   └── type/              # Tipos TypeScript
├── public/                # Archivos estáticos
├── logos/                 # Logos de TecnoFact
└── netlify.toml          # Configuración de despliegue
```

## Despliegue

El sitio está configurado para desplegarse en **Netlify** con soporte completo para Next.js:

1. Conectar repositorio a Netlify
2. La configuración está en `netlify.toml`
3. Build automático con `npm run build`
4. Plugin oficial de Netlify para Next.js

## Contacto

- **Teléfono**: +52 55 1234 5678
- **Email**: contacto@tecnofact.mx
- **Ubicación**: Ciudad de México, México

## Licencia

© 2024 TecnoFact. Todos los derechos reservados.
