import React from 'react';

type TitleProps = {
    children: React.ReactNode;
};

const TitleText: React.FC<TitleProps> = ({ children }) => {
    return <div className="text-xl text-slate-800 font-sora font-medium">{children}</div>;
};

export default TitleText;
