import{ useEffect, useState } from 'react'

const Books = () => {
  const [allBooks, setAllBooks] = useState({});

  useEffect(() => {
    const getBooks = async() => {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/docs/`)
      const responseJson = await response.json
      console.log (`YOOO`,response)

    }
    getBooks()
  });

  return(
    <>
   <div className="bookPage">
    <h1>Yo</h1>
   </div>
    </>)
}


export default Books
