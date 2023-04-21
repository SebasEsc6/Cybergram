import React from 'react'
import ContainerCardPublicacion from '../Components/Index/ContainerCardPublicacion'
import CardProfile from '../Components/Index/CardProfile'
import Gohome from '../Components/Shared/Gohome'
import '../css/ProfilePage.css'

function ProfilePage() {
  return (
    <div>
        <Gohome /> 
        <CardProfile />
        <ContainerCardPublicacion />
        </div>
  )
}
 
export default ProfilePage  