import React from 'react'
import Lefthover from '../Components/Shared/Lefthover'
import CardMesagge from '../Components/Index/CardMesagge'
import ItemChatBar from '../Components/Index/ItemChatBar'
import ItemUserName from '../Components/Index/ItemUserName'
function InChatPage() {
  return (
    <div className='Div_Inchatepage'>InChatPage
        <Lefthover/>
        <CardMesagge/>
        <ItemChatBar/>
        <ItemUserName/>
    </div>
  )
}

export default InChatPage