---
title: Geoproceso Disolver
---

# Herramienta Disolver en SIG

La herramienta **Disolver** es una funcionalidad común en los Sistemas de Información Geográfica (SIG) que permite combinar o unir entidades geométricas que comparten un atributo o propiedad en común. Esto genera una nueva capa simplificada al eliminar las fronteras internas entre las entidades combinadas.

## Utilidades de la herramienta Disolver

1. **Simplificación de datos geográficos:** Se utiliza para reducir la complejidad de las capas de datos al agrupar entidades similares en una sola.
2. **Análisis espacial más eficiente:** Facilita los cálculos y análisis al trabajar con un menor número de entidades.
3. **Preparación de datos para visualización:** Ayuda a generar mapas más limpios y legibles.
4. **Agrupación basada en atributos:** Permite agrupar entidades según un atributo clave, como regiones, municipios o cuencas hidrográficas.

## Ejemplo práctico

Supongamos que queremos obtener una capa que represente las subregiones del departamento de Antioquia en Colombia. Partimos de una capa con los polígonos de todos los municipios de Antioquia y un atributo llamado `subregion` que relaciona a cada municipio la subregión a la que pertenece.

### Antes de usar Disolver
- Tenemos una capa con 125 entidades espaciales que representan los municipio de Antioquia.
- Atributos: `codigo_departamento`, `nombre_departamento`, `codigo_municipio`, `nombre_municipio`, `subregion`.

### Proceso
1. Selecciona la herramienta Disolver en tu software SIG.
2. Configura el atributo `subregion` como el campo clave para la disolución.
3. Ejecuta el proceso para combinar los municipios en función de su subregión.

### Después de usar Disolver
- Polígonos combinados que representan las subregiones de Antioquia.
- Revisa la tabla de atributos, evidencia que solo el campo `Subregión` quedó como atributo único para los registros.

El resultado será una nueva capa con polígonos que representan las subregiones de Antioquia, eliminando las divisiones internas entre los municipios.

## Recomendaciones al usar Disolver

1. Verifica que los atributos por los cuales deseas disolver sean consistentes y no tengan errores tipográficos.
2. Realiza un respaldo de tus datos antes de aplicar el Disolver, ya que es una operación irreversible.
3. Configura correctamente los parámetros de disolución, como los atributos y la tolerancia espacial, para obtener los resultados esperados.

