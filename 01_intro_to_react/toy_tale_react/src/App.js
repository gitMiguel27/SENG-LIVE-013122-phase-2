/* 
- Activity #1: Convert HTML to JSX
    - What needs to change? What's the same?
    - Using comments, begin to map out JSX elements into into separate components
- Activity #2: Implement a ToyCard Component
    - Start by hard-coding the JSX in your App component return statement
    - Use props to make your component reusable
    - Copy/paste data from the "toys.js" file as props and iterate over Toy objects
      to create a ToyCard component for each one
    - BONUS: 
      - Import and store data from the "toys.js" file
      - Create a "components" subdirectory + "ToyCard.js" file
*/

const toys = [
  {
    id: 1,
    name: "Woody",
    image:
      "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101036512835",
    likes: 33
  },
  {
    id: 2,
    name: "Buzz Lightyear",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6326/6326855_sd.jpg",
    likes: 14
  },
  {
    id: 3,
    name: "Mr. Potato Head",
    image:
      "https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/d/d8/Mr-potato-head-toy-story.gif/revision/latest?cb=20151129131217",
    likes: 3
  },
  {
    id: 4,
    name: "Slinky Dog",
    image: "https://www.freeiconspng.com/uploads/slinky-png-transparent-1.png",
    likes: 4
  },
  {
    id: 5,
    name: "Rex",
    image:
      "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047622890",
    likes: 1
  },
  {
    id: 6,
    name: "Bo Peep",
    image:
      "http://4.bp.blogspot.com/_OZHbJ8c71OM/Sog43CMFX2I/AAAAAAAADEs/0AKX0XslD4g/s400/bo.png",
    likes: 2
  },
  {
    id: 7,
    name: "Hamm",
    image: "https://cdn140.picsart.com/244090226021212.png?r1024x1024",
    likes: 0
  },
  {
    id: 8,
    name: "Little Green Men",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-s1q5sn_ecb74152.jpeg?region=0,0,450,450",
    likes: -2
  }
];

function ToyCard (props) {
  return (
    <div className="card">
      <h2>{props.toyName}</h2>
      <img
        src={props.imageUrl}
        className="toy-avatar"
        alt={props.toyName}
      />
      <p>{props.likes} likes</p>
      <button className="likeButton" id="1">like</button>
    </div>
  )
}

function App() {
  return (
    <div>
      {/* Header could be a component*/}
      <header className="App-header">
        <div id="toy-header">
          <img
            src="https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png"
            alt="toy-header"
          />
       </div>
      {/* Form could be a component*/}
      <div className="container">
        <form className="add-toy-form">
          <h3>Create a toy!</h3>

          <input
          type="text"
          name="name"
          defaultValue=""
          placeholder="Enter a toy's name..."
          className="input-text"
          />
            <br />
            <input
            type="text"
            name="image"
            defaultValue=""
            placeholder="Enter a toy's image URL..."
            className="input-text"
          />
          <br />
            <input
            type="submit"
            name="submit"
            value="Create Toy"
            className="submit"
          />
         </form>
        </div>
        <p style={{"text-align":"center"}}>
          Andy needs your help! <button id="new-toy-btn">Add a new toy!</button>
        </p>
      </header>
      {/* Toylist could be component*/}
      <div id="toy-collection">
        {
          toys.map(toy => {
            return (
              <ToyCard 
                toyName={toy.name}
                imageUrl={toy.image}
                likes={toy.likes}
              />
            )
          })
        }
        {/* ToyCards*/}
      </div>
    </div>
  );
}

export default App;