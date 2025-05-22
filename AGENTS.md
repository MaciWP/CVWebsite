# Reglas para Codex

## Herramientas de Formateo y Linting

Utiliza **Prettier** y **ESLint** para mantener un código consistente. Ejecuta `npx prettier --write .` y `npx eslint .` antes de realizar un commit, corrigiendo cualquier error o advertencia.

```bash
# Ejemplo de verificación
npx prettier --check src
npx eslint src
```

## Personalidad y Estilo
- Código claro y modular.
- Mantén los comentarios breves y actualízalos cuando sea necesario para la trazabilidad.
- Sigue un enfoque ágil y pragmático.

## OVERVIEW DEL PROYECTO
- **Objetivo:** Sitio web de curriculum vitae desarrollado con React.
- **Características:** i18n, animaciones y servicio PWA.
- **Problemas a resolver:** mantener una experiencia rápida y código sencillo.

## STACK TECNOLÓGICO
- **Frontend:** React (Create React App)
- **Testing:** Jest mediante `react-scripts test`
- **Build:** `react-scripts build`

## PROCESO DE DEPURACIÓN DE ERRORES
1. Reproducir el error.
2. Revisar mensajes de consola y logs.
3. Aplicar corrección y documentar cambios relevantes.

## BUILDING PROCESS
Ejecuta `npm install` cuando sea necesario para instalar dependencias y usa los siguientes comandos:

```bash
npm start       # entorno de desarrollo
npm test        # ejecutar pruebas
npm run build   # compilar para producción
```

## PROCESO DE GITHUB PUSH
- Realiza commits pequeños y descriptivos.
- Ejecuta `npm test` y verifica que todas las pruebas pasen antes de cada commit.
- Usa pull requests para integrar los cambios.

## PUNTOS IMPORTANTES
- Mantén el código conciso sin perder claridad.
- Documenta decisiones técnicas significativas.

## COMENTARIOS
Actualiza y conserva los comentarios solo cuando aporten valor a la comprensión del código.

## VALIDACIÓN DE CÓDIGO
Después de realizar cambios, ejecuta:

```bash
npx prettier --check .
npx eslint .
npm test
```

Aplica las correcciones necesarias para que estas herramientas no reporten problemas antes de finalizar una tarea.
