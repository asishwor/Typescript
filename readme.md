# What i learn about typescript👍

    - types in define in typescript
    - array type defined
    - object in typescript
    - aliasis and interface
     - extend inteface

# InterView Questions 👍

1.  `can we compile multiple file merge inside one ts file? `

- `can we run ts file directly` ?

  - NO, we cant't run this file direct it will need to convert into js file.

# data types in types script !

    - number - 125525
    - String - "hello world "
    - boolean - true / false

# watch module

    - tsc file.ts --watch

    - array in typescript:

# [Array In Typescript](https://github.com/asishwor/Typescript/blob/main/array.ts) - Array without data types

    - push and update array operations in ts

    - mixed array

    - define array

`"let data: string[] = ["anil", "jeyo", "merio"]"`

# [OBJECT IN TYPESCRIPT](https://github.com/asishwor/Typescript/blob/main/object.ts) 👇

`Types Object`

    - default typed object
    - update Property
    - add new property
    - define custom type for object
    - use any with object

# [union types in typescript](https://github.com/asishwor/Typescript/blob/main/uniontypes.ts) 👇

    - Union types are used when a value can be more than a single type.

    Such as when a property would be `string` or `number`.

- how to define union types ?
  Using the | we are saying our parameter is a `string` or `number` or `bolean`

# [TypeScript Type Aliases and Interfaces](https://github.com/asishwor/Typescript/blob/main/interface_aliasis.ts) 👇

     ALIASES 👍
    - Type Aliases allow defining types with a custom name (an Alias).
    - Type Aliases can be used for primitives like string or more complex types such as `objects` and `arrays`:

INTERFACES 👍

- Interfaces are similar to type aliases, except they only apply to object types.
  -Extending an interface means you are creating a new interface with the same properties as the original, plus something new. `interface extends colorInterface`

# [Typescript Function ](https://github.com/asishwor/Typescript/functionInTypescript.ts) 👇

- Parameter `Function parameters are typed with a similar syntax as variable declarations`
- Default Parameters
- define a normal function , define function type, add params in function , define params type, optional params with type
  `Named parameters`
  Typing named parameters follows the same pattern as typing normal parameters.
  `Rest Parameters`
  Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
  `optional Parameters`
  the `?` operator here marks parameter `c` as optional ` (a;number, b:number, c?:number)`
