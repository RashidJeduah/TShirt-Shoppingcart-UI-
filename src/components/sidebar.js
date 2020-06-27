import React from 'react';
import SidebarItem from './sidebaritem';

function Sidebar() {
    return (
        <div class='container' style={{ paddingTop: '40px' }}>
            <div class='row'>
                <h6>Sizes:</h6>
            </div>
            <div class='row' style={{marginTop:'10px', marginBottom:'10px'}}>
                <div class='col-3'>
                    <SidebarItem text='XS' />
                </div>
                <div class='col-3'>
                    <SidebarItem text='S' />
                </div>
                <div class='col-3'>
                    <SidebarItem text='M' />
                </div>
                <div class='col-3'>
                    <SidebarItem text='ML' />
                </div>
                <div class='col-3'>
                    <SidebarItem text='L' />
                </div>
                <div class='col-3'>
                    <SidebarItem text='XL' />
                </div>
                <div class='col-3'>
                    <SidebarItem text='XXL' />
                </div>
            </div>
            <div class='row' style={{textAlign:'center'}}>
                Leave a commment on Github if this repository was useful :)
            </div>
        </div>
    )
}

export default Sidebar