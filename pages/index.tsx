/* eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import TabMenu from 'components/TabMenu';
import Main from './main/index';
import Aside from 'components/Aside';
import { getProducts } from '../src/common/api/api';
import styled from 'styled-components';
import Footer from 'components/Footer';

const Home: NextPage = ({ list }: any) => {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: 'auto' }}>
      <Index>
        <TabMenu />
        <Main />
        <Footer />
      </Index>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const data = await getProducts();

  return {
    props: {
      list: data,
    },
  };
}

const Index = styled.div`
  height: 100vh;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  border-radius: 2% 2% 0 0;
  color: ${({ theme }) => theme.colors.textColor};

  @media ${({ theme }) => theme.mobile} {
  }
`;
