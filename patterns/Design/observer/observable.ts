import {observers} from './observers'

type CustomObserver = (...args: any[]) => any

const Observable= Object.freeze({
  notify: <T>(data: T) => {
    return observers.forEach(observer => observer(data))
  },
  subscribe: (func: CustomObserver) => {
    return observers.push(func)
  },
  unsubscribe: (func: CustomObserver) => {
    [...observers].forEach((observer, index) => {
      if(observer === func) {
        observers.splice(index, 1)
      }
    })
  }
})

export default Observable;
