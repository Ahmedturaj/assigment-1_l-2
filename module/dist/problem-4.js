"use strict";
{
    const calculateShapeArea = (shape) => {
        if (shape.shape === "circle") {
            return Math.PI * Math.pow(shape.radius, 2);
        }
        else if (shape.shape === "rectangle") {
            return shape.height * shape.width;
        }
    };
    const circle = { shape: "circle", radius: 5 };
    console.log(calculateShapeArea(circle));
    const rectangle = {
        shape: "rectangle",
        width: 4,
        height: 6,
    };
    console.log(calculateShapeArea(rectangle));
}
