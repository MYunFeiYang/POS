

"use strict"
function buildScoreSheet(inputs) {
    let scoreSheet = {
        name: inputs[0],
        chinese: inputs[1],
        english: inputs[2],
        math: inputs[3],
        programming: inputs[4]
    };
    let calculatedScore = calculateScore(inputs);
    scoreSheet.average = calculatedScore.average;
    scoreSheet.summary = calculatedScore.summary;

    return scoreSheet;
}

function calculateScore(inputs) {
    inputs.shift();
    const scores = inputs;
    let summary = 0;
    for(let score of scores) {
        summary += parseInt(score);
    }

    let average = summary / scores.length;
    return {
        summary: summary,
        average: average
    };
}

function buildSheetString(scoreSheet) {
    return `
成绩单
姓名：${scoreSheet.name}
===============
数学：${scoreSheet.math}
语文：${scoreSheet.chinese}
英语：${scoreSheet.english}
编程：${scoreSheet.programming}
***************
平均分：${scoreSheet.average}
总分：${scoreSheet.summary}
===============`
}

let inputs = ["张三", "95", "80", "75", "80"];

let scoreSheet = buildScoreSheet(inputs);

let result = buildSheetString(scoreSheet);

console.log(result);