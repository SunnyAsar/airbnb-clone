import React from 'react'
import Banner from './Banner'
import Card from './Card'

import '../styles/home.css'

function Home() {
  return (
    <div className='home'>
      <Banner/>
      <div className='home__section'> 
        <Card
          src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https://static.onecms.io/wp-content/uploads/sites/28/2017/08/funky-loft-studio-airbnb-rental-paris-france-AIRBNBPARIS0817.jpg'
          title='Entire Home'
          description='Compy, quiet and refreshing'
          price='$80/night'
        />
        <Card
          src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https://static.onecms.io/wp-content/uploads/sites/28/2017/08/funky-loft-studio-airbnb-rental-paris-france-AIRBNBPARIS0817.jpg'
          title='Best of paris'
          description='Compy, quiet and refreshing'
          price='$100/night'
        />
        <Card
          src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https://static.onecms.io/wp-content/uploads/sites/28/2017/08/funky-loft-studio-airbnb-rental-paris-france-AIRBNBPARIS0817.jpg'
          title='Best of nature'
          description='Compy, quiet and refreshing'
          price='$30/night'
        />
      </div>
    </div>
  )
}

export default Home
