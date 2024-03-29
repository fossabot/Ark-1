import React from 'react'
import { AuthorList } from './author-list'

export const BasicAuthorList = () => (
  <AuthorList
    authors={[
      {
        name: 'Tez Brooks',
        description:
          'Award winning author, screenwriter and international speaker',
        src: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/tezg.jpg',
        onClick: () => alert('Clicked Tez')
      },
      {
        name: 'Raeli Miller',
        description:
          'Raeli Miller is the Community and Content Digital Strategist for Jesus Film Project. Her heart is captivated by Jesus, fulfilled in serving ministry leaders, and satisfied with a quality cup of coffee. She studied Writing and Rhetoric, with a double minor in Nonprofit Management and Advertising/Public Relations, at the University of Central Florida. And uses every ounce of it to help this generation find passion and confidence in following Christ. Get to know Raeli on Instagram.',
        src: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/rs.jpg',
        onClick: () => alert('Clicked Raeli')
      }
    ]}
  />
)

export const EmptyAuthorList = () => <AuthorList authors={[]} />
