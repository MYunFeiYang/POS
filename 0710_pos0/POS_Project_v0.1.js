/**
 * Created by yunfeiyang on 17-7-11.
 */
"use strict"
/*去重*/
function cart_item_Build_item_sheet(cart_item) {
   var barcodes=[];
   barcodes[0]=cart_item[0].barcode;
   var tag=barcodes[0];
   for (let item of cart_item){
       if (tag!=item);
       barcodes.push(item);
   }
   return barcodes;
}
/*计数*/
function calculate(cart_item) {
    var item_sheet=[];
    var barcodes=cart_item_Build_item_sheet(cart_item);
    var count=0;
    for (let barcode of barcodes) {
        for (var i=0;cart_item.length;i++) {
            if (barcode==cart_item[i].barcode)
                count++;
                }
      item_sheet.push({barcode:cart_item.barcode,name:cart_item.name,unit:cart_item.unit,price:cart_item.price,count:count,sum:cart_item.price*count});
    }
    return item_sheet;
}
function buildSheetString(item_sheet) {
    var pos_Sheet=calculate(item_sheet);
    var result= `***<没钱赚商店>收据***`+`\n`;
    var sumAll=0;
    for(let i=0;i<pos_Sheet.length;i++) {
        result+=` 名称：${pos_Sheet[i].name}，数量：${pos_Sheet[i].count}瓶，单价：${pos_Sheet[i].price}(元)，小计：${pos_Sheet[i].sum}(元)`+`\n`;
        sumAll+=pos_Sheet[i].sum;
    }

    var result1= `
   ----------------------
   总计：`+sumAll+`(元)
   **********************`;
    return result+result1;
}

    var cart_item=[
        {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00

        },
        {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2.00
        }
    ];
    var Receipt=buildSheetString(cart_item);
    console.log(Receipt);
