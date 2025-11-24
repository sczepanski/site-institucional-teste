import React from 'react';

type DescriptionProps = {
    children: React.ReactNode;
};

const DescriptionText: React.FC<DescriptionProps> = ({ children }) => {
    return <div className="text-md text-slate-800 font-sora font-light">{children}</div>;
};

export default DescriptionText;
