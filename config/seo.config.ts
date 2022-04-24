// TODO: og:images, url 수정하기
export default {
  defaultTitle: 'K-pop Master Project',
  titleTemplate: '%s | K-pop Master Project',
  title: undefined,
  description: 'A K-pop guessing game',
  canonical: 'https://kpop-master.dev/',
  openGraph: {
    locale: 'ko_KR',
    type: 'website',
    url: 'https://kpop-master.dev/',
    site_name: 'K-pop Master Project',
    images: [
      {
        url: 'https://www.example.ie/og-image-2.jpg',
        width: 800,
        height: 600,
        alt: 'Og Image Alt 2',
      },
    ],
  },
  twitter: {
    site: 'K-pop master',
    cardType: 'summary_large_image',
  },
};
