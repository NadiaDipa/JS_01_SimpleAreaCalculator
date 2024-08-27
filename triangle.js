function triangle(){
    let triangleBase = Number(prompt("Enter Base for Triangle: "));
    let triangleHeight = Number(prompt("Enter Height for Triangle: "));
    let triangleArea = 0.5 * triangleBase * triangleHeight;

    alert(`Area of Triangle: ${triangleArea}`);
}