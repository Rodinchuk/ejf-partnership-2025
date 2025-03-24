import Head from 'next/head';
import Header from '../components/Headeren';
import HeroSection from '../components/HeroSectionen';
import AboutSection from '../components/AboutSectionen';
import React from 'react';
import SMStats from '../components/SocialMediaen';
import EventAdvantages from '../components/EventAdvantagesen';
import Activities from "../components/Activitiesen";
import PartnersPrev from "../components/PartnersPreven";
import AboutBEST from '../components/AboutBESTen';
import Contacts from '../components/Conctactsen';
import Conclusion from "../components/Conclusionen";
import PackagesSection from '../components/PackagesSectionen';
import Footer from '../components/Footer';
import '../globals.css';

export default function Home() {   
  return (
    <>
      <Head>
        <title>EJF 2025 Partnership</title>
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
      <Footer />
    </>
  );
}