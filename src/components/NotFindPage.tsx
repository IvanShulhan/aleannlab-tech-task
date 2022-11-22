import React from 'react';

type Props = {
  title: string;
}

export const NotFindPage: React.NamedExoticComponent<Props> = React.memo(({ title }) => (
  <div className="w-full min-h-screen flex justify-center items-center">
    <div className="p-10 rounded-xl bg-white shadow-card">
      <h3 className="text-3xl text-red-500 font-black">Sorry, but {title} is not found!</h3>
    </div>
  </div>
  
))