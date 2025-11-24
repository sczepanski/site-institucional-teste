import React from 'react';

type SubTitleProps = {
    children: React.ReactNode;
};

const SubTitleText: React.FC<SubTitleProps> = ({ children }) => {
    return (
        <div
            className="text-lg text-slate-800 font-sora 
    "
        >
            {children}
        </div>
    );
};

export default SubTitleText;
