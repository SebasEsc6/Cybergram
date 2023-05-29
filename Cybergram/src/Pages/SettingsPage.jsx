import React from 'react'
import Lefthover from '../Components/Shared/Lefthover/Lefthover'
import ItemSettings from '../Components/Index/ItemSettings';
import ContainerSettings from '../Components/Index/ContainerSettings';


function SettingsPage (){


  return (
  
  <div >
      
      <ItemSettings />
      <Lefthover/>
      <ContainerSettings/>
  </div>
)
}

export default SettingsPage