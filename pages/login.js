import React from 'react';
import Layout from 'components/layout/Layout';
import LoginForm from 'components/forms/LoginForm';
import Back from 'assets/back.svg';
import styles from './LoginForm.module.css';
import Icon from 'components/common/Icon';

export default function LoginPage() {
  if (process.env.DISABLE_LOGIN) {
    return null;
  }

  return (
    <Layout title="login" header={false} footer={false} center>
      <LoginForm />
      <div className={styles.header}>
        <Icon icon={<Back />} size="xlarge" className={styles.icon} />
        <h1 className="center"></h1>
      </div>
    </Layout>
  );
}
