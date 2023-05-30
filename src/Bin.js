import React, { useEffect, useState } from 'react'

const Bin = () => {
const [binBlogs, setbinBlogs] = useState([])
  useEffect(() => {
    if(JSON.parse(sessionStorage.getItem('binBlogs')) !== ""){
      setbinBlogs(JSON.parse(sessionStorage.getItem('binBlogs')))
    }
  }, [])
  
  return (
    <div>
      {binBlogs?.length ?
        binBlogs.map((elem, index) => (<div className="blogs">
          <br />
            <h3>{elem?.title}</h3>
            <p>{elem?.content}</p>
             
             <button>Delete Permanently</button>&nbsp;&nbsp;
             <button>Restore</button>&nbsp;&nbsp;
          </div>)
        )
        : <p>There is no blog</p>}
    </div>
  )
}

export default Bin