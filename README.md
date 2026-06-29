# SinFi

Aplicacion web para pedidos de buffet/cafeteria hecha con React, Vite y Tailwind CSS.

## Requisitos

Antes de arrancar, instalá:

- Node.js 18 o superior
- npm, incluido con Node.js

Opcional:

- pnpm, si preferis usarlo en lugar de npm

Para verificar que Node y npm estan instalados:

```bash
node -v
npm -v
```

## Instalacion

Desde la carpeta raiz del proyecto:

```bash
npm install
```

Si preferis pnpm:

```bash
corepack enable
pnpm install
```

## Levantar el proyecto en desarrollo

Con npm:

```bash
npm run dev
```

Con pnpm:

```bash
pnpm dev
```

Vite va a mostrar una URL local, normalmente:

```text
http://localhost:5173/
```

Abrila en el navegador para usar la app.

Si necesitas que la app escuche en una IP especifica:

```bash
npm run dev -- --host 127.0.0.1
```

## Crear una version de produccion

Para compilar el proyecto:

```bash
npm run build
```

El resultado queda en la carpeta `dist/`.

## Estructura principal

```text
src/
  app/
    App.tsx
    components/
      Home.tsx
      Cart.tsx
      Checkout.tsx
      OrderTracking.tsx
      Account.tsx
      Faq.tsx
      ...
  assets/
  styles/
public/
  assets/
```

Archivos importantes:

- `src/app/App.tsx`: pantalla principal, navegacion y estado global.
- `src/app/components/Home.tsx`: catalogo, filtros, busqueda y productos.
- `src/app/components/Cart.tsx`: carrito.
- `src/app/components/Checkout.tsx`: confirmacion/pago.
- `src/app/components/OrderTracking.tsx`: seguimiento del pedido.
- `src/app/components/Account.tsx`: cuenta, modo oscuro y perfil.
- `src/app/components/Faq.tsx`: preguntas frecuentes.
- `src/styles/`: estilos globales y tema.
- `public/assets/`: imagenes de productos que se sirven como archivos publicos.

## Subir o compartir el proyecto

Si vas a pasarle el proyecto a otra persona, comparti estos archivos y carpetas:

- `src/`
- `public/`
- `package.json`
- `package-lock.json`
- `index.html`
- `vite.config.ts`
- `postcss.config.mjs`
- `default_shadcn_theme.css`
- `ATTRIBUTIONS.md`
- `pnpm-workspace.yaml`, si se va a usar pnpm

No hace falta compartir:

- `node_modules/`
- `dist/`, salvo que quieras compartir solo la build final
- `.DS_Store`

La otra persona solo tiene que correr:

```bash
npm install
npm run dev
```

## Problemas comunes

### El puerto 5173 esta ocupado

Vite suele elegir otro puerto automaticamente. Si queres indicar uno:

```bash
npm run dev -- --port 5174
```

### Faltan imagenes

Verifica que exista la carpeta:

```text
public/assets/
```

Los productos usan rutas como `/assets/...`, por eso esa carpeta tiene que estar incluida.

### Error despues de copiar el proyecto

Borra dependencias instaladas y reinstala:

```bash
rm -rf node_modules
npm install
```

En Windows, elimina `node_modules` manualmente desde el explorador o usa PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules
npm install
```

## Scripts disponibles

```bash
npm run dev
```

Levanta el servidor local de desarrollo.

```bash
npm run build
```

Compila la app para produccion en `dist/`.
