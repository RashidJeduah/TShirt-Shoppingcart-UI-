import React from 'react';

function SidebarItem({text}){
    return (
        <div style={{height:'32px', width:'32px', borderRadius:'50%',backgroundColor:'gainsboro', 
        margin:'5px', textAlign:'center'}}>
             {text}
            </div>
    )
}

export default SidebarItem