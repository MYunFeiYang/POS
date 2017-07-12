/**
 * Created by yunfeiyang on 17-7-11.
 */
"use strict"
/*分割字符串*/
function splitBarcode(barcode) {
    var barcodes=[];
    for (let bar of barcode){
        var item= bar.split("-");
        if (item[1]>1) {
            barcodes.push({barcode:item[0],count:parseInt(item[1])});
        }
        else{
            barcodes.push({barcode:item[0],count:1});
        }
    }
    return barcodes;
}
/*通过商品barcode属性获得商品项信息*/
function byItem_barcodeToItem(barcode) {
    var barcodes=splitBarcode(barcode);
    var Items=[
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
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            price: 5.50
        },
        {
            barcode: 'ITEM000003',
            name: '荔枝',
            unit: '斤',
            price: 15.00
        },
        {
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2.00
        },
        {
            barcode: 'ITEM000005',
            name: '方便面',
            unit: '袋',
            price: 4.50
        }
    ];
    var Item=[];
    for(let barcode of barcodes){
        for (let item of Items){
            if (barcode.barcode==item.barcode)
                Item.push({barcode:item.barcode,name:item.name,unit:item.unit,price:item.price,count:barcode.count});
        }
    }
    return Item;
}
/*去重*/
function Deduplication(Item1) {
    var Item=byItem_barcodeToItem(Item1);
    var barcode=[];
    barcode[0]=Item[0].barcode;
    var tag=barcode[0];
    for(let item of Item){
        if (tag!=item.barcode) {
            tag=item.barcode;
            barcode.push(item.barcode);
        }
    }
    return barcode;
}
/*计数*/
function calculate(barcode1) {
    var Item=byItem_barcodeToItem(barcode1);
    var barcode=Deduplication(barcode1);
    var Item_sheet=[];
    var k=0;
    for (let bar of barcode){
        var count=0;
        for (var i=0;i<Item.length;i++){
            if (bar==Item[i].barcode) {
                count += Item[i].count;
            }
        }
        Item_sheet.push({barcode:Item[k].barcode,name:Item[k].name,unit:Item[k].unit,price:Item[k].price,count:count});
        k++;
    }
    return Item_sheet;
}
/*将对象数组拼接成字符串*/
function buildingSheetString(item_sheet) {
    var Item_sheet=calculate(item_sheet);
    var string='***<没钱赚商店>收据***'+'\n';
    var sum=0;
    var jieyue=0;
    for (var i=0;i<Item_sheet.length;i++){
        if(Item_sheet[i].count>2){
            string+='名称：'+Item_sheet[i].name+'，数量：'+Item_sheet[i].count+Item_sheet[i].unit+'，单价：'+
                Item_sheet[i].price+'(元)，小计：'+Item_sheet[i].count*Item_sheet[i].price-Item_sheet[i].price+'(元)'+'\n';
            sum+=Item_sheet[i].count*Item_sheet[i].price-Item_sheet[i].price;
            jieyue+=Item_sheet[i].price;
        }
        else {
            string+='名称：'+Item_sheet[i].name+'，数量：'+Item_sheet[i].count+Item_sheet[i].unit+'，单价：'+
                Item_sheet[i].price+'(元)，小计：'+Item_sheet[i].count*Item_sheet[i].price+'(元)'+'\n';
            sum+=Item_sheet[i].count*Item_sheet[i].price;
        }
    }
    string+=`----------------------
总计：`+sum+`(元)
节省：`+jieyue+`(元)
**********************`;
    return string;
}
/*打印输出清单*/
var barcode=[
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000003-2',
    'ITEM000005',
    'ITEM000005',
    'ITEM000005'
];

var Receipt=buildingSheetString(barcode);
console.log(Receipt);

