export class Counter {
    private count: number;
    private static instance: Counter | null = null;

    private constructor() {
        this.count = 0;
    }

    public static createInstance(): Counter {
        if (this.instance !== null) {
            return this.instance;
        }
        this.instance = new Counter();
        return this.instance;
    }

    public increment(): void {
        this.count++;
    }

    public getCount(): number {
        return this.count;
    }
}