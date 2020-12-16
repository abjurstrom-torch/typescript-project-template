import _ from "lodash";

export default class Example {
  public ProcessNumbers(input: number[]): number[] {
    return _.map(input, (value) => value * 2);
  }
}
