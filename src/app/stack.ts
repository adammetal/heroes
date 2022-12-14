export class Stack<T> {
  private readonly items: Array<T> = [];

  public size(): number {
    return this.items.length;
  }

  public push(item: T): void {
    this.items.unshift(item);
  }

  public pop(): T | null {
    const item = this.items.shift();
    if (item !== undefined) {
      return item;
    }
    return null;
  }

  public flush(): Generator<T | null> {
    const self = this;

    function* gen() {
      while (self.size() > 0) {
        yield self.pop();
      }
    }

    return gen();
  }

  public toArray(): T[] {
    return Array.from(this.items);
  }

  public toString(): string {
    return this.items.join(",");
  }
}
