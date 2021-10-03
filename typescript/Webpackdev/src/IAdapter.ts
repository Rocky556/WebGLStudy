export interface IAdatpter<T> {
  add(t: T): void;
  remove(): T | undefined;
  clear(): void;
  // 属性
  length: number;
  isEmpty: boolean;
}