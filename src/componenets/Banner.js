import React, { useState} from 'react'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import Search from './Search'
import '../styles/banner.css'

function Banner() {
  const [showSearch, setShowSearch] = useState(false)
  const history = useHistory()

  return (
    <div className='banner'>
      <div className='banner__search'> 
        {showSearch && <Search />}
        <Button onClick={()=> setShowSearch(!showSearch)} 
          varient='outlined' 
          className='bannerSearch__button'>
        {showSearch ? 'Hide Search' : ' Search Dates'}
        </Button>
      </div>
      <div className='banner__info'>
        <h1>Get out and strech your imagination</h1>
        <h5>
          Plan a different kind of getaway to 
          discover the hidden gems near you
        </h5>

        <Button 
          onClick={()=> history.push('/search')}
          variant='outlined'>
          Explore NearBy
        </Button>
      </div>
    </div>
  )
}

export default Banner
