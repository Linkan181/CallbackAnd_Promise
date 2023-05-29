
let BookList=[
    {
        title:"The Psychology of Money",
        author:"Morgan Housel",
        year:2020
    },
    {
        title:"Who will Cry When You Die",
        author:"Robin Sharma",
        year:2019
    },
    {
        title:"A Book",
        author:"NO Sharma",
        year:2023
    }

]


function booksInAlphabeticalOrder(nlist){
    nlist.sort();
    console.log(nlist.join(",\n"));
}

function return_BookListWithTitle(list,callback){
     let newList=list.map(x=>x.title);
     callback(newList);
}

return_BookListWithTitle(BookList,booksInAlphabeticalOrder);