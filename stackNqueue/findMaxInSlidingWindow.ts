const nums: number[] = [1, 3, 10, 15, -5, -3, -12, -1, 16]
// const nums: number[] = [1, 3, -1, -3, 5,3, 2, 1, 6]
const windowSize:number = 3
function findSlidingWindowMax(nums:number[], k:number):number[]{
    const answer:number[]=[];
    const dequeue:number[] = [];
    let count:number = 1;
    const n:number = nums.length;
    for(let i = 0; i<n; i++){
        if(count > k){
            dequeue.pop();
            count--;
        }
        while(!!dequeue.length && dequeue.at(-1)! <= nums[i]){
            dequeue.pop();
            count--;
        }
        if(i+1 >= k){
            if(!!dequeue.length){
                answer.push(dequeue.at(-1)!);
            }else{
                answer.push(nums[i])
            }
        }
        dequeue.unshift(nums[i]);
        count++;
    }
    return answer
}

console.log(findSlidingWindowMax(nums, k))