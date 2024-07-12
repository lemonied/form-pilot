export type Listener<T=any> = (currentValue: T, previousValue: T) => void;

export class Subscriber<T=any> {
  private listeners: Listener<T>[] = [];

  add(fn: Listener<T>) {
    this.listeners.push(fn);
    return () => {
      this.remove(fn);
    };
  }

  remove(fn: Listener<T>) {
    const index = this.listeners.indexOf(fn);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }

  trigger(...args: Parameters<Listener<T>>) {
    this.listeners.forEach(fn => fn(...args));
  }

}