import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header/Header";
import React from "react";
import {NextSeo} from 'next-seo';

export default function Home() {
    return (
        <>
            <NextSeo
                title="Dion Grendelman - Fullstack JS Developer"
                description="My name is Dion Grendelman. I am a Full Stack JS developer in the netherlands focused on Vue/React/Node. But on a daily base i also work on different PHP Project, The past 3 years i've worked with react to build the backend CMS for multiple
                                        SAAS apps. I've worked with Typescript, NuxtJs NextJS, Redux, Electron and many other libraries."
                canonical="https://www.diongrendelman.nl/"
                openGraph={{
                    url: 'https://www.diongrendelman.nl/',
                    title: 'Dion Grendelman - Fullstack JS Developer',
                    description: `My name is Dion Grendelman. I am a Full Stack JS developer in the netherlands focused on Vue/React/Node. But on a daily base i also work on different PHP Project, The past 3 years i've worked with react to build the backend CMS for multiple
                    SAAS apps. I've worked with Typescript, NuxtJs NextJS, Redux, Electron and many other libraries.`,
                    images: [
                        {url: 'https://www.diongrendelman.nl/images/BannerImage.svg', alt: 'Dion Grendelman Banner'},
                    ],
                    site_name: 'Dion Grendelman',
                }}
                twitter={{
                    handle: '@acetyldrl',
                    site: '@acetyldrl',
                    cardType: 'summary_large_image',
                }}
                additionalMetaTags={[{
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
                }]}
                additionalLinkTags={[
                    {
                        rel: 'icon',
                        href: '/favicon.ico',
                    },
                ]}
            />
            <Header/>
            <div className={`${styles.hero}`}>
                <div className={`container text-white`}>
                    <div className={'row'}>
                        <div className={'col-12 col-md-5 text-center text-md-start'}>
                            <div className='d-flex flex-column h-100 justify-content-center'>
                                <h3 className={`fw-light `} style={{opacity: 0.75}}>Hi There!</h3>
                                <h2 className={`text-primary fw-bold`}>I'm Dion Grendelman!</h2>
                                <p className={`fw-lighter`}>A Fullstack JS Native developer.</p>
                            </div>
                        </div>
                        <div className={'col-12 col-md-7'}>
                            <img className='w-100 px-5 pt-5 pt-md-0' src="/images/BannerImage.svg" alt="Vercel Logo"
                                 width={'100%'}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.aboutus}`} id={'aboutme'}>
                <div className={`text-center text-white`}>
                    <h2 className={`fw-bold`}>About me</h2>
                    <p className='fw-lighter ' style={{opacity: 0.5}}>
                        "Programming isn't about what you know; it's about what you can figure out"
                    </p>
                </div>
                <div className={'container mt-5'}>
                    <div className='row text-white justify-content-center'>
                        <div className='col-lg-4'>
                            <div className={'d-flex flex-column'}>
                                <div className={`bg-secondary mb-2 p-4`}>
                                    <h4>Vue/React</h4>
                                    <div className={'fw-lighter'}>
                                        The past years i have worked with Vue and React to create frontend environments, from simple websites to complex webapps. I've worked with many libraries in the React/Vue community.
                                    </div>
                                </div>
                                <div className={`bg-secondary mb-2 p-4`}>
                                    <h4>React Native</h4>
                                    <div className={'fw-lighter'}>Building mobile apps with React Native is such a
                                        awesome experience. I've made simple multiple "business card apps" and also some
                                        Headless SAAS apps. I've worked with many libraries in the React Native
                                        community.
                                    </div>
                                </div>
                                <div className={`mb-2 p-4`} style={{backgroundColor: 'rgba(50, 5, 142,0.3)'}}>
                                    <h4>Many more...</h4>
                                    <div className={'fw-lighter'}>My experience goes pretty wide. For example PHP (symfony/laravel/yii2)
                                        development, UX Design, VueJS, Symfony, Bootstrap, Electron, Java but my main
                                        focus is on React/React Native
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-lg-4  offset-lg-1 mt-5 mt-lg-0'}>
                            <div className='d-flex flex-column h-100 justify-content-center'>
                                <div>
                                    <h2 className={'fw-bold'}>
                                        <span className={'fw-light'}>Hello!</span><br/>
                                        I'm Dion Grendelman!
                                    </h2>
                                    <p className={'fw-lighter'}>
                                        The last years i've been builing up my coding experience. I started as a
                                        wordpress developer (custom plugins/themes) and the last 2/3 years my focus has
                                        gone to "vue/react".
                                        My passion is in the front-end development. From a simple website to a full
                                        webapp or mobile app.
                                        My best skill would be communication. Contact with customers is one of my
                                        favorite things to do.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.projects}`} id={'projects'}>
                <div className={'text-white container'}>
                    <div className={'row'}>
                        <div className={`col-md-6 `}>
                            <div className={'py-5'}>
                                <h2>My Projects</h2>
                                <p className={'fw-lighter'}>A small selection out of my portfolio 😉</p>
                                {/*<button type="button" className="btn btn-primary text-white"><i*/}
                                {/*    className="bi bi-collection me-2"></i> All projects*/}
                                {/*</button>*/}
                            </div>
                            <div className={`${styles.project}`}>
                                <div className='p-4'>
                                    <img style={{borderRadius: 15}} src="/images/verbleif.png"
                                         alt="Vercel Logo"
                                         width={'100%'}/></div>
                                <div className={`${styles.overlay} overlayer`}>
                                    <div className={`${styles.innerOverlay}`}>
                                        <div className={`row h-100 align-content-center`}>
                                            <div className={`col-12 text-center`}>
                                                <h2>Verbleif APP</h2>
                                                <p className={`fw-lighter`}>A mobiel app for the SaaS app Verbleif with Offline first support</p>
                                               <div style={{fontSize:14}}> <div className={'fw-bolder'}>Made with:</div>
                                                   <div className={'fw-light'} style={{opacity:0.8}}>React-native & Expo, Redux, RealmJS, i18n, TypeScript and connected to Symfony + API Platform</div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.project} mt-4`}>
                                <div className='p-4'>
                                    <img style={{borderRadius: 15}} src="/images/kalfsupport_app.png"
                                         alt="Vercel Logo"
                                         width={'100%'}/></div>
                                <div className={`${styles.overlay} overlayer`}>
                                    <div className={`${styles.innerOverlay}`}>
                                        <div className={`row h-100 align-content-center`}>
                                            <div className={`col-12 text-center`}>
                                                <h2>Kalfsupport Mobile App</h2>
                                                <p className={`fw-lighter`}>A mobile app (B2B) for kalfsupport. Customers can place orders here and see info about the company.</p>
                                                <div style={{fontSize:14}}> <div className={'fw-bolder'}>Made with:</div>
                                                    <div className={'fw-light'} style={{opacity:0.8}}>React-Native, Redux, i18n and connected a Wordpress Woocommerce Api + a custom Symfony API</div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-6 `}>
                            <div className={`${styles.project}`}>
                                <div className={`${styles.innerProject} p-4`}>
                                    <img style={{borderRadius: 15}} src="/images/soundspanel_cms.png"
                                         alt="Vercel Logo"
                                         width={'100%'}/></div>
                                <div className={`${styles.overlay} overlayer`}>
                                    <div className={`${styles.innerOverlay}`}>
                                        <div className={`row h-100 align-content-center`}>
                                            <div className={`col-12 text-center`}>
                                                <h2>Soundspanel Backend</h2>
                                                <p className={`fw-lighter`}>A backend made for Soundpanel. Here you can manage soundsboard apps in the Playstore</p>
                                                <div style={{fontSize:14}}> <div className={'fw-bolder'}>Made with:</div>
                                                    <div className={'fw-light'} style={{opacity:0.8}}>React, Redux, i18n, TypeScript and connected to Symfony + API Platform and firebase.</div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`${styles.project} mt-4`}>
                                <div className='p-4'>
                                    <img style={{borderRadius: 15}} src="/images/toyteam.png"
                                         alt="Vercel Logo"
                                         width={'100%'}/></div>
                                <div className={`${styles.overlay} overlayer`}>
                                    <div className={`${styles.innerOverlay}`}>
                                        <div className={`row h-100 align-content-center`}>
                                            <div className={`col-12 text-center`}>
                                                <h2>ToyTeam App</h2>
                                                <p className={`fw-lighter`}>A desktop app as a PIM. Data stored locally</p>
                                                <div style={{fontSize:14}}> <div className={'fw-bolder'}>Made with:</div>
                                                    <div className={'fw-light'} style={{opacity:0.8}}>React, Electron, Redux, i18n and connected to a Sqlite database</div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'text-center'} style={{marginTop: 100}}>
                        <h4>Find me on</h4>
                        <p className={`fw-lighter`}>Feel free to connect with me on</p>
                        <div>
                            <a target={`_blank`} href='https://twitter.com/AcetyldNL'>
                                <i className="bi bi-twitter me-2"></i>
                            </a>
                            <a target={`_blank`} href='https://github.com/Acetyld'>
                                <i className="bi bi-github me-2"></i>
                            </a>
                            <a target={`_blank`} href='https://www.linkedin.com/in/dion-grendelman-21940489/'>
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
