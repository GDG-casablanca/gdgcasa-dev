import React from 'react'

import Link from '../../../link/link'
import { BaseSection } from '../../../base-section/base-section'

export const HeroSection = () => (
  <BaseSection
    SectionTitle={() => (
      <>
        Be a hero. Be a <span className="pColor">GDG</span>.
      </>
    )}
    classNames="hero"
    id="Home"
  >
    <p className="description">
      Welcome to GDG Casablanca. Google Developer Groups of Casablanca City is
      for developers who are interested in Google's developer technology,
      everything from Android, App Engine, and Google Chrome platforms, to
      product APIs like the Maps API, YouTube API and Google Calendar API.
    </p>
    <p className="hashtags">
      #GDGCasablanca &nbsp; #WTMCasablanca &nbsp; #GDG &nbsp; #WTM
    </p>
    <div className="action-btns">
      <Link
        to="https://www.meetup.com/GDGCasablanca/"
        external
        className="btn lg"
      >
        Check our Meetup page
      </Link>
    </div>
  </BaseSection>
)
