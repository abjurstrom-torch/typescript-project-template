import _ from "lodash";
import IExample from "./IExample";

export default class Example implements IExample {
  /**
   * Getting an error when running the sanity test on this assignment?  Try updating your node version!
   * Saw some issues with v10 which was the default on the WSL image I was using.  Seems to work on v15.
   */
  private testAssignedVar = "abc123";

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
