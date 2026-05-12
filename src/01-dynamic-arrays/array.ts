class Array<T> {
  private data: (T | null | undefined)[] = [];
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
    for (let index = 0; index < this.length; index++) {
      if (this.data[index] == null) {
        this.data[index] = item;
        return;
      }
    }

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

  shift(): T | null | undefined {
    if (this.length === 0) return undefined;
    const firstItem = this.data[0];
    for (let index = 1; index < this.length; index++) {
      this.data[index - 1] = this.data[index];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  unshift(item: T): void {
    for (let index = this.length; index > 0; index--) {
      this.data[index] = this.data[index - 1];
    }
    this.data[0] = item;
    this.length++;
  }

  splice(start: number, deleteCount: number, ...items: T[]): void {
    const removedItems: (T | null | undefined)[] = [];
    for (let index = start; index < start + deleteCount && index < this.length; index++) {
      removedItems.push(this.data[index]);
    }
    for (let index = start + deleteCount; index < this.length; index++) {
      this.data[index - deleteCount + items.length] = this.data[index];
    }
    for (let index = 0; index < items.length; index++) {
      this.data[start + index] = items[index];
    }
    for (let index = this.length - 1; index >= this.length - deleteCount + items.length; index--) {
      delete this.data[index];
    }
    this.length = this.length - deleteCount + items.length;
  }

  toString(): string {
    return `[${this.data
      .slice(0, this.length)
      .map((item) => item ?? "null")
      .join(", ")}]`;
  }
}

export default Array;
