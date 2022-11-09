import React from 'react';
import { Layout } from '../../components';
import BAKN from './BAKN';
import Form from './Form';
import Mitra from './Mitra';
import PKS from './PKS';
import Project from './Project';
import SPH from './SPH';
import SPPH from './SPPH';

export default function Index() {
  return (
    <Layout
      heading={'Update Project'}
      subHeading={'This page for view and upload all document'}>
      <div className="relative mt-8 bg-white rounded-lg p-7 flex justify-center items-center">
        <h1 className="text-2xl font-semibold text-zinc-800 leading-relaxed text-center uppercase">
          IO-001 - Pembelian Macbook Pro M1 Max
        </h1>
      </div>

      <Form isShow={true} heading={'Detail Project'}>
        <Project />
      </Form>

      <Form isShow={true} heading={'Input Mitra'}>
        <Mitra />
      </Form>
      <Form heading={'Upload SPPH'}>
        <SPPH />
      </Form>
      <Form heading={'Upload SPH'}>
        <SPH />
      </Form>
      <Form heading={'Upload BAKN'}>
        <BAKN />
      </Form>
      <Form heading={'Upload PKS'}>
        <PKS />
      </Form>
    </Layout>
  );
}
