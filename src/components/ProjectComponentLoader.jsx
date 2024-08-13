import React from 'react';
import { useParams } from 'react-router-dom'

function ProjectComponentLoader() {
    const {projectid} = useParams()

    let ComponentToLoad = null;
    switch ({projectid}) {
        case '1':
            ComponentToLoad = React.lazy(() => {
                import("/src/pages/projectlist/glowingSearchBox")
            })
            break;
        default: 
            ComponentToLoad = () => {<div>Component Not Found</div>}    
    }
  return <React.Suspense fallback={<div>Loading.....</div>}>
    <ComponentToLoad />
  </React.Suspense>
  
}

export default ProjectComponentLoader;