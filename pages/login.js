import React from 'react';
import Layout from 'components/layout/Layout';
import LoginForm from 'components/forms/LoginForm';
import Image from 'next/image';

export default function LoginPage() {
  if (process.env.DISABLE_LOGIN) {
    return null;
  }

  return (
    <Layout title="login" header={false} footer={false} center>
      <LoginForm />
      <div style={{ textAlign: 'center', padding: '30px 0px' }}>
        <Image src="/back.png" width={650} height={360} alt="万兆带宽" />
      </div>
    </Layout>
  );
}
