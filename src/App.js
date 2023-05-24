import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router'
import Home from './Home'
import NewBlog from './NewBlog'
import EditBlog from './EditBlog'
import Bin from './Bin'

const App = () => {
  const navigate = useNavigate()
  const [blogs, setblog] = useState([])
  const [edittedBlog, setedittedBlog] = useState({})
  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem('blog'))) {
      setblog(JSON.parse(sessionStorage.getItem('blog')))
    }
    console.log(edittedBlog)
  }, [])

  const addNewBlog = (e) => {
    e.preventDefault()
    const blog = {
      id: blogs.length + 1,
      title: e.target.blogTitle.value,
      content: e.target.blog.value
    }
    console.log("first", blog)

    console.log("first", blogs)
    let allBlog = [...blogs, blog]
    setblog(allBlog)
    sessionStorage.setItem('blog', JSON.stringify(allBlog))
    e.target.blogTitle.value = ""
    e.target.blog.value = ""
  }

  const onEditBlogClick = (index) => {
    const blog = blogs.find((elem, i) => i === index)
    setedittedBlog(blog)
    return redirect()
  }
  const redirect = () => {
    console.log(edittedBlog)
    navigate("/edit-blog")
  }



  const updateBlog = () => {

  }

  return (
    <div>
      <a href="/">Home</a>&nbsp;&nbsp;
      <a href="/new-blog">New blog</a>&nbsp;&nbsp;
      <a href="/edit-blog">Edit Blog</a>&nbsp;&nbsp;
      <a href="/bin">Bin</a>
      <Routes>
        <Route path={'/'} element={<Home blogs={blogs} onEditBlogClick={onEditBlogClick}/>} />
        <Route path={'/new-blog'} element={<NewBlog blog={blogs} setblog={setblog} addNewBlog={addNewBlog} />} />
        <Route path={'/edit-blog'} element={<NewBlog blog={edittedBlog} updateBlog={updateBlog} />} />
        <Route path={'/bin'} element={<Bin />} />
      </Routes>
    </div>
  )
}

export default App