<!--Use:sellerSignedContract-->
<template>
  <div
    class="text-left text-base sm:text-xl space-y-6 leading-7 sm:leading-9 md:leading-10"
  >
    <div>
      <p>{{ orgnaizationName }} 特約商店合約書</p>
      <!--國立臺中科技大學-->
      <p>{{ orgnaizationName }} 學生會（以下簡稱甲方）</p>
      <!--國立臺中科技大學-->
      <p>{{ seller }}（以下簡稱乙方）</p>
      <!--誰說海的味道都是鹹的-->
    </div>
    <p>
      雙方同意建立特約關係，約定條款如下： <br />
      第一條
      甲方學校之學生至乙方消費，於消費時出示學生證，即可享有乙方提供之優惠方案。<br />
      第二條 甲方為使學生廣知，得將與乙方特約資訊刊登於社群媒體(FB、IG)。
      <br />
      第三條
      甲方會給予乙方一張特約商家貼紙，乙方需將該貼紙張貼於店家或結帳明顯之處。<br />
      第四條
      乙方履約應本誠信原則，不得提供低於市價之次級產品供甲方學校之學生消費，以及不得有提高售價在打折之情形，若經查屬實，甲方保留法律追述權。<br />
      第五條
      乙方若有下列情形之一者，甲方得通知限期改善，逾期仍不改善得終止合約：<br />
    </p>
    <div class="list-decimal">
      <li>違反第四條情形者。</li>
      <li>未能依約履行優惠時。</li>
      <li>其他有重大違約之情形。</li>
    </div>
    <p>
      第六條 優惠商店提供之優惠期間自即日起至 112 年 07 月 20
      日止，期滿後若甲乙雙方未表示終止合約，則本合約視同自動續約一年。<br />
      第七條 本合約未盡事宜，經雙方同意，得以書面變更之。<br />
      第八條 本合約書一式兩份，甲乙雙方各執壹份為憑，簽章後生效。 <br />
    </p>
    <p>立合約書人：</p>
    <div>
      <p>甲方：{{ orgnaizationName }} 學生會</p>
      <!--國立臺中科技大學-->
      <p>授權代理人(簽章)：{{ studentAssociationPresident }}</p>
      <!--周彥廷-->
      <p>地 址：{{ organizationLocation }}</p>
      <!--台中市北區三民路三段129號-->
      <p>電 話：{{ studentTele }}</p>
      <!--04-2219-5678-->
    </div>
    <div>
      <p>乙方：</p>
      <p>負責人(簽章)</p>
      <p>統一編號：</p>
      <p>地址：</p>
      <p>電話：</p>
      <p>中華民國年月日</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    orgnaizationName: String,
    seller: String,
    studentAssociationPresident: String,
    organizationLocation: String,
    studentTele: String,
  },
  components: {},
  setup() {},
};
</script>
