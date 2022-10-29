function createSortedList() {
    let object = {
        list: [],
        sizeArr: 0,
        add: function (element) {
            this.list.push(element);
            this.sizeArr++;
            return this.list.sort((a, b) => a - b);
        },
        remove: function (index) {
            if (index >= 0 && index < this.list.length) {
                this.list.splice(index, 1);
                this.sizeArr--;
                return this.list.sort((a, b) => a - b);
            } else {
                return;
            }
        },
        get: function (index) {
            if (index >= 0 && index < this.list.length) {
                return this.list[index];
            } else {
                return;
            }
        },
        size: function () {
            return this.sizeArr;
        }
    }
    return object;
}