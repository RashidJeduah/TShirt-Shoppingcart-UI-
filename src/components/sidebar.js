import React from 'react';
import SidebarItem from './sidebaritem';

function Sidebar() {
    return (
        <div className='container' style={{ paddingTop: '40px' }}>
            <div className='row'>
                <h6>Sizes:</h6>
            </div>
            <div className='row' style={{marginTop:'10px', marginBottom:'10px'}}>
                <div className='col-md-3'>
                    <SidebarItem text='XS' />
                </div>
                <div className='col-md-3'>
                    <SidebarItem text='S' />
                </div>
                <div className='col-md-3'>
                    <SidebarItem text='M' />
                </div>
                <div className='col-md-3'>
                    <SidebarItem text='ML' />
                </div>
                <div className='col-md-3'>
                    <SidebarItem text='L' />
                </div>
                <div className='col-md-3'>
                    <SidebarItem text='XL' />
                </div>
                <div className='col-md-3'>
                    <SidebarItem text='XXL' />
                </div>
            </div>
            <div className='row' style={{textAlign:'center'}}>
                Leave a commment on Github if this repository was useful :)
            </div>
        </div>
    )
}

export default Sidebar