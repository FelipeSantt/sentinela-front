import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center '>
      <h1 className='text-4xl'>Error 404!</h1>
      <h1 className='text-4xl'>Página não encontrada!</h1>
      <Link to={'/'}>Voltar</Link>
    </div>
  )
}

export default NotFound
