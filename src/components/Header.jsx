import React from 'react'
import './Header.css'

function Header({ onAvatarClick, onConsultation, onBack }) {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+79991237788'
  }

  return (
    <div className="header-block">
      <div className="header-content">
        <div className="header-avatar-wrapper">
          {onBack && (
            <button className="header-back-btn" onClick={onBack}>
              ← Назад
            </button>
          )}
          <img 
            src="/images/me.jpg" 
            alt="Илья Бормотов" 
            className="header-avatar" 
            onClick={onAvatarClick}
          />
        </div>
        <div className="header-name-block" onClick={onAvatarClick}>
          <div className="header-name">Бормотов Илья</div>
          <h1 className="header-title">Архитектор АИЦП</h1>
        </div>
        <div className="header-contact-block">
          <a href="tel:+79991237788" className="header-phone" onClick={handlePhoneClick}>
            +7 (999) 123-77-88
          </a>
          <button className="header-consultation-btn" onClick={onConsultation}>
            Диагностика воронки
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
