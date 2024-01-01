'use client';

import './page.css'
import {lazy} from "react";
import {Card1, DynamicCard} from "@/components/presentational";

const Card2 = lazy(() => import('@/components/presentational/Card2'));

function DynamicImportTest () {
  return <div>
    <Card1 rendered={false}><p>Card1</p></Card1>
    <DynamicCard name="Card2" component={Card2}>
    </DynamicCard>
  </div>
}

export default DynamicImportTest;
