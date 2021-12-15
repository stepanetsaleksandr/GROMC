function printMessage(country, city) {
  console.log(this);

  console.log(`Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`);
}

const user = {
  firstName: 'Andrey',
  age: 111,
  tempFunc: 'some secret data',
};

// in: obj
// output: func

printMessage();

// option 1
const bindedFunc = printMessage.bind(user);
bindedFunc('Ukraine', 'Odessa');

// option 2
const bindedFunc2 = printMessage.bind(user, 'UK');
bindedFunc2('London');

// option 3
const bindedFunc3 = printMessage.bind(user, 'UK', 'Liverpool');
bindedFunc3();

// in: func, obj, args(optional)
// out: func

function myBind(func, context, ...args) {
  return function (...funcArgs) {
    return func.apply(context, args, funcArgs);
  };
}

bindedFunc();
