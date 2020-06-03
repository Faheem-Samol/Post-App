import React from 'react';
import './Header.css'

function head(props){
    return <div className='head'>
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Write Note Here" aria-label="Write Note Here" aria-describedby="button-addon2"></input>
            <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div>
            </div>
            </div>
}

export default head;