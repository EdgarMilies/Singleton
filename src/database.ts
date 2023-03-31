import {PostgresDB} from "./postgresDB";
import {MongoDB} from './mongoDB';

export class Singleton<C> {
    private static instance: Singleton<any>;
    private readonly clazz: new () => C;
  
    private constructor(clazz: new () => C) {
      this.clazz = clazz;
    }
  
    public static getInstance<C>(clazz: new () => C): Singleton<C> {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton(clazz);
      }
  
      return Singleton.instance as Singleton<C>;
    }
  
    public getInstanceOfType(): C {
      return new this.clazz();
    }
  }

const mongoSingleton = Singleton.getInstance(MongoDB);
const postgresSingleton = Singleton.getInstance(PostgresDB);

const postgresInstance = postgresSingleton.getInstanceOfType();
const mongoInstance = mongoSingleton.getInstanceOfType();

console.log(postgresInstance);
console.log(mongoInstance);

