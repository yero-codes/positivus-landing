import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Спасибо за интерес!</h2>
        <p>Это демонстрационная версия лендинга. В реальном проекте здесь была бы форма регистрации или переход на страницу тарифов.</p>
        <button className="modal-btn" onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default Modal;