// var i = 0;
// while (i<10){
    //     if (i == 8){
    //         break;
    //     }
// console.log(i);
//     i++;
// }

    // for (var i = 0; i<=25; i++){
    //     console.log (i);
    //             if (i == 15){
    //                 break;
    //             }
    // }

    var numbers = [54, 65, 59, 76, 88];

    // for (var i = 0; i < numbers.length; i++){
    //     var number = numbers[i];
    //     console.log(number);
    //     if (number > 70){
    //         break;
    //     }
    // }

    for (var i = 0; i < numbers.length; i++){
            var number = numbers[i];
            if (number > 70){
                continue;
            }
            console.log(number);
        }