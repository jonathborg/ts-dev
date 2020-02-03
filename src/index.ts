Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 800);
import MyClass from './MyClass';

(async () => {

    const myClass = new MyClass('Hello World');
    console.log(myClass.getSomething());

    debugger;
})()
.catch(console.error);
