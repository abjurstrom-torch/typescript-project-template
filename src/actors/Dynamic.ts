import { Point } from "paper";
import IMobile from "./IMobile";
export default class Dynamic implements IMobile {
    #position: paper.Point;
    #velocity: paper.Point;

    constructor() {
        this.#position = new Point(0, 0);
        this.#velocity = new Point(0, 0);
    }

    get position(): paper.Point {
        return this.#position;
    }

    set position(value: paper.Point) {
        this.#position = value;
    }

    get velocity(): paper.Point {
        return this.#velocity;
    }

    set velocity(value: paper.Point) {
        this.#velocity = value;
    }
}