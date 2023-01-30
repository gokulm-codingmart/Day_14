function floodfill(matrix,x,y,color){
    let temp = matrix[x][y];
    if(temp == color){
        return matrix;
    }
    else{
    let rows = matrix.length;
    let cols = matrix[0].length;
    filler(matrix,temp,color,x,y,rows,cols)
    return matrix;

    }
}

function filler(matrix,temp,color,x,y,rows,cols){
  if(x<0 || x>=rows || y<0 || y>=cols){
    return;
  }
  if(matrix[x][y]!=temp){   
    return;
  }
   matrix[x][y] = color;

   filler(matrix,temp,color,x+1,y,rows,cols)
   filler(matrix,temp,color,x,y+1,rows,cols)
   filler(matrix,temp,color,x-1,y,rows,cols)
   filler(matrix,temp,color,x,y-1,rows,cols)

}
let matrix = [[1,1,1,1],
              [0,1,0,1],
              [1,0,1,1]];

let res = floodfill(matrix,0,0,2)  //array, position or co-ordinates,newfiller
for(let i=0;i<res.length;i++){
    console.log(res[i]);
}
