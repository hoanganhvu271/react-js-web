import useFetch from '../customize/fetch';
import './Blog.scss'
const Blog = () => {

    const { data: dataBlog, isLoading, isError }
        = useFetch('https://jsonplaceholder.typicode.com/posts')

    // console.log('checkData:', dataBlog);
    let newData = []
    if (dataBlog && dataBlog.length > 0) {
        newData = dataBlog.slice(0, 9)
        console.log('newData:', newData);
    }
    return (
        <>

            <div className='blog-container'>
                {/* < h1 > Hello Blog</ h1> */}
                {newData && newData.length > 0 && newData.map(item => {
                    return (
                        <div className='single-blog'>
                            <div className='title'>
                                {item.title}
                            </div>

                            <div className='content'>
                                {item.body}
                            </div>

                            <button>View detail</button>

                        </div>
                    )
                })}
            </div>

        </>


    )
}

export default Blog