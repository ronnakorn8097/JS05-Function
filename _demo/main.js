// test push , feedback branch
// update solution 

// function soundofBird()
// {
// console.log('นก');
// console.log('ช้าง');

// for(let i =1 ; i <= 10 ; i ++)
// {
//     console.log('แมว');

// }

// }

// soundofBird();
// soundofBird();
// soundofBird();

function isPrime(n)
{
    // let n;
    let isPrime = true;
    for(let divider =2 ; divider < n ; divider++)
    {
        if(n % divider == 0)
        {
            isPrime = false;
            break;
        }
    }
    if(isPrime) console.log(n);
}

isPrime(5);
isPrime(7);
isPrime(13);
isPrime(2);
isPrime(4);
