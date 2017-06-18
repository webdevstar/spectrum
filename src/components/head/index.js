// @flow
import React from 'react';
import Helmet from 'react-helmet';

type Props = {
  title?: string,
  description?: string,
  showUnreadFavicon?: boolean,
};

export default ({ title, description, showUnreadFavicon }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {showUnreadFavicon &&
        <link
          rel="shortcut icon"
          id="dynamic-favicon"
          href={`${process.env.PUBLIC_URL}/img/favicon_unread.ico`}
        />}
      <meta name="apple-mobile-web-app-title" content="Spectrum" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    </Helmet>
  );
};
