'use client'
import React, { useCallback, useState } from 'react';
import HomeFeed from '../components/HomeFeed';
import Tracking from '../components/Tracking';
import { ConsumedFoodsProvider } from '../components/Context';
import { Tabs } from '../components/types';
import ChatBot from '../components/Chat';


const Home = () => {
    const [activeTab, setActiveTab] = useState(Tabs.Feed);
    const tabClassNames = {
        active: `border-blue-500 bg-blue-500 hover:bg-blue-700 text-white`,
        notActive: `border-white  hover:border-gray-200 text-blue-500 hover:bg-gray-200`
    }

    const toggleTabsClick = useCallback((val: Tabs) => {
        setActiveTab(val);
    }, []);

    const updateToTrackingTab = useCallback(() => {
        setActiveTab(Tabs.Tracking);
    }, []);

    return (
        <>
            <ConsumedFoodsProvider>
                <div className='w-5/6 mx-auto'>
                    <section className="home__navbar my-8 sticky top-0 z-50 dark:bg-gray-800">
                        <ul className="flex gap-3">
                            <li className="mr-2 w-1/6">
                                <a className={`text-center block border rounded py-2 px-4 
                            ${activeTab === Tabs.Feed ? tabClassNames.active : tabClassNames.notActive}`}
                                    onClick={() => toggleTabsClick(Tabs.Feed)}
                                    href="javascript:void(0);"
                                >Feed</a>
                            </li>
                            <li className="mr-2 w-1/6">
                                <a className={`text-center block border rounded py-2 px-4  
                            ${activeTab === Tabs.Tracking ? tabClassNames.active : tabClassNames.notActive}`}
                                    onClick={() => toggleTabsClick(Tabs.Tracking)}
                                    href="javascript:void(0);"
                                >Tracking</a>
                            </li>
                        </ul>
                    </section>


                    <section className='mt-8'>
                        {activeTab === Tabs.Feed && <HomeFeed updateToTrackingTab={toggleTabsClick} />}
                    </section>

                    <section className='mt-8'>
                        {activeTab === Tabs.Tracking && <Tracking updateToHomeFeed={toggleTabsClick} />}
                    </section>

                </div>
            </ConsumedFoodsProvider>

            <div className='w-full, h-32 bg-gray-800 overflow-auto'>
                <ChatBot />
            </div>
        </>

    )
}

export default Home;