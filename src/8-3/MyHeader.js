import { Helmet } from "react-helmet-async";
import { useMatches } from "react-router-dom";

//メタ情報を設定するためのコンポーネントを定義する

export default function MyHeader(props){
  let {
      title = 'トップページ',
      keywords= 'React, javascript',
      description= 'トップページの紹介です。'
  } = useMatches().at(-1).handle ?? {}

  //propsの値をプレイスホルダーに反映
  title = title.replace('%s' , props.title);
  keywords = keywords.replace('%s', props.keywords);
  description = description.replace('%s', props.description);

  return(
      //<head>要素に埋め込む要素を準備
      <Helmet>
          <title>{title}</title>
          <meta name="keywords"  content={keywords}/>
          <meta name="description"  content={description}/>
      </Helmet>
  )
}