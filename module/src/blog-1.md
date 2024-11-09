## Union Types: “One or the Other”

Think of union types like a menu with options. When you order a Biriyani, you might have option of beef Biriyani or mutton Biriyani. Here , you are getting a plate of Biriyani, but you don't care which variety it is - as long as it's one of the options on the menu . Union types let you say, "Give me a Plate of Biriyani and I'm okay with it bring either beef of mutton."

in code , this might look like :
`
type biriyani= "beef"|"mutton";

const serveBiriyani=(biriyani:biriyani):string=>{
return `Here is your ${biriyani} Biriyani sir.`
};
console.log(serveBiriyani("beef"));
//output will be - Here is your beef Biriyani sir.
`

- **What's Happening Here ?** You’re saying, “serveBiriyani can take either ‘beef’ Biriyani or ‘mutton’ Biriyani as a drink, and I’ll handle both.

- **Real-life Example :** Think about a form where someone might put their age as either a number (25) or the word “unknown.” You’re fine with either format and can handle both.

So union types make things flexible. They’re a way to say, “I’ll accept different formats or options, just give me something I can recognize and use.”

## Intersection Types: “All-in-One Combo”

Intersection types are like wearing multiple hats at once. Imagine you’re both a parent and a teacher. Each role has its own set of responsibilities, but you carry both at the same time, and you need all the skills and attributes from both roles. Intersection types in TypeScript work the same way: they combine everything from each type into one.

`
interface Parent {
hasChildren: boolean;
takeCareOfChildren(): void;
}

interface Teacher {
teachesSubject: string;
teach(): void;
}

const person: Parent & Teacher = {
hasChildren: true,
teachesSubject: "Math",
takeCareOfChildren: () => console.log("Taking care of kids"),
teach: () => console.log("Teaching a subject"),
};
`

- **What’s Happening Here ?** The person object has to do everything a Parent does and everything a Teacher does. It’s a mix of both responsibilities.

- **Real-life Example :** Think of a smartphone that’s both a phone and a camera. It has both calling features (like a phone) and photo features (like a camera). Intersection types help define that combination.

Intersection types create hybrids that combine all features and responsibilities.

## Why Union and Intersection Types Are Powerful Together

By using both union and intersection types, TypeScript allows us to handle all kinds of complex situations

1. **Optional Flexibility :** With union types, you can say, “I’ll take either this or that,” giving you flexibility in how data is input or used.
2. **Combined Power :** With intersection types, you can define all-in-one types that inherit features from multiple sources, which is helpful for creating objects that need to play multiple roles.

## In Summary

- **Union Types (|):** Let you choose from different options, like ordering off a menu or accepting different data formats.
- **Intersection Types (&):** Let you combine different roles or features, like being both a parent and a teacher, or having a device that’s both a phone and a camera.

These types make TypeScript a really practical tool for building applications that are flexible, reusable, and able to handle complex real-world data.
