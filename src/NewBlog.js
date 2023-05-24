import React, { useEffect, useState } from 'react'

const NewBlog = ({ addNewBlog, blog, updateBlog }) => {
    const [editBlog, seteditBlog] = useState("")

    useEffect(() => {
        if (blog !== "") {
            seteditBlog(blog)
        }
    }, [editBlog])

    const updateTitle = (e, id) => {
        console.log(e.target.value, id)
        blog.title = e.target.value

    }

    return (
        <div>
            {blog === "" ?
                <>
                    <h4>New Blog</h4>
                    <br /><br />
                    <form className='newBlog' onSubmit={addNewBlog}>
                        <label htmlFor="title">Blog title</label>
                        <input type="text" id='title' name='blogTitle' />
                        <br />
                        <label htmlFor="blog">Blog Content</label>
                        <textarea name="blog" cols="30" id='blog' rows="10"></textarea>
                        <input type="submit" value="Add" />
                    </form>
                </> :
                <>
                    <h4>Edit Blog</h4>
                    <br /><br />
                    <form className='newBlog' onSubmit={addNewBlog}>
                        <label htmlFor="title">Blog title</label>
                        <input type="text" id='title' name='blogTitle' onChange={(e) => updateTitle(e, editBlog.id)} value={editBlog.title} />
                        <br />
                        <label htmlFor="blog">Blog Content</label>
                        <textarea name="blog" cols="30" id='blog' rows="10" onChange={updateBlog} value={editBlog.content}></textarea>
                        <input type="submit" value="Add" />
                    </form>
                </>}
        </div>
    )
}

export default NewBlog