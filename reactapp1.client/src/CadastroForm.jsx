import React, { useState } from 'react';
import imagemIlustrativa from './assets/Imagem.png';
import TelaConfirmacao from './TelaConfirmacao';
import LogoMindtech from './assets/logo-mindtech.svg'
import CheckIcon from './assets/icone.svg';

let unsubscribeTimer = null;
function CadastroForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const [message, setMessage] = useState('');
    const [showUnsubcribe, setShowUnsubcribe] = useState(false);

    const beneficios = [
        "<strong>Guias e Tutoriais:</strong> Aprenda como implementar e otimizar soluções de IoT para sua empresa.",
        "<strong>Notícias e Tendências:</strong> Fique por dentro das últimas novidades e avanços no mundo do IoT.",
        "<strong>Ofertas e Promoções:</strong> Receba ofertas especiais e promoções exclusivas para assinantes da nossa newsletter."
    ];

    const API_URL = '/api/cadastro';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setStatus('Carregando');
        if (unsubscribeTimer) {
            clearTimeout(unsubscribeTimer);
        }

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ email: email })
            });

            setStatus('idle');

            if (response.status === 201) {
                setMessage('Inscrição realizada com sucesso! Bem-vindo(a)!');
                setStatus('success');
                setEmail('');
            } else if (response.status === 409) {
                setMessage('Este e-mail já está cadastrado em nosso sistema.');
                setStatus('error');
                setShowUnsubcribe(true);
            } else if (response.status === 200) {
                setMessage('Bem-vindo(a) de volta! Sua inscrição foi reativada com sucesso. ');
                setStatus('success');
                setEmail('');
                setShowUnsubcribe(false);
            } else {
                const errorData = await response.json();
                setMessage(errorData.message || 'Ocorreu um erro. Tente novamente.');
                setStatus('error');
                setShowUnsubcribe(false);
            }
        } catch (error) {
            setMessage('Não foi possivel conectar. Verifique o servidor C#.');
            setStatus('error');

        }
    };

    const handleUnsubscribe = async () => {
        if (!email) return;

        setMessage('Processando descadastro...');
        setMessage('loading');
        setShowUnsubcribe(false);

        const UNSUBSCRIBE_URL = `/api/cadastro/unsubscribe/${encodeURIComponent(email)}`;

        try {
            const response = await fetch(UNSUBSCRIBE_URL, {
                method: 'DELETE',
            });

            setStatus('idle');

            if (response.status === 200) {
                const sucessMessage = `O e-mail ${email} foi removido com sucesso.`;
                setMessage(sucessMessage);
                setStatus('unsubscribe');
                setEmail('');

                setTimeout(() => {
                    setMessage('');
                    setStatus('');
                }, 2500);
            } else if (response.status === 404) {
                setMessage('Erro: O e-mail não foi encontrado para descadastro.');
                setStatus('error');
            } else {
                setMessage('Ocorreu um erro ao tentar se descadastrar. Tente novamente mais tarde! ');
                setStatus('error');
            }
        } catch {
            setMessage('Não foi possível conectar ao servidor para descadastro.');
            setStatus('error');
        }
    };

    return (
        <div className='card-principal'>
            {status === 'success' ? (
                
                <TelaConfirmacao message={message} />


            ) : (
                    <>
                        <div className='principal-texto'>
                            <h1>Inscreva-se agora!</h1>
                            <p className='intro-texto'>
                                Preencha o formulário abaixo para se inscrever e comece a receber nossas atualizações diretamente em sua caixa de entrada.
                            </p>

                            <ul className='beneficios'>
                                {beneficios.map((beneficio, index) => (
                                    <li key={index} className='beneficio'>
                                        <span className='checkmark-icon'>✓</span>
                                        <div dangerouslySetInnerHTML={{ __html: beneficio }} />
                                    </li>
                                ))} 
                            </ul>

                            <form onSubmit={handleSubmit} className="subscription-form">
                                <label htmlFor="email-input">E-mail</label>
                                <input
                                    id="email-input"
                                    type='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="email@email.com"
                                    required
                                    disabled={status === 'loading'}
                                    className="input-field"
                                />
                                <button type="submit" disabled={status === 'loading'} className="submit-button">
                                    {status === 'loading' ? 'Inscrevendo...' : 'Inscrever-se' }
                                </button>
                            </form>
                            {message && (
                                <div className={`feedback-message ${status === 'unsubscribe' ? 'success' : status}`}>
                                    {message}
                                    {showUnsubcribe && status === 'error' && (
                                        <div className="unsubscribe-prompt">
                                            {" "}
                                            <button type="button" onClick={handleUnsubscribe} className="unsubscribe-button">
                                                Deseja se descadastrar?
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className='principal-image-container'>
                            <img src={imagemIlustrativa} alt="Ilustração IOT e Mindtech" className='ilustracao-principal' />
                            <div className='logo-info'>
                                <img src={LogoMindtech} alt="Logo" className="logo-mindtech" />
                            </div>
                        </div>
                    </>
            )}
        </div>
    );
}

export default CadastroForm;
