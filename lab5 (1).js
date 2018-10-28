//Lucas Manker
//cosc 3020
//lab 5
//10/9/17

function createMatrix(num){
    //creates a square matrix with rows/columns equal to num
    var matrix = [];
    for(var i = 0; i < num; i++){
	var row = [];
	for(var j = 0; j < num; j++){
	    row[j] = 0;
	}
	matrix[i] = row;
    }
    return matrix;
}

function printMatrix(matrix){
    //prints out the matrix row by row so it's easier to read
    for(var i = 0; i < matrix.length; i++){
	if(matrix[i].length != 0){
	    console.log(matrix[i]);
	}
    }
}

function modifyElement(row, col, matrix, entry){
    //add entries to the matrix at the defined row/column
    var temp = matrix[row - 1];
    temp[col - 1] = entry;
    matrix[row - 1] = temp;
    return matrix;
}

function convertToAdjList(adjMatrix){
    for(var i = 0; i < adjMatrix.length; i++){
	//loop for each row
	var temp = [];
	var row = adjMatrix[i];
	for(var j = 0; j < adjMatrix.length; j++){
	    //loop for each column
	    if(row[j] == 1){
		var entry = [i + 1, j + 1];
		temp.push(entry);
		//adds the pair for edges
	    }
	}
	adjMatrix[i] = temp;
	//matrix is modified to only contain the edges, therefore there is no
	//need for deleting any array pairs to clear up memory.
    }
    printMatrix(adjMatrix);
    return adjMatrix;
}


test = createMatrix(5);
//creates a matrix with 8 edges and 5 vertices
modifyElement(1,3,test,1);
modifyElement(1,5,test,1);
modifyElement(2,4,test,1);
modifyElement(3,4,test,1);
modifyElement(3,1,test,1);
modifyElement(4,1,test,1);
modifyElement(4,5,test,1);
modifyElement(5,4,test,1);

printMatrix(test);
convertToAdjList(test);
