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
import Footer from './components/Footer';
import './globals.css';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ІЯК 2025 Партнерство",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Home() {
  return (
    <>
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
      <Footer />
    </>
  );
}
