interface Circle {
    pos: Position;
    radius: number;
}
interface Position {
    x: number;
    y: number;
}

function calculatePackedCircles(areaWidth: number, areaHeight: number): Circle[] {

    let numCircles = 10
    let arrayCircles: Circle[] = []
    arrayCircles.push({pos: { x: random(0, areaWidth), y: random(0, areaHeight) }, radius: 40}) //push initial circle

    for (let i = 0; i < numCircles - 1; i++) {        
        let generatedCircle: Circle = {pos: { x: random(0, areaWidth), y: random(0, areaHeight) }, radius: 40};

        for(let restOfCircles of arrayCircles) {            
            if ( restOfCircles.radius + generatedCircle.radius > distance(restOfCircles.pos, generatedCircle.pos) ) {
                arrayCircles.push(generatedCircle)      // no overlap => add to canvas
                console.log( distance(restOfCircles.pos, generatedCircle.pos) > restOfCircles.radius + generatedCircle.radius )
            }
        }
    }        

    return arrayCircles;
    // return [
    //     { pos: { x: 300, y: 300 }, radius: 100 },
    //     { pos: { x: random(0, areaWidth), y: random(0, areaHeight) }, radius: 40 },
    // ];
}

/** Returns the distance between two given positions.
    This function doesn't require p5.js 
 */
function distance(p1: Position, p2: Position): number {
    const x = p1.x - p2.x;
    const y = p1.y - p2.y;
    const hyp = Math.sqrt(x * x + y * y);
    return hyp;
}

/*
*/