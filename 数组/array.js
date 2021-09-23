/**
 * @desc 求斐波那契数列前20个数字
 * 第一个数字是1，第二个数字是2，从第三项开始，每个项是前两项之和
 */

function fibr(count){
    let fibrArr = []
    fibrArr[0] = 1;
    fibrArr[1] = 2;
    for(let i = 3;i<count;i++){
        fibrArr[i] = fibrArr[i - 1] + fibrArr[i - 2];
    }
   return fibrArr
}
console.log(fibr(3))