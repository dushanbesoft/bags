/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Header } from './Header/Header';

export const Layout: React.FC<any> = ({ children }) => {
    return (
        <div className="flex w-full justify-center items-center font-inter  ">
            <div className="flex flex-col w-full  md:w-[1360px] py-[18px] md:py-[19.5px] gap-[20.5px] px-[12px] md:px-[0px]">
                <Header />
                {children}
            </div>
        </div>
    );
};
