import '../views/Blog.scss'
import { useState } from 'react';

const AddNewBlog = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!title || !content) {
            alert('empty');
            return
        }
        console.log(title, content)

    }
    return (
        <div className="add-new-container" onSubmit={handleSubmit}>
            <form>


                <div className="add-new-text"> --- Add New Blog --- </div>
                <div className='input-data'>
                    <lable>Title:        </lable>
                    <input type='text' value={title} onChange={(event) => setTitle(event.target.value)} />
                </div>

                <div className='input-data'>
                    <lable>Content:        </lable>
                    <input type='text' value={content} onChange={(event) => setContent(event.target.value)} />
                </div>

                {/* <button className='add-new-btn' onClick={handleSubmit}> Submit </button> */}
                <button className='add-new-btn' type='submit'> Submit </button>
            </form>
        </div>
    )
}

export default AddNewBlog;