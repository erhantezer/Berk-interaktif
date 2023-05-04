import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const links = [
    {
        id: 1,
        url: '/',
        text: 'Anasayfa',
    },
    {
        id: 2,
        url: '/about',
        text: 'Hakkımızda',
    },
    {
        id: 3,
        url: '/vegayazilim',
        text: 'Vega Yazılım',
    },
    {
        id: 4,
        url: '/edönüsüm',
        text: 'edönüsüm',
    },
    {
        id: 5,
        url: '/profile',
        text: 'profile',
    },
];

export const social = [
    {
        id: 1,
        url: 'https://www.facebook.com',
        icon: <FaFacebook />,
    },
    {
        id: 2,
        url: 'https://www.twitter.com',
        icon: <FaTwitter />,
    },
    {
        id: 3,
        url: 'https://www.linkedin.com/',
        icon: <FaLinkedin />,
    },
];