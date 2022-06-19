import {getStoreItem} from 'api/store';
import Layout from 'components/Layout';
import ProductInfo from 'components/ProductInfo';
import {GetServerSideProps} from 'next';
import {useEffect} from 'react';

interface IStoreDetail {
  info: any;
}

function StoreDetail({info}: IStoreDetail) {
  useEffect(() => {
    console.log(info);
  }, [info]);

  return (
    <Layout>
      <ProductInfo />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const {id} = context.query;
  // const info = await getStoreItem(id);

  return {
    props: {
      // info,
    },
  };
};

export default StoreDetail;
