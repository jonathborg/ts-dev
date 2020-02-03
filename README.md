# TS Dev
Boilerplate typescript starter for fast developments

### How to run?
```
git clone https://github.com/jonathborg/ts-dev.git your-project-name
cd your-project-name
rm -rf .git
yarn
yarn dev
```

### What is the first line of index.js file?
```Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 800)``` Some times the inspector doesn't get triggered because the code executes very fast. With an 800ms delay, we guarantee the code will be executed in a chrome inspect debugger.
