/**
 * Created by yunfeiyang on 17-7-11.
 */
"use strict"
function cart_item_Build_item_sheet(cart_item) {
    var item_sheet = [];
    var Item={};
    for (var i = 0; i < cart_item.length; i++) {
        var count=1;
        for(var j=i;j<cart_item.length;j++){
            if (cart_item[i].barcode==cart_item[j].barcode){
                count++;
            }
        }
        Item={
            barcode:cart_item[i].barcode,
            name:cart_item[i].name,
            unit:cart_item[i].unit,
            price:cart_item[i].price,
            count:count,
            sum:cart_item[i].price*count
        };
        item_sheet.push(Item);
        i+=count;
    }
    return item_sheet;
}
function buildSheetString(item_sheet) {
    var pos_Sheet=cart_item_Build_item_sheet(item_sheet);
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
