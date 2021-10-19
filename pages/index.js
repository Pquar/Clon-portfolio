import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header.js';
import Layout from '../components/Layout.js';

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Produtos </h1>
        <ul>
          <li>produto 1</li>
          <li>produto 2</li>
          <li>produto 2</li>
        </ul>
      </div>
    </Layout>
  );
}
