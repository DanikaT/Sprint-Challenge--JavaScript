// 1. Copy and paste your prototype in here and refactor into class syntax.
/*function CuboidMaker(cuboidMakerAttributes) {
  this.length = cuboidMakerAttributes.length;
  this.width = cuboidMakerAttributes.width;
  this.height = cuboidMakerAttributes.height;
}
*/


class CuboidMaker2 {
    constructor(cuboidMaker2Attributes){
        this.length = cuboidMaker2Attributes.length;
        this.width = cuboidMaker2Attributes.width;
        this.height = cuboidMaker2Attributes.height;
    }


    volume() {
        return this.length * this.width * this.height;
    }
}

const cuboid = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5
  })



//Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
//console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.