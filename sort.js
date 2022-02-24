class Sorting {
    constructor(...arr) {
        this.arr = arr;
    }

    manualSort() {
        let success = false;
        let temporary;

        while (!success) {
            success = true;

            for (let i = 1; i < this.arr.length; i++) {
                if (this.arr[i-1] > this.arr[i]) {
                    success = false;

                    temporary = this.arr[i-1];
                    this.arr[i-1] = this.arr[i];
                    this.arr[i] = temporary;
                }
            }
        }

        return this.arr;
    }

    autoSort() {
        return this.arr.sort();
    }
}

const data = new Sorting(5,1,3,4,2,0);
console.info(`Manual Sort: ${data.manualSort()}`);
console.info(`Auto Sort: ${data.autoSort()}`);