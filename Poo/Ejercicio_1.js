//crear obj weakmap para poder hacer privada la clases
const _private = new WeakMap();

//Clase objeto
class Book {
  //Constructor
  constructor(tittle, author, price) {
    const properties = {
      _title: tittle,
      _author: author,
      _price: price,
    };
    _private.set(this, { properties });
  }
  //obetiene el titulo del libro
  get title() {
    return _private.get(this).properties['_title'];
  }
  //establece el titulo del libro
  set title(newTitle) {
    return (_private.get(this).properties['_title'] = newTitle);
  }
  get author() {
    return _private.get(this).properties['_author'];
  }
  set author(newAuthor) {
    return (_private.get(this).properties['_author'] = newAuthor);
  }
  get price() {
    //vamos a dejar privado el precio solo para comprobar que no hay accesibilidad
    return _private.get(this).properties['_price'];
  }
  getAllData() {
    console.log(`Titulos: ${this.title}, Autor: ${this.author}, Precio: ${this.price}`);
  }
}
//vamos a heredar a comic
class Comic extends Book {
  constructor(name, author, price, illustrators) {
    super(name, author, price);
    this.illustrators = illustrators;
  }
  //Método para agregar mas ilustradores
  addIllustrators(newIllustrator = []) {
    this.illustrators.push(newIllustrator);
  }
  getAllData(){
    super.getAllData();
    console.log( `Ilustradores: ${this.illustrators}` );
  }
}
class ShoppingCart {
  constructor() {
    this.products = [];
  }
  addProduct(amount, price) {
    //generemos la copia del arreglo con el sprite operator(...)
    this.products.push(...Array(amount).fill(price));
  }
  showProducts() {
    console.log(this.products);
  }
  calcTotal() {
    return this.products
      .map(price => price)
      .reduce((ac, price) => ac + price, 0);
  }
  printTicket(){
    console.log(`Total a pagar ${ this.calcTotal() }` )
  }

}

//Instancia de book
const book1 = new Book('1984', 'G.O', 350);
const book2 = new Book('Frankenstein', 'M.S', 200);
const book3 = new Book('Las cronicas de Narnia', 'C. S', 300);

//Instancia de Comic
const comic1 = new Comic('Spiderman', 'Stan Lee', 80, [
  'T.M',
  'S.D',
  'S.M',
  'G.C',
]);

//book 1
console.log(book1.title);
console.log(book1.author);
console.log(book1.price);

console.log('');

//Comic
console.log(comic1.title);
console.log(comic1.illustrators);
comic1.addIllustrators('J.J');
//imprimiendo de nuestro illustrators para comprobar que si hizo el push
console.log(comic1.illustrators);

const cart = new ShoppingCart();
cart.addProduct(2, comic1.price);
cart.showProducts();

cart.printTicket();
book1.getAllData();
comic1.getAllData();


