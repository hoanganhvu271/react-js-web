import { useParams, useNavigate } from "react-router-dom"
import useFetch from "../customize/fetch"
import '../views/Blog.scss'
const DetailBlog = () => {
    let { id } = useParams()
    let history = useNavigate()

    const handleBackData = () => {
        history('/blog')
    }

    const { data: dataBlogDetail, isLoading, isError }
        = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    return (
        <>
            <div>
                <span onClick={handleBackData}>
                    &lt;--Back
                </span>
            </div>

            <div className="blog-detail">
                {dataBlogDetail &&
                    <>
                        <div className="title"> Blog {id} : {isLoading ? 'Loading data...' : dataBlogDetail.title} </div>
                        <div className="content">{dataBlogDetail.body}</div>
                    </>
                }
            </div>



        </>
    )
}

export default DetailBlog