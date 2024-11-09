{
  interface circle {
    shape: "circle";
    radius: number;
  }
  interface rectangle {
    shape: "rectangle";
    height: number;
    width: number;
  }
  type shape = circle | rectangle;
  const calculateShapeArea = (shape: shape) => {
    if (shape.shape === "circle") {
      return Math.PI * Math.pow(shape.radius, 2);
    } else if (shape.shape === "rectangle") {
      return shape.height * shape.width;
    }
  };
  const circle: circle = { shape: "circle", radius: 5 };
  console.log(calculateShapeArea(circle));
  const rectangle: rectangle = {
    shape: "rectangle",
    width: 4,
    height: 6,
  };
  console.log(calculateShapeArea(rectangle));
}
