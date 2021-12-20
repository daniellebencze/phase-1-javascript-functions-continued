// // code your solution here
// function saturdayFun (activity = "roller-skate") {
//     return `This Saturday, I want to ${activity}!`;
// };

// function mondayWork (activity = "go to the office") {
//     return `This Monday, I will ${activity}.`;
// };

// const wrapAdjective = function(symbol = "*") {
//     return function (adjective = "a dedicated programmer") {
//         return `You are ${symbol}${adjective}${symbol}!`
//     } ;
// }

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
saturdayFun("bathe my dog");

function mondayWork(location = "go to the office") {
  return `This Monday, I will ${location}.`;
}
mondayWork("work from home");

function wrapAdjective(emphasis = "*") {
  const innerFunction = function (compliment = "a hard worker") {
    return `You are ${emphasis}${compliment}${emphasis}!`;
  };
  return innerFunction;
}

wrapAdjective("a dedicated programmer");
