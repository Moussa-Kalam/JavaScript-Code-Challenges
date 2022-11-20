class Book {
  constructor(title, author, ISBN, numCopiesAvailable) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopiesAvailable = numCopiesAvailable;
  }

  // Check the number of available copies (getter)
  get availability() {
    return this.getAvailability();
  }
  getAvailability() {
    if (this.numCopiesAvailable === 0) {
      return "Out of stock";
    } else if (this.numCopiesAvailable < 10) {
      return "Low stock";
    } 
    return "In stock";
  }

  /* Methods */

  // sell() method that substracts the number of copies to sell from the available ones
  sell(soldCopies = 1) {
    this.numCopiesAvailable -= soldCopies;
  }

  // restock() method that adds the copies to restock to the number of the available copies
  restock(restockCopies = 5) {
    this.numCopiesAvailable += restockCopies;
  }
}


const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
console.log(HungerGames.availability);
HungerGames.restock(12);
console.log(HungerGames.availability);
HungerGames.sell(17);
console.log(HungerGames.availability);
