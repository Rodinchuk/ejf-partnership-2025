import Head from 'next/head';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import React from 'react';
import SMStats from './components/SocialMedia';
import EventAdvantages from './components/EventAdvantages';
import Activities from "./components/Activities";
import PartnersPrev from "./components/PartnersPrev";
import AboutBEST from './components/AboutBEST';
import Contacts from './components/Contacts';
import Conclusion from "./components/Conclusion";
import PackagesSection from './components/PackagesSection';
import './globals.css';

export default function Home() {   
  return (
    <>
      <Head>
        <title>ІЯК 2025 Партнерство</title>
      </Head>
      <Header />   
      <HeroSection />
      <AboutSection />
      <EventAdvantages />
      <SMStats />
      <Activities />
      <PackagesSection />
      <PartnersPrev />
      <AboutBEST />
      <Contacts />
      <Conclusion />
    </>
  );
}