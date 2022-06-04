import React from 'react';
import Layout from 'components/layout/Layout';
import LoginForm from 'components/forms/LoginForm';
import Back from 'public/back.png';

export default function LoginPage() {
  if (process.env.DISABLE_LOGIN) {
    return null;
  }

  var sectionStyle = {
    width: '100%',

    height: '400px',

    // makesure here is String确保这里是一个字符串，以下是es6写法

    backgroundImage: `url(${Back})`,
  };

  return (
    <div style={sectionStyle}>
      <Layout title="login" header={false} footer={false} center>
        <LoginForm />
      </Layout>
    </div>
  );
}
