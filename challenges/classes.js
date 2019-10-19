// 1. Copy and paste your prototype in here and refactor into class syntax.
/*function CuboidMaker(cuboidMakerAttributes) {
  this.length = cuboidMakerAttributes.length;
  this.width = cuboidMakerAttributes.width;
  this.height = cuboidMakerAttributes.height;
}
*/


class LambdaStudent {
    constructor(lambdastudent.Attributes){
        this.lovesJavascript = lambdastudent.lovesJavascript;
        this.name = lambdastudent.name;
        this.passExam = lambdastudent.passExam;
    }


    passexam() {
        return ` Hello! My name is ${this.name}. I really love JS. Today I passed my ${this.passexam} `
    }

}
const webeu3 = new LambdaStudent({
    lovesJavascript: true,
    name: "Danika",
    passExam: true,
  })



//Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(webeu3.passExam()); // 100
//console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.