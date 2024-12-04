---
title: Calculadora de Campos - Concatenar Cadenas
---

# Concatenar cadenas

La concatenación de cadenas es una operación que une o combina dos o más textos (cadenas de caracteres) en uno solo. En los Sistemas de Información Geográfica (SIG), esta operación es muy útil para crear nuevos campos con información combinada, como identificadores únicos, nombres completos, o referencias concatenadas.

## Utilidades de la concatenación en SIG

- **Generar identificadores únicos:** Combina diferentes campos para crear identificadores únicos en tus datos espaciales.
- **Facilitar análisis posteriores:** Prepara tus datos para búsquedas, agrupamientos o uniones basadas en campos concatenados.
- **Automatizar tareas repetitivas:** Permite crear información derivada de manera eficiente sin necesidad de editar cada registro manualmente.

## Ejemplo práctico 1: Concatenar códigos
En la capa de <a href="https://www.dropbox.com/scl/fi/863srrt8uyxq6tiv26mk1/geodata-concatenating-strings.gpkg?rlkey=h1oi3lzyrrromdkpd4ou682fk&st=vsp08zsi&dl=0" target="_blank">Antioquia</a> queremos concatenar el código del departamento (`codigo_departamento`) y el código del municipio (`codigo_municipio`) en un nuevo campo llamado `codigo_concatenado_del_municipio`. Este campo puede servir como identificador único para cada municipio.

### Antes de comenzar

- Asegúrate de que la tabla de atributos tiene los campos `codigo_departamento` y `codigo_municipio`.
- Verifica que los datos en estos campos están completos y son consistentes.

![Parámetros de entrada](https://dl.dropboxusercontent.com/scl/fi/wi029aby0p6oa8dwbzadz/concatenar-cadenas-input.png?rlkey=z2xzk4co5x98e77ecaznn1lq1&dl=0)

### Pasos en QGIS

1. **Abrir la tabla de atributos**:
   - Haz clic derecho sobre la capa vectorial en el panel de capas y selecciona **Abrir tabla de atributos**.

2. **Activar la calculadora de campos**:
   - En la tabla de atributos, haz clic en el icono de **Calculadora de Campos**.

3. **Configurar la calculadora de campos**:
   - En la sección **Nombre del nuevo campo**, escribe: `codigo_concatenado_del_municipio`.
   - En **Tipo de campo**, selecciona: `Texto (string)`.
   - En **Longitud del campo**, ajusta el valor según la cantidad de caracteres que necesitas, en este caso escogeremos `5`.
   - En la caja de **Expresión**, escribe la siguiente fórmula para concatenar los campos:
     ```
     "codigo_departamento" ||  "codigo_municipio"
     ```
     Esta fórmula:
     - El operador `||` se utiliza para concatenar los valores de los campos.
     - Toma el valor del campo `codigo_departamento` y lo concatena con el valor del campo `codigo_municipio`.

     ![Parámetros de entrada](https://dl.dropboxusercontent.com/scl/fi/c2q1z14ae2c2hb35yv10v/concatenar-cadenas-field-calculator.png?rlkey=85efrdr7molwqd3mewzisbh3p&dl=0)


4. **Ejecutar y guardar**:
   - Haz clic en **Aceptar** para aplicar la operación.
   - Revisa el nuevo campo en la tabla de atributos para verificar que los valores están concatenados correctamente.

### Resultado esperado

El campo `codigo_concatenado_del_municipio` tendrá valores como:

| codigo_departamento | codigo_municipio | codigo_concatenado_del_municipio |
|---------------------|------------------|----------------------------------|
| 05                  | 001              | 05001                          |
| 05                  | 002              | 05002                          |
| 05                  | 003              | 05003                          |
| ...                 | ...              | ...                            |

![Parámetros de entrada](https://dl.dropboxusercontent.com/scl/fi/wehrtsl6spb5z4ula1lyr/concatenar-cadenas-results.png?rlkey=sxwpcocuvm3qmqhfxmi3azcc6&dl=0)


## Recomendaciones al concatenar cadenas

- ✅ Revisa los datos de entrada para evitar valores nulos o inconsistentes.
- ⚠️ Utiliza comillas dobles (`"`) para referenciar los nombres de los campos en la fórmula.
- ⚠️ Utiliza comillas simples (`'`) para encerrar cadenas de texto en la fórmula.
- ⚠️ Los números van sin comillas en la fórmula de concatenación pero estos se convertirán a texto.
- ✅ Usa separadores claros (como guiones o guiones bajos) si los valores concatenados deben ser legibles.
- ✅ Si necesitas una concatenación compleja, utiliza funciones avanzadas de la calculadora de campos.

Volver a [tutoriales](/tutoriales)
