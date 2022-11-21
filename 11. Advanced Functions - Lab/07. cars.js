function solve(input) {
    const data = {};

    const commands = {
        create: function (name, inherits, parentName) {
            return data[name] = inherits ? Object.create(data[parentName]) : {};
        },
        set: function (name, k, v) {
            return data[name][k] = v;
        },
        print: function (name) {
            const entries = [];
            for (let key in data[name]) {
                entries.push(`${key}:${data[name][key]}`);
            }
            console.log(entries.join(','));
        },
    }

    input.forEach(x => {
        const [command, name, k, v] = x.split(' ');
        commands[command](name, k, v);
    });
}