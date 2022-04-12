import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 300, -5, 0])
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xyaab');
charactersCollection.sort();
console.log(charactersCollection.data);


const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(16);

linkedList.sort();
linkedList.print();