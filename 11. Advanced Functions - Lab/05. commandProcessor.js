function solution() {
    return obj = {
        result: '',
        append: function (string) {
            this.result = this.result + string;
        },
        removeStart: function (n) {
            this.result = this.result.slice(n);
        },
        removeEnd: function (n) {
            this.result = this.result.slice(0, -n);
        },
        print: function () {
            console.log(this.result);
        }
    }
}