---
title: Geoproceso Disolver
---
# Herramienta Disolver en SIG

La herramienta **Disolver** es una funcionalidad común en los Sistemas de Información Geográfica (SIG) que permite combinar o unir entidades geométricas que comparten un atributo o propiedad en común. Esto genera una nueva capa simplificada al eliminar las fronteras internas entre las entidades combinadas.

## Utilidades de la herramienta Disolver

- **Simplificación de datos geográficos:** Se utiliza para reducir la complejidad de las capas de datos al agrupar entidades similares en una sola.
- **Análisis espacial más eficiente:** Facilita los cálculos y análisis al trabajar con un menor número de entidades.
- **Preparación de datos para visualización:** Ayuda a generar mapas más limpios y legibles.
- **Agrupación basada en atributos:** Permite agrupar entidades según un atributo clave, como regiones, municipios o cuencas hidrográficas.

## Ejemplo práctico

Supongamos que queremos obtener una capa que represente las subregiones del departamento de Antioquia en Colombia. Partimos de una capa con los polígonos de todos los municipios de Antioquia y un atributo llamado `subregion` que relaciona a cada municipio la subregión a la que pertenece.

### Antes de usar Disolver
- Tenemos una capa con 125 entidades espaciales que representan los municipios de Antioquia.
- Atributos importantes: 
  - `codigo_departamento`
  - `nombre_departamento`
  - `codigo_municipio`
  - `nombre_municipio`
  - `subregion`

### Proceso

1. Selecciona la herramienta **Disolver** localizada en:
   - Menú **Vector > Herramientas de geoproceso > Disolver**.
2. Configura los parámetros según tus necesidades:
   - Si **no seleccionas ningún campo**, se combinarán todas las entidades en una sola.
   ![Parámetros de entrada](https://dl.dropboxusercontent.com/scl/fi/f1julw1uvmmrgqpdl75r5/dissolve-parameters-input0-selected.png?rlkey=l7b5litbdbdx9iafa1awrhrpf&dl=0)
   ![Parámetros de entrada](https://dl.dropboxusercontent.com/scl/fi/dhyhke1guzieib7wpmzdb/dissolve-parameters-input0-results.png?rlkey=5klgwwknht36hs7h6bt7z46ot&dl=0)
   
   - Si seleccionas un campo, como `subregion`, se combinarán las entidades que comparten el mismo valor en ese campo.
   ![Parámetros de entrada usando Subregión](https://dl.dropboxusercontent.com/scl/fi/zet8bwi1naiiwiq2dl1fy/dissolve-parameters-inputSubregion-selected.png?rlkey=ywzxawyta263a4yttti1ndnfc&dl=0)
   ![Parámetros de entrada usando Subregión](https://dl.dropboxusercontent.com/scl/fi/3zqmjvzdla2qg9b5evr1k/dissolve-parameters-inputSubregion-results.png?rlkey=jr7p47a4hblz7btujc4hlgni6&dl=0)

3. Ejecuta el proceso para combinar los municipios en función de su subregión.

### Después de usar Disolver
- Obtendrás polígonos combinados que representan las subregiones de Antioquia.
- Revisa la tabla de atributos para verificar que solo el campo `subregion` quedó como atributo único para los registros.

El resultado será una nueva capa con polígonos que representan las subregiones de Antioquia, eliminando las divisiones internas entre los municipios.

## Recomendaciones al usar Disolver

- ✅ Verifica que los atributos por los cuales deseas disolver sean consistentes y no tengan errores tipográficos.
- ✅ Se recomienda usar campos de códigos más que de nombres para evitar problemas de ortografía o duplicados.
- ✅ Configura correctamente los parámetros de disolución, como los atributos y conservar registros separados en caso de requerirlo.

Volver a [tutoriales](/tutorial-sig/tutoriales)
