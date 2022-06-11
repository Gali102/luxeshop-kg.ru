import React from 'react';
import { Link } from "react-router-dom";

function NotPage() {
  return (
    <div className="not-page">
      <h2 className="not-page__title">404</h2>
      <p className="not-page__text">Упс! Страница не найдена</p>
      <Link to="/" className="not-page__link">
        На главную
      </Link>
    </div>

  );
}

export default NotPage;
