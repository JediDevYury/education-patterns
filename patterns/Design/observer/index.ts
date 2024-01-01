import Observable from './observable'
import {logger} from "./logger";

Observable.subscribe(logger)
Observable.notify('hello')
