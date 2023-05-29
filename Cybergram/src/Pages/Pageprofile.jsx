import React from 'react'
import ContainerPerfil from '../Components/Index/ContainerPerfil'
import CardProfile from '../Components/Index/CardProfile'
import Gohome from '../Components/Shared/Gohome/Gohome'

const Pageprofile = () => {
  return (
    
    <div className='profilePageDiv'>
        <Gohome />
        <CardProfile user='Totono.39' followers='250' post='5' following='200'/>
        <ContainerPerfil />
    </div>
  )
}

export default Pageprofile