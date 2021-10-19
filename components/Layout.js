import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>This page has a title 🤔</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Gear Doge</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>Todos direitos reservados. Guide Doge.</Typography>
      </footer>
    </div>
  );
}
