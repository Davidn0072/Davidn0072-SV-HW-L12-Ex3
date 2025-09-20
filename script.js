const books = [
  { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", year: 1967 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { title: "War and Peace", author: "Leo Tolstoy", year: 1869 },
  { title: "The Catcher in the Rye", author: "J. D. Salinger", year: 1951 },
  { title: "The Hobbit", author: "J. R. R. Tolkien", year: 1937 },
  { title: "The Chronicles of Narnia", author: "C. S. Lewis", year: 1950 },
  { title: "The Kite Runner", author: "Khaled Hosseini", year: 2003 },
  { title: "Great Expectations", author: "Charles Dickens", year: 1860 },
  { title: "Anna Karenina", author: "Leo Tolstoy", year: 1878 },
  { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", year: 1880 },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866 },
  { title: "Wuthering Heights", author: "Emily Brontë", year: 1847 },
  { title: "Jane Eyre", author: "Charlotte Brontë", year: 1847 },
  { title: "The Picture of Dorian Gray", author: "Oscar Wilde", year: 1890 },
  { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  { title: "One Flew Over the Cuckoo’s Nest", author: "Ken Kesey", year: 1962 },
  { title: "Beloved", author: "Toni Morrison", year: 1987 },
  { title: "The Sun Also Rises", author: "Ernest Hemingway", year: 1926 },
  { title: "The Grapes of Wrath", author: "John Steinbeck", year: 1939 },
  { title: "Lord of the Flies", author: "William Golding", year: 1954 },
  { title: "Slaughterhouse‑Five", author: "Kurt Vonnegut", year: 1969 },
  { title: "The Odyssey", author: "Homer", year: -800 },   // approximate
  { title: "Don Quixote", author: "Miguel de Cervantes", year: 1605 },
  { title: "Frankenstein", author: "Mary Shelley", year: 1818 },
  { title: "The Divine Comedy", author: "Dante Alighieri", year: 1320 },
  { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
  { title: "The Trial", author: "Franz Kafka", year: 1925 }
];

const input = document.getElementById("NIS");
input.addEventListener("keyup", onKeyupFunc);

function onKeyupFunc(event) {
 
  //const num = Number(event.target.value);
  const value = event.target.value;

//alert(event.target.value);

  if (value.trim() !== "") {
    BldProdDiv(filterbooksTitle(value, books));
  //}
  //else if ((event.key !== "Backspace")&&(event.key !== "Delete")&&(value.trim() !== ""))
  //{ 
  //  alert('Please enter a numeric value')
  }    
}

function filterbooksTitle(title, arr)
{
  let newArr = arr.filter((item,i)=>{
    if ((item.title.indexOf(title) > -1 ) )
      return item
  });
  return newArr
}

function BldProdDiv(arr)
{
  //console.log(arr)     clearDiv();  document.getElementsByClassName("div");
    clearDiv();  
   let bookDiv;
   const divFullName = document.createElement("div");
   
   arr.forEach((item,i,arr)=>{
      bookDiv = document.createElement("div");
      bookDiv.className = "bookDivCls";
      bookDiv.style.display = "block";
      
      document.body.appendChild(bookDiv);
      
      let bookSpn = document.createElement("div");
      bookSpn.innerHTML = arr[i].title;
      bookSpn.style.fontWeight = 'Bold';
      bookSpn.style.margin.buttom = '0px';
      bookSpn.style.margin.top = '0px';
      bookSpn.style.display = "inline";      
      bookDiv.appendChild(bookSpn);

      bookSpn = document.createElement("div");
      bookSpn.innerHTML = arr[i].author;
      bookSpn.style.color = 'blue';
      //bookSpn.style.margin.buttom = '0px';
      bookSpn.style.margin = '5px';
      bookSpn.style.display = "inline";            
      bookDiv.appendChild(bookSpn);

      bookSpn = document.createElement("div");
      bookSpn.innerHTML = +arr[i].year;
      bookSpn.style.color = 'gray';
      bookSpn.style.fontSize  = '10px';
      bookSpn.style.height = "20px"
      //bookSpn.style.display = "block";
      bookSpn.style.display = "flex";
      bookSpn.style.alignItems = "top";
      bookSpn.style.justifyContent = "left"; 

      bookDiv.appendChild(bookSpn);

   })
}

function clearDiv()
{
  const arr = document.getElementsByClassName("bookDivCls");
  for (let i=arr.length-1;i>=0;i--)
  {
    document.body.removeChild(arr[i]);
  }
}