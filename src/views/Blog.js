import useFetch from '../customize/fetch';
import './Blog.scss'
import { Link, useNavigate } from 'react-router-dom'

const Blog = () => {

    const { data: dataBlog, isLoading, isError }
        = useFetch('https://jsonplaceholder.typicode.com/posts')

    // console.log('checkData:', dataBlog);
    let newData = []
    if (dataBlog && dataBlog.length > 0) {
        newData = dataBlog.slice(0, 9)
        // console.log('newData:', newData);
    }

    let navigate = useNavigate();

    const handleAddNew = () => {
        navigate('/add-new-blog')
    }

    return (
        <>
            <div> <button className='add-new-btn' onClick={handleAddNew}> + Add new Blog</button></div>

            <div className='blog-container'>
                {/* < h1 > Hello Blog</ h1> */}
                {isLoading === false && newData && newData.length > 0 && newData.map(item => {
                    return (
                        <div className='single-blog' key={item.id}>
                            <div className='title'> {item.title} </div>

                            <div className='content'> {item.body} </div>



                            <button>
                                <Link to={`/blog/${item.id}`}>
                                    View detail
                                </Link>

                            </button>

                        </div>
                    )
                })}

                {isLoading &&
                    <div style={{ textAlign: 'center !important', width: '100%' }}> Loading data.... </div>
                }

            </div >

        </>


    )
}

export default Blog