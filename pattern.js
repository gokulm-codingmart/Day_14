const input = require(`readline-sync`)
let q = 0;
let temp = ""
function find(matrix,x,y,rows,cols,q){  
    // let len = key_len;
    // console.log(len);
    if(x<0 || x>=rows || y<0 || y>=cols){
        return;
      }
    if(matrix[x][y]==key[q]){
        temp += matrix[x][y]
        // console.log(temp);
        q++;
    }
    else{
        return false;
    }

       find(matrix,x+1,y,rows,cols,q)
       find(matrix,x,y+1,rows,cols,q)
       find(matrix,x-1,y,rows,cols,q)
       find(matrix,x,y-1,rows,cols,q)

      if(temp==key){
        return 2;
      }
      else{
        temp = ""
        return ;
      }
}

function finding(matrix,key,x,y){
//    console.log(key);
//    for(let k=0;k<key.length;k++){
    for(let i=0;i<x;i++){
        for(let j=0;j<y;j++){
            q=0;
            if(matrix[i][j]==key[q]){
                let z = find(matrix,i,j,x,y,q,key)
                if(z==2){
                    console.log((key))
                }
                else{
                    console.log("Not found");
                    break;
                }
                //matrix,0,0,6,6,0
                // return temp;
            }
        }
    }
//    }
}

// let matrix = [["c","o","d","k","x","t"],  //0
//               ["g","t","i","n","g","p"],  //1
//               ["l","t","r","z",'m',"w"],  //2
//               ["g","a","a","x","a","l"],  //3
//               ["k","f","t","g","r","f"],  //4
//               ["z","w","l","m","t","o"]]  //5

let n = input.question("Enter the length of the array : ")
let matrix = [];
for(let i=0;i<n;i++){
    matrix[i] = new Array(n);
    for(let j=0;j<n;j++){
        matrix[i][j] = input.question("Enter the array elements : ")
    }
}
for(let i=0;i<n;i++){
console.log(matrix[i]);
}
let  x = n
let  y = n
// let key = ["coding","mart"];
let key;
do{
key = input.question("Enter the String : ");
if(key==-1){
    break;
}
else finding(matrix,key,x,y);
}while(true)


// finding(matrix,key);

// finding(matrix.key1)