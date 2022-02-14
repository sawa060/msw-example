import type {AppProps} from 'next/app';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  // dynamic import でファイルを読み込んで MSW を有効にする
  const MockServer = () => import('../mocks/worker');
  MockServer();
}

const MyApp = ({Component, pageProps}: AppProps) => <Component {...pageProps} />;

// eslint-disable-next-line import/no-default-export
export default MyApp;
