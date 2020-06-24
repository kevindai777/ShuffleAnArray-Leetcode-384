//Objective is to design a class that has two methods: 'reset' and 'shuffle'
//'Reset' should reset the array to the original state from the beginning
//'Shuffle' should swap random cards with each other


let nums = [1,2,3]

//Design of the class 

class Shuffler {
    constructor(nums) {
        this.arr = nums
    }

    reset() {
        return this.arr
    }

    //Keep a copy of the arr so we don't have to change it when we reset.
    shuffle() {
        let result = [...this.arr]

        for (let i = 0; i < this.arr.length; i++) {
            let targetIndex = Math.floor(Math.random() * this.arr.length)
            let temp = result[i]
            result[i] = result[targetIndex]
            result[targetIndex] = temp
        }

        return result
    }
}

let test = new Shuffler(nums)
test.shuffle()
test.reset()