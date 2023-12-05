
const createLoggingProxy = (target) => {
    return new Proxy(target, {
      get: function (target, property, receiver) {
        console.log(`Getting property: ${property}`);
        return Reflect.get(target, property, receiver);
      }
    });
  };
  
  // Example usage:
  const obj = {
    foo: 42,
    bar: "Hello, World!"
  };
  
  const loggingProxy = createLoggingProxy(obj);
  
  // Accessing properties through the proxy
  console.log(loggingProxy.foo);  // This will log: Getting property: foo
  console.log(loggingProxy.bar);  // This will log: Getting property: bar
  