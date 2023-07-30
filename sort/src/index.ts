import { Sorter } from "./Sorter";
import { NumbersCollections } from "./NumbersCollections";

const numbersCollection = new NumbersCollections([10000, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection.data);
