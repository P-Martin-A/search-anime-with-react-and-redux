import React from 'react'

import CopyRight from '../../components/copyRight'

function Footer() {
  return (
    <footer className="position-fixed bottom-0 start-0 end-0 bg-info text-center py-2">
      <div className="container h-100">
        <CopyRight />
      </div>
    </footer>
  )
}

export default Footer
