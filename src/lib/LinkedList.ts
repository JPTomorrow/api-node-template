type LLNode<T> = {
  value: T;
  next: LLNode<T> | null;
  prev: LLNode<T> | null;
};

class LinkedList<T> {
  private head: LLNode<T>;
  private list: LLNode<T>[] = [];

  constructor(first_node_value: T) {
    this.list.push({
      value: first_node_value,
      next: null,
      prev: null,
    });
    this.head = this.list[0];
  }

  add(value: T) {
    let last_idx = this.list.length - 1;

    const new_node = {
      value: value,
      next: null,
      prev: this.list[last_idx],
    };

    this.list[last_idx].next = new_node;
    this.list.push(new_node);
    this.head = this.list[this.list.length - 1];
  }

  remove(value: T) {
    let idx = this.list.findIndex((node) => node.value === value);
    if (idx > -1) {
      if (idx < this.list.length - 1) {
        this.list[idx - 1].next = this.list[idx + 1];
        this.list[idx + 1].prev = this.list[idx - 1];
      }
      this.list.splice(idx, 1);
      this.head = this.list[this.list.length - 1];
    }
  }

  prevNode() {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }
}

export { LinkedList };
