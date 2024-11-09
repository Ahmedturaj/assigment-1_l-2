"use strict";
{
    const getProperty = (obj, key) => {
        return obj[key];
    };
    const person = { name: "Turaj", age: 21 };
    console.log(getProperty(person, "age"));
}
