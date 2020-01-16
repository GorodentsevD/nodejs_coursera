// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var commandArray = command.split(' ');
    var commandName = commandArray[0];

    switch (commandName) {
        case 'ADD':
            return add(commandArray);
        case 'SHOW':
            return show(commandArray);
        case 'REMOVE_PHONE':
            return remove(commandArray);
        default:
            throw false;
    }
};

function add(commandArray) {
    var name = commandArray[1];
    var phones = commandArray[2].split(',');

    if (name === undefined || phones === undefined || phones.length === 0) {
        return false;
    }

    if (name in phoneBook) {
        phoneBook[name] = phoneBook[name].concat(phones);
        return true;
    }

    phoneBook[name] = phones;
    return true;
}

function show(commandArray) {
    var strings = [];
    var keys = Object.keys(phoneBook);

    keys.forEach(toStrings);

    function toStrings(key) {
        var phoneString = phoneBook[key].toString()
                                        .replace(new RegExp(',', 'g'), ', ');
        var newString = key + ': ' + phoneString;

        strings.unshift(newString);
    }
    return strings;
}

function remove(commandArray) {
    var phone = commandArray[1];

    var flag = false;
    for (var item in phoneBook) {
        var idx = phoneBook[item].findIndex(item => item === phone);
        if (idx !== -1) {
            flag = true;
            phoneBook[item].splice(idx, 1);
            if (phoneBook[item].length === 0) {
                delete phoneBook[item];
            }
        }
    }
    return flag;
}
