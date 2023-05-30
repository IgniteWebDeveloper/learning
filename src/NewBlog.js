import React, { useEffect, useState } from 'react'

const NewBlog = ({ addNewBlog, blogs, edittedBlog }) => {
    const [editBlog, seteditBlog] = useState({})

    useEffect(() => {
        if (!blogs.length) {
            seteditBlog(edittedBlog)
        }
    }, [])
    console.log("edit", editBlog)

    const updateBlog = (e, id) => {
        console.log(e.target.value, id)
        seteditBlog({
            ...editBlog,
            [e.target.name]: e.target.value
        })

    }

    return (
        <div>
            {!blogs ?
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
                        <input type="text" id='title' name='title' onChange={(e) => updateBlog(e, editBlog.id)} value={editBlog?.title} />
                        <br />
                        <label htmlFor="blog">Blog Content</label>
                        <textarea name="content" cols="30" id='blog' rows="10" onChange={updateBlog} value={editBlog?.content}></textarea>
                        <input type="submit" value="Update" />
                    </form>
                </>}
        </div>
    )
}

export default NewBlog