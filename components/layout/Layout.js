import React from 'react';
import Head from 'next/head';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import useLocale from 'hooks/useLocale';
import Back from 'public/back.png';

export default function Layout({ title, children, header = true, footer = true, background }) {
  const { dir } = useLocale();

  var sectionStyle = {
    width: '100%',

    height: '400px',

    // makesure here is String确保这里是一个字符串，以下是es6写法

    backgroundImage: `url(${Back})`,
  };

  return (
    <>
      <div style={sectionStyle}>
        <Head>
          <title>umami{title && ` - ${title}`}</title>
        </Head>

        {header && <Header />}
        <main>{children}</main>
        {background && <div style={{ backgroundImage: `url(${background})` }} />}
        {footer && <Footer />}
        <div id="__modals" dir={dir} />
      </div>
    </>
  );
}
