'use client';

import { Layout } from '@/components/layouts';
import { Home } from '@/components/modules';

export default function HomePage() {
  // const [loading, setLoading] = useState<boolean>(true);
  // useIsomorphicLayoutEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  // return !loading ? (
  //   <Layout>
  //     <Home />
  //   </Layout>
  // ) : (
  //   <Loading />
  // );
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
