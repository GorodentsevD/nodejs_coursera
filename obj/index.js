module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    this.elements = [];
}


// Методы коллекции
Collection.prototype.values = function () {
    return this.elements;
};

Collection.prototype.append = function () {

    if (arguments[0].values !== undefined) {
        var val = arguments[0].values();
        this.elements = this.elements.concat(arguments[0].values());
        return true;
    }

    var elements = Array.from(arguments);
    this.elements = this.elements.concat(elements);
};

Collection.prototype.count = function () {
    return this.elements.length;
};

Collection.prototype.at = function (index) {
    if (index <= 0 || this.elements.length < index) {
        return null;
    }
    return this.elements[index - 1];
};

Collection.prototype.removeAt = function (index) {
    if (index <= 0 || this.elements.length < index) {
        return false;
    }

    this.elements.splice(index - 1, 1);

    return true;
};
// другие методы


/**
 * Создание коллекции из массива значений
 */
Collection.from = function (array) {
    var col = new Collection();
    col.elements = array;

    return col;
};
