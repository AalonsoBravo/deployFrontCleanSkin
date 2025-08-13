import { Link } from 'react-router-dom'
import React from 'react'

const Error = () => {
    return (
        <>
        <main>
            <div className='container mt-5'>
                <div className='text-center mt-5'>
                    <h1>404 ERROR NO ENCONTRADO</h1>
                    <img src="https://mirage-it.com/wp-content/uploads/2017/12/Error404-4.png" alt='Error 404' className='img-fluid mb-4' style={{ maxWidth: '60%', height: 'auto', margin: '0 auto' }} />
                    <p>
                        Lo sentimos, la página que buscas no existe.
                    </p>
                    <Link to="/">
                        Volver al inicio
                    </Link>
                </div>
            </div>
        </main>
        </>
    )
}

export default Error