import React from 'react'
import ContentLoader from 'react-content-loader'

const Grid = props => {
  return (
    <ContentLoader 
    viewBox="0 0 820 750" 
    height={750} 
    width={820} 
    backgroundColor="#d9d9d9"
    foregroundColor="#ecebeb"
    {...props}
    >
      <rect x="10" y="10" rx="5" ry="5" width="260" height="140" />
      <rect x="280" y="10" rx="5" ry="5" width="260" height="280" />
      <rect x="550" y="10" rx="5" ry="5" width="260" height="140" />
      <rect x="10" y="160" rx="5" ry="5" width="260" height="280" />
      <rect x="280" y="300" rx="5" ry="5" width="260" height="280" />
      <rect x="550" y="160" rx="5" ry="5" width="260" height="280" />
      <rect x="10" y="450" rx="5" ry="5" width="260" height="280" />
      <rect x="280" y="590" rx="5" ry="5" width="260" height="140" />
      <rect x="550" y="450" rx="5" ry="5" width="260" height="280" />
    </ContentLoader>
  )
}

Grid.metadata = {
  name: 'baptiste fkt',
  github: 'baptistefkt',
  description: 'Three column grid layout',
  filename: 'Grid',
}

export default Grid