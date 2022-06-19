import React from 'react';
import Layout from 'components/layout/Layout';
import LoginForm from 'components/forms/LoginForm';
import Image from 'next/image';
import styles from 'components/forms/LoginForm.module.css';

export default function LoginPage() {
  if (process.env.DISABLE_LOGIN) {
    return null;
  }

  return (
    <Layout title="login" header={false} footer={false} center className={styles.background}>
      <LoginForm />
      <div style={{ textAlign: 'center', padding: '30px 0px' }}>
        <Image src="/back.jpg" width={6000} height={3375} alt="万兆带宽" />
      </div>
    </Layout>
  );
}
