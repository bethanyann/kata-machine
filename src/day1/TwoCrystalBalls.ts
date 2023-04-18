export default function two_crystal_balls(breaks: boolean[]): number {
    //get the square root of the length of the array so we know how big the jumps are
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    //use the first crystal ball to see where it breaks
    let i = jumpAmount;
    for(; i < breaks.length; i += jumpAmount) {
        if(breaks[i]) {
            break;
        }
    }

    i -= jumpAmount;
    for(let j = 0; j <= jumpAmount && i < breaks.length; ++j , ++i) {
        if(breaks[i]){
            return i;
        }
    }

    return -1;
}
