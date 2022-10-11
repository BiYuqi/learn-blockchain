import React from 'react'
import Head from 'next/head'
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Learn Ethers.js" />
      </Head>
      <Header />
      <main className="p-10">{children}</main>
    </>
  )
}
