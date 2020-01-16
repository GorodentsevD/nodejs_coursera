/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    if (arguments.length === 1) {
        return arguments[0];
    }

}

/**
 * @params {String[]}
 */
function select() {

}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {

}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
