import React from 'react';
import Mock from 'mockjs';
import { useRequest } from 'qianHooks';

export default () => {
  const getUserName = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Mock.mock('@name'));
      }, 1000);
    });
  };
  const { data, error, loading } = useRequest(getUserName);
  if (loading) {
    return <p>loading</p>;
  }
  if (error) {
    return <p>error:{error}</p>;
  }
  if (data) {
    return <p>username:{data}</p>;
  }
};
