import React from 'react'

function Error({message}) {
  return (
    <div className='mt-5'>
      <div class="alert alert-danger" role="alert">
        {message}
     </div>
    </div>
  )
}

export default Error
