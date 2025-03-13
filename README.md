# multiple-sorting-array

`multiple-sorting-array` es una librería ligera y sencilla para ordenar arrays en TypeScript utilizando múltiples criterios de ordenación. Permite definir varias funciones de ordenación que se aplican secuencialmente para ordenar los elementos de un array.

## Instalación

Puedes instalar la librería utilizando npm:

```bash
npm install multiple-sorting-array
```

## Uso

La librería proporciona una función `sortArray` que toma un array y una o más funciones de ordenación. Cada función de ordenación toma un elemento del array y devuelve un número que se utiliza para ordenar los elementos.

### Ejemplo básico

```typescript
import { sortArray } from "multiple-sorting-array";

const array = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];

// Ordenar primero por edad y luego por nombre
const sortedArray = sortArray(
  array,
  (item) => item.age,
  (item) => item.name
);

console.log(sortedArray);
// Output:
// [
//     { name: 'Alice', age: 25 },
//     { name: 'Charlie', age: 25 },
//     { name: 'Bob', age: 30 }
// ]
```

## Funcionamiento

La función `sortArray` ordena el array utilizando las funciones de ordenación proporcionadas en el orden en que se pasan. Si dos elementos son iguales según la primera función de ordenación, se utiliza la segunda función para desempatar, y así sucesivamente.

## Tipos genéricos

La función `sortArray` es genérica y puede trabajar con cualquier tipo de dato. Las funciones de ordenación deben devolver un número que se utilizará para comparar los elementos.

```typescript
export const sortArray = <T>(array: T[], ...by: ((t: T) => number)[]) =>
  array.sort((a, b) => {
    for (const f of by) {
      const [fa, fb] = [a, b].map((t) => f(t));
      if (fa !== fb) return fa - fb;
    }
    return 0;
  });
```
