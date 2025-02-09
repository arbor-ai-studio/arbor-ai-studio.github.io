/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

import { Fade } from 'react-awesome-reveal';

import { ActiveTheme, SecondaryColor } from 'customize';

// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';

import Button from 'elements/Button';

import { ItemTypes } from 'json/landingPageData';

export default function AllPortfolio({ data }) {
  // Dynamically map data to each type using item types defined in ItemTypes
  const tabsData = Object.values(ItemTypes).map((type) => ({ // Fixed arrow-parens
    type,
    items: data.filter((item) => item.type === type), // Fixed arrow-parens
  }));

  return (
    <Fade bottom>
      <section className="container mx-auto">
        <Tabs className="flex flex-col px-4">
          <TabList>
            <div className="flex flex-row mb-5">
              {tabsData.map((tab, tabIndex) => ( // Renamed index to tabIndex to avoid no-shadow
                <Tab key={tabIndex}>
                  <button className={`font-normal px-5 py-2 mr-3 text-${ActiveTheme} text-lg border border-${ActiveTheme} rounded-full transition duration-300 hover:bg-${ActiveTheme} hover:text-white focus:outline-none focus:bg-${ActiveTheme} focus:text-white`}>
                    {tab.type}
                  </button>
                </Tab>
              ))}
            </div>
          </TabList>

          {tabsData.map((tab, panelIndex) => ( // Renamed index to panelIndex to avoid no-shadow
            <TabPanel key={panelIndex}>
              <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 xl:gap-8 justify-items-center">
                {tab.items.map((item, itemIndex) => ( // Renamed from index to avoid no-shadow
                  <Fade triggerOnce direction="up" delay={500 * itemIndex} key={itemIndex}>
                    <Button type="link" href={`/project/${item.id}`}>
                      <div className="group rounded-2xl shadow-xl w-auto m-3 transform transition duration-500 hover:scale-110 portfolio-card">
                        <div className="relative">
                          <img src={item.imageUrl} alt="Portfolio" className="rounded-t-2xl z-0" />
                          <div className="absolute flex w-full h-full top-0 opacity-0 bg-black justify-center rounded-t-2xl rounded-b img-hover">
                            <button className="focus:outline-none">
                              <svg className="w-20 h-20 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="py-4">
                          <h2 className="text-center text-xl" style={{ color: SecondaryColor }}>{item.title}</h2>
                          <p className="font-light text-gray-400 text-center">{item.type}</p>
                        </div>
                      </div>
                    </Button>
                  </Fade>
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </section>
    </Fade>
  );
}
