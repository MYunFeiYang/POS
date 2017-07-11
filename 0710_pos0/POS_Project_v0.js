/**
 * Created by yunfeiyang on 17-7-10.
 */

"use strict"

function buildSheetString(pos_Sheet) {
       var result= `***<没钱赚商店>收据***`+`\n`;
        var sumAll=0;
  for(let i=0;i<pos_Sheet.length;i++) {
      let sum=pos_Sheet[i].count*pos_Sheet[i].price;
    result+=` 名称：${pos_Sheet[i].name}，数量：${pos_Sheet[i].count}瓶，单价：${pos_Sheet[i].price}(元)，小计：`+sum+`(元)`+`\n`;
    sumAll+=sum;
  }

   var result1= `
   ----------------------
   总计：`+sumAll+`(元)
   **********************`;
  return result+result1;
}
var pos_sheet=[
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00,
        count: 5
    },
    {
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00,
        count: 2
    },
    {
        barcode: 'ITEM000004',
        name: '电池',
        unit: '个',
        price: 2.00,
        count: 1
    }];

var result=buildSheetString(pos_sheet);
console.log(result);