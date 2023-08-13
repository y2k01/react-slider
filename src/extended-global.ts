declare global {
  // zone.js криво переопределяет метод removeEventListener из-за чего он
  // неправильно работает в хроме, поэтому нужно использовать removeAllListeners.
  // Однако такого метода изначально нет в Document, из-за чего билд проекта проходить не будет,
  // поэтому надо явно переопределять интерфейс
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface Document {
    removeAllListeners?(eventName: string): void;
  }

  // та же проблема, что с Document, но уже с обычными элементами в Мозилле
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface HTMLElement {
    removeAllListeners?(eventName: string): void;
  }
}

export {};
