import React from 'react';
import Item from './item';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image5.png';
import image6 from '../assets/images/image6.jpg';
import image7 from '../assets/images/image7.jpg';
import image8 from '../assets/images/image8.jpg';

function Mainpage() {
    return (
        <div class='container' style={{ padding: '40px 20px 20px 20px' }}>
            <div class='row'>
                <div class='col-6'>
                    <p>16 products found</p>
                </div>
                <div class='col-6'>
                    <div class='row'>
                        <div class='col-3'></div>
                        <div class='col-3'></div>
                        <div class='col-3' style={{textAlign:'right'}}> Order by</div>
                        <div class='col-3'>
                            <div class="dropdown">
                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Select
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='row'>
                <div class='col-3'><Item image={image1} text='Zara TShirt' price='$20' discount='or 5 x$5.89' /></div>
                <div class='col-3'><Item image={image2} text='Armani TShirt' price='$20' discount='or 5 x$5.89' /></div>
                <div class='col-3'><Item image={image3} text='Levis TShirt' price='$20' discount='or 5 x$5.89' /></div>
                <div class='col-3'><Item image={image4} text='Chanel TShirt' price='$20' discount='or 5 x$5.89' /></div>
            </div>

            <div class='row'>
                <div class='col-3'><Item image={image5} text='Zara TShirt' price='$20' discount='or 5 x$5.89' /></div>
                <div class='col-3'><Item image={image6} text='Armani TShirt' price='$20' discount='or 5 x$5.89' /></div>
                <div class='col-3'><Item image={image3} text='Levis TShirt' price='$20' discount='or 5 x$5.89' /></div>
                <div class='col-3'><Item image={image4} text='Chanel TShirt' price='$20' discount='or 5 x$5.89' /></div>
            </div>

            <div class='row'>
                <div class='col-3'><Item image={image4} text='Zara TShirt' price='$20' discount='or 5 x$5.89' /></div>
                <div class='col-3'><Item image={image3} text='Armani TShirt' price='$20' discount='or 5 x$5.89' /></div>
                <div class='col-3'><Item image={image2} text='Levis TShirt' price='$20' discount='or 5 x$5.89' /></div>
                <div class='col-3'><Item image={image1} text='Chanel TShirt' price='$20' discount='or 5 x$5.89' /></div>
            </div>

            <div class='row'>
                <div class='col-3'><Item image={image8} text='Zara TShirt' price='$20' discount='or 5 x$5.89' /></div>
                <div class='col-3'><Item image={image7} text='Armani TShirt' price='$20' discount='or 5 x$5.89' /></div>
                <div class='col-3'><Item image={image6} text='Levis TShirt' price='$20' discount='or 5 x$5.89' /></div>
                <div class='col-3'><Item image={image5} text='Chanel TShirt' price='$20' discount='or 5 x$5.89' /></div>
            </div>
        </div>
    )
}

export default Mainpage