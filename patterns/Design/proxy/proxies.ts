import { person, user } from "./data";
import {isValidEmail, isAllLetters} from "./validators";

export const personProxy = new Proxy(person, {
  get: (target: typeof person, property: keyof typeof person) => {
    const propertyValue = target[property];

    console.log(`The value of ${property} is ${propertyValue}`)

    return propertyValue
  },
  set: (target: typeof person, property: keyof typeof person, newValue) => {

    console.log(`Change ${property} from ${target[property]} to ${newValue}`);

    return Reflect.set(target, property, newValue);
  }
})

export const userProxy = new Proxy(user, {
  get: (target: typeof user, property: keyof typeof user) => {
    return `${new Date()} | The value of ${property} is ${Reflect.get(target, property)}`;
  },
  set: (target: typeof user, property: keyof typeof user, newValue) => {
    if(property === "email") {
      if(!isValidEmail(target[property])){
        console.log("Provide a valid email")
        return false;
      }
    }

    if (property === 'username') {
      if (target[property].length < 3) {
        throw new Error('Please use a longer username.');
      } else if (!isAllLetters(target[property])) {
        throw new Error('You can only use letters');
      }
    }

    if (property === 'age') {
      if (typeof target[property] !== 'number') {
        throw new Error('Please provide a valid age.');
      }

      if (target[property] < 18) {
        throw 'User cannot be younger than 18.';
      }
    }

    return Reflect.set(target, property, newValue);
  }
})
