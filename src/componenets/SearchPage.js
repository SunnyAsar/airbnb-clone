import React from 'react'
import SearchResult from './SearchResult'
import { Button } from '@material-ui/core'


import '../styles/searchPage.css'

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__info'>
        <p>62 Stays . 26 August to 30 August . 2 guests </p>
        <h1>Stays nearby</h1>

        <Button variant='outlined'>
          Cancellation Flexibility
        </Button>
        <Button variant='outlined'>
          Type of Place
        </Button>
        <Button variant='outlined'>
          Price
        </Button>
        <Button variant='outlined'>
          Rooms and Beds
        </Button>
        <Button variant='outlined'>
          More Filters
        </Button>
      </div>
      <SearchResult
        img='https://imagesvc.meredithcorp.io/v3/mm/image?url=https://static.onecms.io/wp-content/uploads/sites/28/2017/08/funky-loft-studio-airbnb-rental-paris-france-AIRBNBPARIS0817.jpg'
        location='In the heart of Abuja'
        title='luxurious spacious apartment'
        description='2 guests . 1 Bed . 1 Bath . Wifi'
        star={4.7}
        price= '$50/night'
        total='$ 100 Total'

      />
      <SearchResult
        img='https://cdn-images-1.medium.com/max/1200/1*FcHnzcGdh8zLJldE1atFBA.jpeg'
        location='In the heart of Lagos'
        title='Chill comfy apartment'
        description='2 guests . 1 Bed . 1 Bath . Wifi'
        star={4.7}
        price= '$60/night'
        total='$ 120 Total'

      />

      <SearchResult
        img='https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2014/05/02/101637563-airbnb.1910x1000.jpg'
        location='In the heart of Lagos'
        title='Chill comfy apartment'
        description='2 guests . 1 Bed . 1 Bath . Wifi'
        star={4.7}
        price= '$60/night'
        total='$ 120 Total'

      />

    </div>
  )
}

export default SearchPage
