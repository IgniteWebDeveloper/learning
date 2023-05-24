import React, { useEffect, useState } from 'react'

const Home = ({ blogs, onEditBlogClick }) => {

  return (
    <div>
      {blogs?.length ?
        blogs.map((elem, index) => (<div className="blogs">
          <br />
            <h3>{elem?.title}</h3>
            <p>{elem?.content}</p>
             
             <button onClick={()=>onEditBlogClick(index)}>Edit</button> &nbsp;&nbsp;
             <button>Delete Permanently</button>&nbsp;&nbsp;
             <button>Move to Bin</button>
          </div>)
        )
        : <p>There is no blog</p>}
    </div>
  )
}

export default Home