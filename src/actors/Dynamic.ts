import { Point } from "paper";
import IMobile from "./IMobile";
export default class Dynamic implements IMobile {
    private position: paper.Point;
    private velocity: paper.Point;

    constructor() {
        this.position = new Point(0, 0);
        this.velocity = new Point(0, 0);
    }

    get Position(): paper.Point {
        return this.position;
    }

    set Position(value: paper.Point) {
        this.position = value;
    }

    get Velocity(): paper.Point {
        return this.velocity;
    }

    set Velocity(value: paper.Point) {
        this.velocity = value;
    }
}