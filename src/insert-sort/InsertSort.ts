export default class InsertSort {
    sort(unsortedArray: number[]) {
        let sortedArray = []
        let element
        while (element = unsortedArray.shift()) {
            let found = false
            let tmpSortedArray = []
            do {
                let sortedElement
                if (sortedElement = sortedArray.pop()) {
                    tmpSortedArray.unshift(sortedElement)
                }
                if (element > sortedElement || typeof sortedElement === 'undefined') {
                    sortedArray.push(element)
                    sortedArray = sortedArray.concat(tmpSortedArray)
                    found = true
                }
            } while (!found)
            // console.log(found)
        }
        console.log(sortedArray)
        return sortedArray
    }
}