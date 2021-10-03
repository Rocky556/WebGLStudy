import { IAdatpter } from "./IAdapter";
import { List } from "./List"

export abstract class AdapterBase<T> implements IAdatpter<T>{
  protected _arr: Array<T> | List<T>;

  public constructor(useList: boolean = true) {
    if (useList === true) {
      this._arr = new List<T>();
    }
    else {
      this._arr = new Array<T>();
    }
  }

  public add(t: T): void {
    this._arr.push(t);
  }

  public abstract remove(): T | undefined;

  public get length(): number {
    return this._arr.length;
  }

  public get isEmpty(): boolean {
    return this._arr.length <= 0;
  }

  public clear(): void {
    if (this._arr instanceof List) {
      this._arr = new List<T>();
    }
    else {
      this._arr = new Array<T>();
    }
  }
}

export class Queue<T> extends AdapterBase<T>{
  public remove(): T | undefined {
    if (this._arr.length > 0) {
      if (this._arr instanceof List) {
        return this._arr.pop_front();
      }
      else {
        return this._arr.shift();
      }
    }
    else {
      return undefined;
    }
  }
}

export class Stack<T> extends AdapterBase<T>{
  public remove(): T | undefined {
    if (this._arr.length > 0) {

      return this._arr.pop();
    }
    else {
      return undefined;
    }
  }
}