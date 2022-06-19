import React from 'react';
import Layout from 'components/layout/Layout';
import LoginForm from 'components/forms/LoginForm';
import styles from 'components/forms/LoginForm.module.css';

export default function LoginPage() {
  if (process.env.DISABLE_LOGIN) {
    return null;
  }

  return (
    <div className={styles.background}>
      <Layout title="login" header={false} footer={false} center>
        <LoginForm />
      </Layout>
    </div>
  );
}
