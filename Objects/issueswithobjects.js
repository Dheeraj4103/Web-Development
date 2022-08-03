function Fubar(foo, bar) {
    this._foo = foo;
    this._bar = bar;
}

Fubar.prototype.contains = "This is Prototype";

// var snafu = new Fubar("Situation Normal", "All Fsked Up");

// console.log(snafu instanceof Fubar);

// Real Issues

var fubar = Fubar("Foo", "Bar");

console.log(fubar); // Error
console.log(_foo); // Foo

// if we don't use new keyword, JS sets this to global scope
// it's just like we are calling an ordinary function whose scope is global


function Fubar1(foo, bar) {
    if (this instanceof Fubar1) {
        this._foo = foo;
        this._bar = bar;
    }
    else {
        return new Fubar1(foo, bar);
    }

}

var obj = Fubar1("this is foo", "this is bar");
console.log(obj);