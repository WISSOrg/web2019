import React from 'react';
import Helmet from 'react-helmet';
import SeoImage from '../images/wiss_2x1.jpg';

export default () => (
  <Helmet>
    <meta name="description" content="WISSは、2泊3日の泊り込み形式で、インタラクティブシステムにおける未来を切り拓くような新しいアイディア・技術を議論するワークショップです。この分野において国内でもっともアクティブな学術会議のひとつであり、例年150名以上の参加者が朝から深夜まで活発で意義深い情報交換をおこなっています。さまざまなバックグラウンドを持った方々からの積極的な論文投稿および参加をお待ちしております。" />
    <meta name="image" content={SeoImage} />

    <meta name="twitter:card" content="summary_large_image" />

    <meta property="og:title" content={"WISS 2019: 第27回インタラクティブシステムとソフトウェアに関するワークショップ"} />
    <meta property="og:description" content={"WISSは、2泊3日の泊り込み形式で、インタラクティブシステムにおける未来を切り拓くような新しいアイディア・技術を議論するワークショップです。この分野において国内でもっともアクティブな学術会議のひとつであり、例年150名以上の参加者が朝から深夜まで活発で意義深い情報交換をおこなっています。さまざまなバックグラウンドを持った方々からの積極的な論文投稿および参加をお待ちしております。"} />
    <meta property="og:image" content={SeoImage} />
    <meta property="og:url" content={"https://www.wiss.org/WISS2019/"} />
  </Helmet>
)
