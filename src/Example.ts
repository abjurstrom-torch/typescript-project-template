import _ from "lodash";
import IExample from "./IExample";

export default class Example implements IExample {
  /**
   * "Processes" an array of numbers, returning a new array with each number doubled.
   *
   * @param input The array of numbers to process.
   * @returns everything doubled.
   */
  public ProcessNumbers(input: number[]): number[] {
    return _.map(input, (value) => value * 2);
  }
}
