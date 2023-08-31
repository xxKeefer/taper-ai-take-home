import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Routes} from './constants';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Oops...?</h1>
          <p className="py-6">
            Sorry something weird happened, try again later.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => navigate(Routes.Home)}
          >
            Head Back Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
