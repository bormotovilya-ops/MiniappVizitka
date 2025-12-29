import React from 'react'
import Header from './Header'
import './BlockDetail.css'

function BlockDetail({ block, onBack, onConsultation, onAvatarClick }) {
  // Специальный контент для блока "Аудитория"
  const isAudienceBlock = block.id === 'audience'

  const audienceContent = (
    <div className="block-detail-sections">
      {/* Первая секция с картинкой справа и текстом слева */}
      <div className="audience-intro-layout">
        <div className="audience-intro-text">
          <section className="block-detail-section">
            <h2>Что это за этап цепочки</h2>
            <p>
              Этап «Аудитория» — это стартовый этап всей системы продаж, на котором мы проверяем, существует ли рынок для конкретного продукта и есть ли экономический смысл двигаться дальше.
            </p>
            <p>
              Здесь мы не продаём и не упаковываем продукт, а работаем с гипотезами: о продукте, аудитории и спросе.
            </p>
          </section>
        </div>
        <div className="audience-image-wrapper">
          <img src={block.image} alt={block.name} className="audience-side-image" />
          <h1 className="audience-side-title">{block.name}</h1>
        </div>
      </div>

      <section className="block-detail-section">
        <h2>В каком состоянии находится продукт</h2>
        <p>На этом этапе продукт существует как гипотеза:</p>
        <ul className="block-detail-list">
          <li>📝 сформулирована тема и предполагаемый результат;</li>
          <li>🎯 выбран формат (курс, программа, наставничество);</li>
          <li>💰 задан ориентир по цене или ценовому диапазону;</li>
          <li>👥 описан предварительный портрет целевой аудитории.</li>
        </ul>
        <p>
          Запись уроков, создание лендингов и воронок рекомендуется начинать только после подтверждения этой гипотезы.
        </p>
      </section>

      <section className="block-detail-section block-detail-section-fullwidth">
        <h2>Схема работы</h2>
        
        <div className="workflow-diagram">
          <div className="workflow-step">
            <div className="workflow-step-header">
              <h3>Трафик</h3>
            </div>
            <div className="workflow-step-content">
              <p className="workflow-description">
                Мы работаем с трафиком, который уже есть или может быть привлечён под гипотезу продукта
              </p>
              <div className="workflow-items-grid">
                <div className="workflow-item">Яндекс.Директ</div>
                <div className="workflow-item">VK Реклама</div>
                <div className="workflow-item">Telegram-каналы</div>
                <div className="workflow-item">Социальные сети</div>
                <div className="workflow-item">Email и мессенджеры</div>
                <div className="workflow-item">Партнёрские переходы</div>
              </div>
              <div className="workflow-analysis">
                <div className="workflow-analysis-title">Что анализируем:</div>
                <div className="workflow-analysis-items">
                  <span>Источники и типы трафика</span>
                  <span>Интент и контекст входа</span>
                  <span>Объём и стоимость привлечения</span>
                </div>
              </div>
              <div className="workflow-tools">
                <div className="workflow-tools-title">Инструменты:</div>
                <div className="workflow-tools-items">
                  <span>Логика условий, теги, аналитика</span>
                  <span>Рекламные данные (Яндекс.Директ, VK)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="workflow-step workflow-step-separated">
            <div className="workflow-step-header">
              <h3>Прелендинг (точка приёма и анализа)</h3>
            </div>
            <div className="workflow-step-content">
              <p className="workflow-note">
                ⚠️ <strong>Этот этап не обязательный</strong> — возможен сразу переход на лендинг для простых проектов.
              </p>
              <p className="workflow-description">
                Вместо того чтобы сразу вести весь трафик на лендинг, мы используем прелендинг — Telegram-бот или mini-app, который принимает и анализирует аудиторию.
              </p>
              <div className="workflow-processes">
                <div className="workflow-process-title">Здесь происходит:</div>
                <div className="workflow-items-grid">
                  <div className="workflow-item">Первичная сегментация</div>
                  <div className="workflow-item">Отсеивание нерелевантного трафика</div>
                  <div className="workflow-item">Проверка гипотезы портрета ЦА</div>
                  <div className="workflow-item">Подготовка к следующему этапу</div>
                </div>
              </div>
              <div className="workflow-analysis">
                <div className="workflow-analysis-title">Что мы анализируем:</div>
                <div className="workflow-analysis-items workflow-analysis-grid">
                  <span>Лестница Ханта</span>
                  <span>Температура аудитории</span>
                  <span>Уровень знакомства с брендом</span>
                  <span>Готовность к действию</span>
                  <span>Мотивация</span>
                  <span>Уровень доверия</span>
                  <span>Стадия отношений (CRM)</span>
                  <span>Готовность к покупке</span>
                </div>
              </div>
              <div className="workflow-tools">
                <div className="workflow-tools-title">Инструменты:</div>
                <div className="workflow-tools-items">
                  <span>Telegram-боты</span>
                  <span>Mini-apps и сайты</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="block-detail-section">
        <h2>Решение по продукту и дальнейшие действия</h2>
        <p>По итогам этапа мы принимаем одно из трёх управленческих решений:</p>
        <ol className="block-detail-list block-detail-ordered-list">
          <li>✅ <strong>Гипотеза подтверждена</strong> — масштабируем трафик и переходим к этапу «Лендинг и упаковка».</li>
          <li>⚠️ <strong>Гипотеза подтверждена частично</strong> — корректируем продукт, аудиторию или позиционирование.</li>
          <li>❌ <strong>Гипотеза не подтверждена</strong> — сворачиваем или трансформируем проект, не сливая бюджет на упаковку и запись курса.</li>
        </ol>
      </section>

      <section className="block-detail-section">
        <h2>Почему этот этап важен для онлайн-школ</h2>
        <p>Этот подход позволяет:</p>
        <ul className="block-detail-list">
          <li>💡 не инвестировать вслепую в продукт и рекламу;</li>
          <li>🛡️ снизить риски запуска;</li>
          <li>📊 принимать решения на основе данных, а не ожиданий;</li>
          <li>🚀 строить масштабируемые и управляемые запуски.</li>
        </ul>
        <p className="block-detail-highlight">
          Мы сначала проверяем рынок и экономику,<br />
          и только потом вкладываемся в продукт и упаковку.
        </p>
      </section>
    </div>
  )

  return (
    <div className="block-detail-container">
      <Header 
        onAvatarClick={onAvatarClick}
        onConsultation={onConsultation}
        onBack={onBack}
      />
      
      <div className="block-detail-content">
        {!isAudienceBlock && (
          <div className="block-detail-header">
            <img src={block.image} alt={block.name} className="block-detail-image" />
            <h1 className="block-detail-title">{block.name}</h1>
          </div>
        )}

        <div className="block-detail-body">
          {isAudienceBlock ? (
            audienceContent
          ) : (
            <>
              {/* Автор с фото в формате чата */}
              <div className="chat-message">
                <img 
                  src="/images/me.jpg" 
                  alt="Илья Бормотов" 
                  className="chat-avatar" 
                  onClick={onAvatarClick}
                />
                <div className="chat-bubble">
                  <div className="chat-author">Илья Бормотов</div>
                  <p className="chat-text">{block.description}</p>
                </div>
              </div>
              
              {block.tech && block.tech.length > 0 && (
                <div className="tech-tools">
                  <h4>Технические решения:</h4>
                  <div className="tech-tools-list">
                    {block.tech.map((tool, idx) => (
                      <span key={idx} className="tech-tool-badge">{tool}</span>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
          
          <button className="consultation-btn" onClick={onConsultation}>
            Получить бесплатную консультацию
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlockDetail

