/**
 * Created by yunfeiyang on 17-7-11.
 */
"use strict"
/*去重*/
function Deduplication(Item) {
    var barcode=[];
    barcode[0]={barcode:Item[0].barcode,name:Item[0].name,unit:Item[0].unit,price:Item[0].price};
    var tag=Item[0].barcode;
    for(let item of Item){
        if (tag!=item.barcode) {
            tag=item.barcode;
            barcode.push({barcode:item.barcode,name:item.name,unit:item.unit,price:item.price});
        }
    }
    return barcode;
}
/*计数*/
function calculate(Item) {
    var barcode = Deduplication(Item);
    var Item_sheet = [];
    for (var j = 0; j < barcode.length;) {
        var count = 0;
        for (var i = 0; i < Item.length; i++) {
            if (barcode[j].barcode == Item[i].barcode) {
                count ++;
            }
        }
        Item_sheet.push({
            barcode: barcode[j].barcode,
            name: barcode[j].name,
            unit: barcode[j].unit,
            price: barcode[j].price,
            count: count,
            sum:barcode[j].price*count
        });
        j++;
    }
    return Item_sheet;
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

    var item=[
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
    var Receipt=buildSheetString(item);
    console.log(Receipt);
