import Card from "@/components/card/Card";
import GridContainer from "@/components/container/GridContainer";
import Tabs from "@/components/tabs/Tabs";
import Head from "next/head";
import Link from "next/link";
import React from "react";


const getTrending = async () => {
  let req = await fetch(`https://eu2-cheerful-tadpole-32531.upstash.io/get/trending`, {
headers: {
Authorization: `Bearer ${process.env.REDIS_BEARER_TOKEN}`
}
})
let res = await req.json();

  return JSON.parse(res.result);

}

// const fetchRedis = async () => {
//   let req = await fetch(`https://eu2-cheerful-tadpole-32531.upstash.io/get/death-note`, {
// headers: {
// Authorization: "Bearer An8TACQgM2ZmNTUwOWEtM2I5Yy00ZWE0LWE2NWItMmNiNjFiYTFjYzI1DNPhw9vdt05fBhjPq1sklWtBNW5UapmmuUwqhABRhl4="
// }
// })
// let res = await req.json();

//   return res;

// }

const fetchLatest = async () => {
  let req = await fetch(`https://eu2-cheerful-tadpole-32531.upstash.io/get/latest`, {
    cache:"no-store",
headers: {
Authorization: `Bearer ${process.env.REDIS_BEARER_TOKEN}`
}
})
let res = await req.json();

  return JSON.parse(res.result);

}


async function Home() {
  const data = await getTrending();
  const latest = await fetchLatest()


  return (
    <div>
      <Head>
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/kan.jpg"></link>
      <meta name="theme-color" content="#fff" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:site_name" content="Animex" />
      <meta property="og:type" content="website" />
      <meta name="author" content={"ottoprogrammer"} />
      <meta
        name="keywords"
        content="Animex, animex, animexstream, anime, anime live, free anime, anime stream, anime hd, english sub, kissanime, gogoanime, animeultima, 9anime, 123animes, animefreak, vidstreaming, gogo-stream"
      />
      <meta
        property="og:title"
        content="Animex - Watch Anime for free in HD quality with English subbed or dubbed"
      />
      <meta
        property="og:description"
        content="Animex - Watch Anime for free in HD quality with English subbed or dubbed. You can watch anime online free in HD. Best place for free find and one-click anime. English Subbed and Dubbed anime online. WATCH NOW!"
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Animex" />
      <meta property="og:url" content="https://animex.live/" />
      <meta itemprop="image" content="https://i.imgur.com/yH3ftPc.png" />
      <meta property="og:image" content="https://i.imgur.com/yH3ftPc.png" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta
        property="og:image:secure_url"
        content="https://i.imgur.com/yH3ftPc.png"
      />
      <meta property="og:image:width" content="650" />
      <meta property="og:image:height" content="350" />
      <meta property="twitter:title" content="Animex - Anywhere Anytime" />
      <meta
        property="twitter:description"
        content="Browse thousands of animes here for free. High quality anime 24/7 without signing up or malicious ads."
      />
      <meta property="twitter:url" content="https://animex.live" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="apple-mobile-web-app-status-bar" content="#c40808" />
      <link rel="apple-touch-icon" href="logo250.png" />
      <meta name="theme-color" content="#000000" />
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </Head>
      
    <Tabs Trending={data} Latest={latest} MyList={[]}/>

    

    
    </div>
  );
}

export default Home;
