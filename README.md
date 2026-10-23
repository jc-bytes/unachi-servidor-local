# UNACHI · Dispositivo local

Presentación exploratoria en español para conversar sobre un equipo físico instalado en la universidad, centralización de información e informes de Investigación y Posgrado. No es una publicación oficial de UNACHI ni una cotización.

La presentación se publica únicamente en GitHub Pages desde `main`, en la raíz de este repositorio. No requiere compilación ni servicios externos para sus interacciones.

## Archivos

- `index.html`: presentación completa, con estilos, datos y scripts incorporados. Puede descargarse y abrirse sin internet.
- `investigacion.txt`: investigación y fuentes, consultadas el 22 de octubre de 2026.
- `research/catalog.json`: referencias de compra y fuentes técnicas.
- `research/cost-model.js`: modelo de capacidad y costos incorporado en la presentación.
- `research/verify-model.cjs`: verificación de cálculos y coherencia del modelo incorporado.

## Comprobación local

```sh
node research/verify-model.cjs
python3 -m http.server 8768 --bind 127.0.0.1
```

Si cambia el modelo de costos, actualizar también la copia incorporada en `index.html`. La comprobación detecta diferencias entre ambas.

Los proyectos de ejemplo son ficticios. Las respuestas y los acuerdos se guardan en el navegador de cada persona; no se suben a GitHub. El catálogo filtra las referencias investigadas y no consulta inventario en vivo. La capacidad y los costos de operación son supuestos para la reunión, pendientes de pruebas y cotizaciones.
