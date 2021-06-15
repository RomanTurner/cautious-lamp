import React from 'react'
import { useRouter } from 'next/router';

function PostShow() {
    const router = useRouter();
    const { slug } = router.query

    return (
     <p>Post: {slug}</p>
    )
}

export default PostShow
