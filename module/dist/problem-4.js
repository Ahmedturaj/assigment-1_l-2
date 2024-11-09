"use strict";
{
    const calculateShapeArea = (shape) => {
        if (shape.shapeName === "circle") {
            return Math.PI * Math.pow(shape.radius, 2);
        }
        else if (shape.shapeName === "rectangle") {
            return shape.height * shape.width;
        }
    };
    const circle = {
        shapeName: "circle",
        radius: 4.5,
    };
    console.log(calculateShapeArea(circle));
    const rectangle = {
        shapeName: "rectangle",
        height: 4,
        width: 3,
    };
    console.log(calculateShapeArea(rectangle));
}
