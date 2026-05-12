class Array<T> {
  private data: (T | null)[] = [];
  private length: number = 0;

  constructor(length?: number) {
    if (length !== undefined) {
      for (let index = 0; index < length; index++) {
        this.data[index] = null;
      }
      this.length = length;
    }
  }

  get size(): number {
    return this.length;
  }

  get(index: number): T | null | undefined {
    return this.data[index];
  }

  push(item: T): void {
    this.data[this.length] = item;
    this.length++;
  }

  pop(): T | null | undefined {
    if (this.length === 0) return undefined;
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  toString(): string {
    return `[${this.data
      .slice(0, this.length)
      .map((item) => item ?? "null")
      .join(", ")}]`;
  }
}

export default Array;
