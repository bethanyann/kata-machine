export default function bs_list(haystack: number[], needle: number): boolean {
    // high is exclusive, low is inclusive 
    let low = 0;
    let high = haystack.length;

    while(low < high) {
        let midpoint = Math.floor(low + (high - low) / 2);
        const value = haystack[midpoint];

        if(value == needle) {
            return true;
        } else if (value > needle) {
            //if midpoint value is greater than the needle
            //right side of array (higher values side) doesn't need searched so 
            //move high to midpoint to ignore values higher than midpoint
            high = midpoint;
        } else if (value < needle) {
            //if midpoint value is less than the needle
            //left side of array (lower values side) doesn't need searched so
            //move the low to one past midpoint to ignore values lower than midpoint
            low = midpoint + 1;
        }
    }
    return false;
}