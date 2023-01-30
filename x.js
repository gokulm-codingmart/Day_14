let q = 0;
let temp = ""
function find(matrix,x,y,rows,cols,q){  //0 0 6 6 0
    if(x<0 || x>=rows || y<0 || y>=cols){
        return;
      }
    if(matrix[x][y]==key[q] && q<key.length){
        temp += matrix[x][y]
        console.log(temp);
        q++;
    }
    else{
        return false
    }
       find(matrix,x+1,y,rows,cols,q)
       find(matrix,x,y+1,rows,cols,q)
       find(matrix,x-1,y,rows,cols,q)
       find(matrix,x,y-1,rows,cols,q)

       if(temp==key){
        return true;
      }
      else{
        temp =""
        return false
      }

}

function finding(matrix,key){
// console.log(key);
    x = matrix.length;
    y = matrix[0].length;
    for(let i=0;i<x;i++){
        for(let j=0;j<y;j++){
             q=0;
            if(matrix[i][j]==key[q]){
            //    console.log(matrix[i][j]);
              console.log(find(matrix,i,j,x,y,q));
            }
        
    }
    }
}

let matrix = [["c","o","d","k","x","t"],  //0
              ["g","t","i","n","g","p"],  //1
              ["l","k","o","l",'m',"w"],  //2
              ["g","a","a","x","a","l"],  //3
              ["k","f","t","g","r","f"],  //4
              ["z","w","l","m","t","o"]]  //5
// let key = "otkaf"
let key = "fot"

finding(matrix,key);