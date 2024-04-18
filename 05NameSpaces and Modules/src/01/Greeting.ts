declare namespace Greeter {
    export interface Greeting<T> {
        introduction():string;
        sayGoodbye(personName: T): string;

    }
}

