import Head from 'next/head';
import Link from 'next/link';
import { ReactNode, useRef } from 'react';

//hooks
import { useEventListener } from 'src/hooks/useEventListener';

//style
import styles from './style.module.scss';

interface Props {
  title: string;
  children: ReactNode;
  onScrollEnds?: any;
}

const MainLayout = (props: Props) => {
  const { title, children, onScrollEnds } = props;
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    let scrollTop = scrollRef?.current?.scrollTop;
    let scrollHeight = scrollRef?.current?.scrollHeight;
    let offsetHeight = scrollRef?.current?.offsetHeight;

    if (scrollTop && scrollHeight && offsetHeight) {
      if (offsetHeight + scrollTop >= scrollHeight) {
        if (onScrollEnds) {
          onScrollEnds();
        }
      }
    }
  };

  useEventListener(scrollRef, 'scroll', handleScroll);

  return (
    <div ref={scrollRef} className={styles.container}>
      <Head>
        <title>Ricky Morty Wiki</title>
        <meta name="description" content="Test project for Housing Anywhere" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className="uk-text-bolder">
          <Link href="/">
            <a className="uk-link-heading">Ricky Morty Wiki</a>
          </Link>
        </h1>
      </header>
      <h2>{title}</h2>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
