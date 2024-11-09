"use strict";
{
    const updateProfile = (profile, update) => {
        return Object.assign(Object.assign({}, profile), update);
    };
    const myProfile = { name: "Turaj", age: 21, email: "turaj@example.com" };
    console.log(updateProfile(myProfile, { age: 25 }));
}
