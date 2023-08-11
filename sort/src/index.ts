import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollections";
import { LinkedList } from "./LinkedList";

// const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection("Xaayb");
// const sorterWithCharacters = new Sorter(charactersCollection);
// sorterWithCharacters.sort();
// console.log(charactersCollection.data);

// const linkedList = new LinkedList();
// linkedList.add(500);
// linkedList.add(-10);
// linkedList.add(-3);
// linkedList.add(4);

// const sorterWithLinkedList = new Sorter(linkedList);
// sorterWithLinkedList.sort();
// linkedList.print();

const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
