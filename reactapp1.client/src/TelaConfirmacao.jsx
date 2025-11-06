import React from 'react';
import CheckIcon from './assets/icone.svg';
import LogoMindtech from './assets/logo-mindtech.svg'


const TelaConfirmacao = ({ message }) => {


    return (
        <div className='card-principal confirmation-card'>
            <div className='confirmation-content'>
                <div className ='success-icon-wrapper'>
                    <img src={CheckIcon} alt="Sucesso" className="success-icon" />
                </div>
                
                <h1>Obrigado por se inscrever na nossa newsletter!</h1>
                <p className='confirmation-message'>
                    Agora você faz parte da comunidade Mindtech e está a um passo de ficar atualizado com as últimas inovações e tendências em Internet das Coisas (IoT).
                </p>
                <button className="submit-button" onClick={handleDismiss}>
                    Fechar
                </button>
                <div className='confirmation-logo-area'>
                    <img src={LogoMindtech} alt="Logo" className="logo-mindtech"/>
                </div>
            </div>
        </div>
    )
}

const handleDismiss = () => {
    window.location.reload();
}

export default TelaConfirmacao;