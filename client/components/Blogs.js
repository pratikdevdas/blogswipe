import { useState } from "react";

const Blogs = () => {
     const [show, setShow] = useState('show')   
    return (
        <div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore veniam laudantium porro blanditiis cumque aspernatur aperiam adipisci a! Quaerat consequuntur excepturi praesentium mollitia, odit voluptate tempora velit dolor blanditiis atque!</div>

            <button onClick={()=>setShow('hide')}>{show === 'show'? <>show</> : <>revealed</>}</button>
            {show === 'hide' ? <>the name is khan</>: null}
        </div>
    );
}

export default Blogs;