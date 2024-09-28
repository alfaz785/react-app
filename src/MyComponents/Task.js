import React, { useState } from 'react'

export default function Task() {
    const [show, setShow] = useState(false);

    let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel
erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.`

    return (
        <>
            {/* <p>{show ? text;:text.subString(0,50)}</p> */}

            <button onClick={()=>{
                setShow(!show)}}>
               {show ? 'ReadMore' : 'ReadLess'}
                </button>
        </>
    )
}
