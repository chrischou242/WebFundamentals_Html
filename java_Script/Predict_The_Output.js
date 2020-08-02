for(var num = 0; num < 15; num++){
    console.log(num);
}

// expected output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14

for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}

// Expected Output:
// 3
// 6
// 9

for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}

// Expected Output:
// 1== 0
// 2== 4
// 3==4
// 4==6
// 5==0
// 6==7
// 7==0
// 8==10
// 9==10
// 10==12
// 11==0
// 12==14
// 13==0
// 14==16
// 15==16
