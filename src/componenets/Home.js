import React from 'react'
import Banner from './Banner'
import Card from './Card'

import '../styles/home.css'

function Home() {
  const locations = [
    {
    src: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https://static.onecms.io/wp-content/uploads/sites/28/2017/08/funky-loft-studio-airbnb-rental-paris-france-AIRBNBPARIS0817.jpg',
    title: 'Entire Home',
    description: 'Compy, quiet and refreshing',
    price: '$80/night'},
    {
      src:'https://encoreatlanta.com/wp-content/uploads/2015/09/airbnb-tacoma.jpg',
      title: 'Best of paris',
      description: 'Compy, quiet and refreshing',
      price: '$100/night'
    },
    {
      src:'https://cdn.thecoolist.com/wp-content/uploads/2016/06/Seashell-House-weird-airbnb-rental.jpg',
      title:'Best of nature',
      description:'Compy, quiet and refreshing',
      price:'$30/night',
    }
  ]
  return (
    <div className='home'>
      <Banner/>
      <div className='home__section'> 
        {locations.map(item => (<Card
          src={item.src}
          title={item.title}
          description={item.description}
          price={item.price}
        />))}
        
      </div>
    </div>
  )
}

export default Home
