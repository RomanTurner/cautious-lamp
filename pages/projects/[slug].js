import React from 'react'
import { useRouter } from 'next/router' 

function ProjectShow() {
    const router = useRouter();
    const { slug } = router.query
    
    return (
        <div>
            Hello from {slug}
        </div>
    )
}

export default ProjectShow
