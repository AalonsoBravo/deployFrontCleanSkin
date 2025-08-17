import '../css/Chat.css'
import React from 'react'

const ChatIA = () => {
    return (
        <>
        <main>
            <div className='container mt-5'>
                <div className='text-center mt-5'>
                    <h1>Chat con AI</h1>
                    <p>
                        Pregunta cualquier cosa y la IA te responderá.
                    </p>
                </div>
            </div>

            <div className='container mt-5 mb-5'>
                <iframe className='chat' src="https://www.chatbase.co/chatbot-iframe/STvXB3dmdkIGZQJI-4aU_" title="ChatIA"/>
            </div>
        </main>
        </>
    )
}

export default ChatIA