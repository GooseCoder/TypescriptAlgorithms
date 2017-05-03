export default class BubbleSort {

    sort (unsortedArray: number[]) {
        let lastUnsortedElement = unsortedArray.length
        let swapped: boolean
        do {
            swapped = false
            for (let i = 0; i < lastUnsortedElement-1; i++) {
                if (unsortedArray[i] > unsortedArray[i + 1]) {
                    let tmp = unsortedArray[i]
                    unsortedArray[i] = unsortedArray[i + 1]
                    unsortedArray[i + 1] = tmp
                    swapped = true
                }
            }
        } while (swapped)
        return unsortedArray
    }
}