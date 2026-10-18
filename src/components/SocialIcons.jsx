import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function SocialIcons() {
  return (
    <span style={{ display: 'flex', gap: 16 }}>
      <a href={personalInfo.socials.github} target="_blank" rel="noreferrer">GitHub</a>
      <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      <a href={personalInfo.socials.email}>Email</a>
    </span>
  );
}
