import Components1 from '../components/component1'
import Components2 from '../components/component2'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import './App.css'
import Card2 from '../components/Card2'
function App() {
  let username="dinesh sirsiya"

  const users=[
    {
      "name": "Shah Rukh Khan",
      "city": "Mumbai",
      "age": 58,
      "profession": "Actor",
      "image": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Shah_Rukh_Khan_grace_the_launch_of_Samsung_Series_8_Television.jpg"
    },
    {
      "name": "Deepika Padukone",
      "city": "Mumbai",
      "age": 38,
      "profession": "Actress",
      "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/Deepika_Padukone_at_the_83_promotion.jpg"
    },
    {
      "name": "Virat Kohli",
      "city": "Delhi",
      "age": 36,
      "profession": "Cricketer",
      "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/Virat_Kohli_2020.jpg"
    },
    {
      "name": "Alia Bhatt",
      "city": "Mumbai",
      "age": 32,
      "profession": "Actress",
      "image": "https://upload.wikimedia.org/wikipedia/commons/3/32/Alia_Bhatt_promoting_Kalank.jpg"
    },
    {
      "name": "A.R. Rahman",
      "city": "Chennai",
      "age": 57,
      "profession": "Music Composer",
      "image": "https://upload.wikimedia.org/wikipedia/commons/6/6e/A._R._Rahman_2012.jpg"
    }
  ]
  
  
  const abc=() => {
    username="rakesh sirsiya"
  }
  return (
    <>
      <div>hello ji { username }kese ho </div>
      <button onClick={abc} type="button">change username</button>
     
      <Components1 />
      <Components2 />
      <Header />
      <Footer />
      <Card username={username} />
      <Card username='sirsiya ji' />

      {/* Map  */}
      <div>{users.map(function(ele){
        return (
          <Card2 name={ele.name} city={ele.city} age={ele.age} profession={ele.profession} image={ele.image} />
        )
      })}</div>

      

    </>
  )
}

export default App
