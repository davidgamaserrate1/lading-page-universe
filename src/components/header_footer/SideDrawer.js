import React from "react";
import {Drawer, List, ListItem} from '@mui/material'
import {scroller} from 'react-scroll'

    const SideDrawer = (props)=>{
        const links = [
            {where: 'featured', value:'Topo'},
            {where: 'venueNfo', value:'Venue NFO'},
            {where: 'highlights',value:'Destaques'},
            {where: 'pricing', value:'Preço'},
            {where: 'location', value:'Local'},
        ]

     
    const scrolToElement = (element) =>{
        scroller.scrollTo(element,{
            duration:1500,
            delay:100,
            smoth:true,
            offset:-150
        })
    }
        
    const renderItem = (item)=>(
        <ListItem button onClick={()=> scrolToElement(item.where)} key={item.where}>
            {item.value}
        </ListItem>
    )

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
        >            
            <List component="nav">
                {links.map((item)=> renderItem(item))}
            </List>

        </Drawer>
    )
}

export default SideDrawer;

//teste