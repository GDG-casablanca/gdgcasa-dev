import React from 'react'
import GatsbyLink from 'gatsby-link'

const Link = ({
  to,
  children,
  external,
  ...props,
}) => {
  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <GatsbyLink to={to} {...props}>
      {children}
    </GatsbyLink>
  )
}

export default Link
