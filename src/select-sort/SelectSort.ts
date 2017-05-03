export default class SelectSort {

    sort (unsortedArray: number[]) {
        const sortedArray = []
        do {
            let element = unsortedArray.shift()
            for (let i in unsortedArray) {
                if (element > unsortedArray[i]) {
                    let tmp = unsortedArray[i]
                    unsortedArray[i] = element
                    element = tmp
                }
            }
            sortedArray.push(element)
        } while (unsortedArray.length > 0)
        return sortedArray
    }
}