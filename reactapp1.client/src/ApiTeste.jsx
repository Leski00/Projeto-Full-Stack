import React, { useState } from 'react';

const API_URL = '/api/Cadastro';

function ApiTeste() {
    const [email, setEmail] = useState('');
    const [responseStatus, setResponseStatus] = useState(null);
    const [responseMessage, setResponseMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handLeSubmit = async (e) => {
        e.preventDefault();
        setResponseStatus(null);
        setResponseMessage('');
        setIsLoading(true);


        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email }),
            });

            setResponseStatus(response.status);

            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("applications/json")) {
                const data = await response.json();
                setResponseMessage(data.message || JSON.stringify(data));
            } else {
                setResponseMessage(response.statusText);
            }
        } catch (error) {
            setResponseStatus('ERRO');
            setResponseMessage('Não foi possivel conectar ao servidor. Verifique a URL e se o Back-end está rodando.')
            console.error(error);
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <h2>Teste de API (Cadastro)</h2>
            <p>Status: <strong>{responseStatus || 'Aguardando...'}</strong></p>
            <p>Resposta: {responseMessage}</p>

            <form onSubmit={handLeSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                    type="email"
                    placeholder="E-mail para teste"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                    style={{ padding: '8px' }}
                />
                <button type="submit" disabled={isLoading} style={{ padding: '10px', backgroundColor: '#007bff', color: 'white' }}>
                    {isLoading ? 'Enviando...' : 'POST /subscribe'}
                </button>
            </form>
        </div>
    );

}


export default ApiTeste;