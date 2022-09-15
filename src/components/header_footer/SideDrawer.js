import React from "react";
    import {Drawer, List, ListItem} from '@mui/material'

    const SideDrawer = (props)=>{
        const links = [
            {where: 'featured', value:'Topo'},
            {where: 'venuenfo', value:'Venue NFO'},
            {where: 'destaques',value:'Destaques'},
            {where: 'princing', value:'Preço'},
            {where: 'location', value:'Local'},
        ]

    const renderItem = (item)=>(
        <ListItem button onClick={()=> alert(item.where)} key={item.where}>
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