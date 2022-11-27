# InterView Questions 👍

1.  `can we compile multiple file merge inside one ts file? `
    =>

2.  can we run ts file directly ?
    => NO, we cant't run this file direct it will need to convert into js file.

    # data types in types script !

    1. number // 125525
    2. String //"hello world "
    3. boolean // true/ false

    # watch module

    => tsc file.ts --watch

    //array in typescript:

# Array In Typescript

- Array without data types

- push and update array operations in ts

- mixed array

- define array

- "let data: string[] = ["anil", "jeyo", "merio"]"

# OBJECT IN TYPESCRIPT 👇

`Types Object`

- default typed object
- update Property
- add new property
- define custom type for object
- use any with object

# union types in typescript 👇

- Union types are used when a value can be more than a single type.

Such as when a property would be `string` or `number`.

- how to define union types ?
  Using the | we are saying our parameter is a `string` or `number` or `bolean`

  # TypeScript Type Aliases and Interfaces 👇

  ALIASES 👍

  - Type Aliases allow defining types with a custom name (an Alias).
  - Type Aliases can be used for primitives like string or more complex types such as `objects` and `arrays`:

  INTERFACES 👍

  - Interfaces are similar to type aliases, except they only apply to object types.
    -Extending an interface means you are creating a new interface with the same properties as the original, plus something new. `interface extends colorInterface`
